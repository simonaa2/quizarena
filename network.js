// ===================================================
// QUIZ ARENA — REAL-TIME NETWORK ENGINE
// Triple-redundancy: BroadcastChannel (local) + MQTT over WSS + WebRTC PeerJS
// Zero paid servers required. Runs 100% in client browser!
// ===================================================

class ArenaNetwork {
  constructor() {
    this.role = null; // 'HOST' or 'CLIENT'
    this.pin = null;
    this.clientId = 'client_' + Math.random().toString(36).substring(2, 9);
    this.studentName = '';
    this.connected = false;
    this.listeners = {};

    // Transports
    this.broadcastChannel = null;
    this.mqttClient = null;
    this.peer = null;
    this.peerConnections = {};

    // Heartbeat & status
    this.statusMessage = 'Initializing...';
  }

  // --- EVENT DISPATCHER ---
  on(event, callback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }

  emit(event, data) {
    if (this.listeners[event]) {
      this.listeners[event].forEach(cb => {
        try {
          cb(data);
        } catch (err) {
          console.error(`[ArenaNetwork] Error in listener for ${event}:`, err);
        }
      });
    }
  }

  // --- INITIALIZE AS HOST ---
  initHost(pin) {
    this.role = 'HOST';
    this.pin = String(pin).trim();
    this.initBroadcastChannel();
    this.initMQTT();
    this.initPeerHost();
    console.log(`[ArenaNetwork] Host initialized for PIN: ${this.pin}`);
  }

  // --- INITIALIZE AS CLIENT (STUDENT) ---
  initClient(pin, studentName) {
    this.role = 'CLIENT';
    this.pin = String(pin).trim();
    this.studentName = String(studentName).trim();
    this.initBroadcastChannel();
    this.initMQTT();
    this.initPeerClient();
    console.log(`[ArenaNetwork] Client initialized for PIN: ${this.pin}, Student: ${this.studentName}`);
  }

  // --- 1. LOCAL BROADCAST CHANNEL (Instant cross-tab / split screen) ---
  initBroadcastChannel() {
    if (typeof window !== 'undefined' && window.BroadcastChannel) {
      try {
        const channelName = 'quizarena_arena_' + this.pin;
        this.broadcastChannel = new BroadcastChannel(channelName);
        this.broadcastChannel.onmessage = (event) => {
          this.handleIncomingRawMessage(event.data, 'BroadcastChannel');
        };
      } catch (e) {
        console.warn('[ArenaNetwork] BroadcastChannel unsupported', e);
      }
    }
  }

  // --- 2. PUBLIC MQTT OVER TLS WEBSOCKET ---
  initMQTT() {
    if (typeof mqtt === 'undefined') {
      console.warn('[ArenaNetwork] mqtt.js library not loaded yet; will rely on local/peer transports');
      return;
    }

    const brokerUrl = (CONFIG.MQTT_BROKERS && CONFIG.MQTT_BROKERS[0].url) || 'wss://broker.hivemq.com:8884/mqtt';
    const topic = `${CONFIG.MQTT_TOPIC_PREFIX || 'quizarena/arena/'}${this.pin}/#`;

    try {
      const opts = {
        clientId: `${this.role.toLowerCase()}_${this.clientId}`,
        clean: true,
        connectTimeout: 5000,
        reconnectPeriod: 3000
      };

      this.mqttClient = mqtt.connect(brokerUrl, opts);

      this.mqttClient.on('connect', () => {
        this.connected = true;
        this.emit('connection_status', { connected: true, transport: 'MQTT (WSS)' });
        this.mqttClient.subscribe(topic, { qos: 0 }, (err) => {
          if (!err) {
            console.log(`[ArenaNetwork] Subscribed to MQTT topic: ${topic}`);
            // If student, announce join right away
            if (this.role === 'CLIENT') {
              this.sendToHost('STUDENT_JOIN', {
                clientId: this.clientId,
                name: this.studentName,
                timestamp: Date.now()
              });
            }
          }
        });
      });

      this.mqttClient.on('message', (receivedTopic, messageBuffer) => {
        try {
          const rawStr = messageBuffer.toString();
          const parsed = JSON.parse(rawStr);
          this.handleIncomingRawMessage(parsed, 'MQTT');
        } catch (e) {
          console.warn('[ArenaNetwork] MQTT parse error', e);
        }
      });

      this.mqttClient.on('error', (err) => {
        console.warn('[ArenaNetwork] MQTT connection error:', err);
      });
    } catch (e) {
      console.warn('[ArenaNetwork] Failed to initialize MQTT', e);
    }
  }

  // --- 3. WEBRTC PEERJS (P2P direct fallback) ---
  initPeerHost() {
    if (typeof Peer === 'undefined') return;
    try {
      const peerId = `quizarena-${this.pin}`;
      this.peer = new Peer(peerId, { debug: 1 });
      this.peer.on('open', (id) => {
        console.log(`[ArenaNetwork] PeerJS Host opened with ID: ${id}`);
      });
      this.peer.on('connection', (conn) => {
        this.peerConnections[conn.peer] = conn;
        conn.on('data', (data) => {
          this.handleIncomingRawMessage(data, 'PeerJS');
        });
      });
      this.peer.on('error', (err) => {
        // ID might be taken if reloaded quickly; non-fatal since MQTT/Broadcast handles it
        console.warn('[ArenaNetwork] PeerJS host warning:', err.type);
      });
    } catch (e) {}
  }

  initPeerClient() {
    if (typeof Peer === 'undefined') return;
    try {
      const hostPeerId = `quizarena-${this.pin}`;
      this.peer = new Peer({ debug: 1 });
      this.peer.on('open', () => {
        const conn = this.peer.connect(hostPeerId, { reliable: true });
        conn.on('open', () => {
          this.peerConnections['host'] = conn;
          conn.send({
            type: 'STUDENT_JOIN',
            payload: {
              clientId: this.clientId,
              name: this.studentName,
              timestamp: Date.now()
            },
            sender: this.clientId,
            senderName: this.studentName,
            role: 'CLIENT'
          });
        });
        conn.on('data', (data) => {
          this.handleIncomingRawMessage(data, 'PeerJS');
        });
      });
    } catch (e) {}
  }

  // --- MESSAGE SENDER API ---
  // Host broadcasts to all students
  broadcast(type, payload = {}) {
    const message = {
      type,
      payload,
      sender: this.clientId,
      senderName: 'HOST',
      role: 'HOST',
      pin: this.pin,
      timestamp: Date.now()
    };

    // 1. BroadcastChannel
    if (this.broadcastChannel) {
      try {
        this.broadcastChannel.postMessage(message);
      } catch (e) {}
    }

    // 2. MQTT
    if (this.mqttClient && this.mqttClient.connected) {
      try {
        const topic = `${CONFIG.MQTT_TOPIC_PREFIX || 'quizarena/arena/'}${this.pin}/host`;
        this.mqttClient.publish(topic, JSON.stringify(message), { qos: 0 });
      } catch (e) {}
    }

    // 3. PeerJS
    Object.values(this.peerConnections).forEach(conn => {
      try {
        conn.send(message);
      } catch (e) {}
    });
  }

  // Student sends message to Host
  sendToHost(type, payload = {}) {
    const message = {
      type,
      payload,
      sender: this.clientId,
      senderName: this.studentName,
      role: 'CLIENT',
      pin: this.pin,
      timestamp: Date.now()
    };

    // 1. BroadcastChannel
    if (this.broadcastChannel) {
      try {
        this.broadcastChannel.postMessage(message);
      } catch (e) {}
    }

    // 2. MQTT
    if (this.mqttClient && this.mqttClient.connected) {
      try {
        const topic = `${CONFIG.MQTT_TOPIC_PREFIX || 'quizarena/arena/'}${this.pin}/student/${this.clientId}`;
        this.mqttClient.publish(topic, JSON.stringify(message), { qos: 0 });
      } catch (e) {}
    }

    // 3. PeerJS
    if (this.peerConnections['host']) {
      try {
        this.peerConnections['host'].send(message);
      } catch (e) {}
    }
  }

  // --- MESSAGE INGESTION & DE-DUPLICATION ---
  handleIncomingRawMessage(msg, transportName) {
    if (!msg || !msg.type || !msg.pin) return;
    if (String(msg.pin) !== String(this.pin)) return; // Wrong room
    if (msg.sender === this.clientId) return; // Ignore own echo

    // De-duplicate fast identical packet received via multiple transports
    const dedupKey = `${msg.sender}_${msg.type}_${msg.timestamp}`;
    if (this._lastMsgKey === dedupKey) return;
    this._lastMsgKey = dedupKey;

    // Dispatch to registered listener
    this.emit(msg.type.toLowerCase(), {
      payload: msg.payload,
      sender: msg.sender,
      senderName: msg.senderName,
      role: msg.role,
      transport: transportName,
      timestamp: msg.timestamp
    });
  }

  destroy() {
    if (this.broadcastChannel) {
      try { this.broadcastChannel.close(); } catch(e){}
    }
    if (this.mqttClient) {
      try { this.mqttClient.end(true); } catch(e){}
    }
    if (this.peer) {
      try { this.peer.destroy(); } catch(e){}
    }
  }
}

// Global factory helper
window.ArenaNetwork = ArenaNetwork;
