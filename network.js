// ===================================================
// QUIZ ARENA — REAL-TIME NETWORK ENGINE
// Triple-redundancy: BroadcastChannel (local) + MQTT over WSS + WebRTC PeerJS
// Zero paid servers required. Runs 100% in client browser!
// ===================================================

class ArenaNetwork {
  constructor() {
    this.role = null; // 'HOST' or 'CLIENT'
    this.pin = null;
    this.clientId = 'c_' + Math.random().toString(36).substring(2, 9);
    this.studentName = '';
    this.connected = false;
    this.activeBrokerIndex = 0;
    this.activeBrokerName = 'Connecting...';
    this.listeners = {};

    // Transports
    this.broadcastChannel = null;
    this.mqttClient = null;
    this.peer = null;
    this.peerConnections = {};

    // Internal state
    this._seenMessageKeys = new Set();
    this._connectTimeout = null;
    this._isSwitchingBroker = false;
    this._msgCounter = 0;
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
  initHost(pin, preferredBrokerIndex = 0) {
    this.role = 'HOST';
    this.pin = String(pin).trim();
    this.initBroadcastChannel();
    this.initMQTT(preferredBrokerIndex);
    this.initPeerHost();
    console.log(`[ArenaNetwork] Host initialized for PIN: ${this.pin}`);
  }

  // --- INITIALIZE AS CLIENT (STUDENT) ---
  initClient(pin, studentName, preferredBrokerIndex = 0) {
    this.role = 'CLIENT';
    this.pin = String(pin).trim();
    this.studentName = String(studentName).trim();
    this.initBroadcastChannel();
    this.initMQTT(preferredBrokerIndex);
    this.initPeerClient();

    // Immediately send initial join packet on BroadcastChannel
    setTimeout(() => {
      this.sendToHost('STUDENT_JOIN', {
        clientId: this.clientId,
        name: this.studentName,
        timestamp: Date.now()
      });
    }, 100);

    console.log(`[ArenaNetwork] Client initialized for PIN: ${this.pin}, Student: ${this.studentName} (ID: ${this.clientId})`);
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

  // --- 2. MULTI-BROKER SECURE WEBSOCKET MQTT (With Auto-Failover & Topic Segregation) ---
  initMQTT(preferredBrokerIndex = 0) {
    if (typeof mqtt === 'undefined') {
      console.warn('[ArenaNetwork] mqtt.js library not loaded yet; relying on fallback transports');
      return;
    }

    const brokers = (CONFIG.MQTT_BROKERS && CONFIG.MQTT_BROKERS.length > 0)
      ? CONFIG.MQTT_BROKERS
      : [{ url: 'wss://broker.emqx.io:8084/mqtt', name: 'EMQX Public TLS' }];

    const startIndex = Math.max(0, Math.min(Number(preferredBrokerIndex) || 0, brokers.length - 1));
    this.activeBrokerIndex = startIndex;
    this.tryConnectBroker(brokers, startIndex, 0);
  }

  tryConnectBroker(brokers, index, attemptCount) {
    if (this._isSwitchingBroker) return;
    this._isSwitchingBroker = true;

    // Clean up any existing connection
    if (this.mqttClient) {
      try {
        this.mqttClient.removeAllListeners();
        this.mqttClient.end(true);
      } catch (e) {}
      this.mqttClient = null;
    }

    const broker = brokers[index];
    this.activeBrokerIndex = index;
    this.activeBrokerName = broker.name;
    this.connected = false;

    console.log(`[ArenaNetwork] Connecting to broker: ${broker.name} (${broker.url}) [attempt ${attemptCount + 1}]...`);
    this.emit('connection_status', {
      connected: false,
      status: 'connecting',
      brokerName: broker.name,
      brokerIndex: index,
      attempt: attemptCount + 1
    });

    const clientPrefix = (this.role || 'client').toLowerCase();
    const mqttOpts = {
      clientId: `${clientPrefix}_${this.clientId}_${Math.random().toString(36).substring(2, 6)}`,
      clean: true,
      connectTimeout: 4000,
      reconnectPeriod: 3000,
      keepalive: 30
    };

    let connectionResolved = false;
    clearTimeout(this._connectTimeout);

    // Failover timer: if no connection in 4.5 seconds, try next broker in the pool
    this._connectTimeout = setTimeout(() => {
      if (!connectionResolved && !this.connected) {
        console.warn(`[ArenaNetwork] Timeout connecting to ${broker.name}. Switching to next broker...`);
        connectionResolved = true;
        this._isSwitchingBroker = false;
        const nextIndex = (index + 1) % brokers.length;
        this.tryConnectBroker(brokers, nextIndex, attemptCount + 1);
      }
    }, 4500);

    try {
      this.mqttClient = mqtt.connect(broker.url, mqttOpts);

      this.mqttClient.on('connect', () => {
        connectionResolved = true;
        clearTimeout(this._connectTimeout);
        this._isSwitchingBroker = false;
        this.connected = true;

        console.log(`[ArenaNetwork] ✅ Connected to ${broker.name}`);
        this.emit('connection_status', {
          connected: true,
          status: 'connected',
          brokerName: broker.name,
          brokerIndex: index
        });

        // TOPIC SEGREGATION:
        // Host subscribes to all student uplinks: quizarena/arena/{pin}/up/#
        // Students subscribe ONLY to host downlink: quizarena/arena/{pin}/down
        const prefix = CONFIG.MQTT_TOPIC_PREFIX || 'quizarena/arena/';
        const subTopic = (this.role === 'HOST')
          ? `${prefix}${this.pin}/up/#`
          : `${prefix}${this.pin}/down`;

        this.mqttClient.subscribe(subTopic, { qos: 0 }, (err) => {
          if (!err) {
            console.log(`[ArenaNetwork] Subscribed to: ${subTopic}`);
            this.emit('ready_to_transmit', {
              brokerIndex: index,
              brokerName: broker.name
            });
            if (this.role === 'CLIENT') {
              this.sendToHost('STUDENT_JOIN', {
                clientId: this.clientId,
                name: this.studentName,
                timestamp: Date.now()
              });
            }
          } else {
            console.warn(`[ArenaNetwork] Subscription error on ${subTopic}:`, err);
          }
        });
      });

      this.mqttClient.on('message', (receivedTopic, messageBuffer) => {
        try {
          const rawStr = messageBuffer.toString();
          const parsed = JSON.parse(rawStr);
          this.handleIncomingRawMessage(parsed, 'MQTT');
        } catch (e) {
          console.warn('[ArenaNetwork] MQTT JSON parse error', e);
        }
      });

      this.mqttClient.on('error', (err) => {
        console.warn(`[ArenaNetwork] Error on ${broker.name}:`, err.message || err);
        if (!this.connected && !connectionResolved) {
          connectionResolved = true;
          clearTimeout(this._connectTimeout);
          this._isSwitchingBroker = false;
          const nextIndex = (index + 1) % brokers.length;
          this.tryConnectBroker(brokers, nextIndex, attemptCount + 1);
        }
      });

      this.mqttClient.on('close', () => {
        if (this.connected) {
          this.connected = false;
          console.warn(`[ArenaNetwork] Connection closed on ${broker.name}`);
          this.emit('connection_status', {
            connected: false,
            status: 'reconnecting',
            brokerName: broker.name,
            brokerIndex: index
          });
        }
      });

    } catch (e) {
      console.warn(`[ArenaNetwork] Exception starting MQTT on ${broker.name}:`, e);
      connectionResolved = true;
      clearTimeout(this._connectTimeout);
      this._isSwitchingBroker = false;
      const nextIndex = (index + 1) % brokers.length;
      this.tryConnectBroker(brokers, nextIndex, attemptCount + 1);
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
            role: 'CLIENT',
            pin: this.pin
          });
        });
        conn.on('data', (data) => {
          this.handleIncomingRawMessage(data, 'PeerJS');
        });
      });
    } catch (e) {}
  }

  // --- MESSAGE SENDER API ---
  // Host broadcasts to all students (downlink)
  broadcast(type, payload = {}) {
    const msgId = 'h_' + (++this._msgCounter) + '_' + Date.now();
    const message = {
      type,
      payload,
      sender: this.clientId,
      senderName: 'HOST',
      role: 'HOST',
      pin: this.pin,
      timestamp: Date.now(),
      msgId
    };

    // 1. BroadcastChannel (Same-machine / split tab)
    if (this.broadcastChannel) {
      try {
        this.broadcastChannel.postMessage(message);
      } catch (e) {}
    }

    // 2. MQTT Downlink Topic
    if (this.mqttClient && this.mqttClient.connected) {
      try {
        const prefix = CONFIG.MQTT_TOPIC_PREFIX || 'quizarena/arena/';
        const topic = `${prefix}${this.pin}/down`;
        this.mqttClient.publish(topic, JSON.stringify(message), { qos: 0 });
      } catch (e) {
        console.warn('[ArenaNetwork] Broadcast publish error', e);
      }
    }

    // 3. PeerJS
    Object.values(this.peerConnections).forEach(conn => {
      try {
        conn.send(message);
      } catch (e) {}
    });
  }

  // Student sends message to Host (uplink)
  sendToHost(type, payload = {}) {
    const msgId = 's_' + (++this._msgCounter) + '_' + Date.now();
    const message = {
      type,
      payload,
      sender: this.clientId,
      senderName: this.studentName,
      role: 'CLIENT',
      pin: this.pin,
      timestamp: Date.now(),
      msgId
    };

    // 1. BroadcastChannel
    if (this.broadcastChannel) {
      try {
        this.broadcastChannel.postMessage(message);
      } catch (e) {}
    }

    // 2. MQTT Uplink Topic (Isolated per student)
    if (this.mqttClient && this.mqttClient.connected) {
      try {
        const prefix = CONFIG.MQTT_TOPIC_PREFIX || 'quizarena/arena/';
        const topic = `${prefix}${this.pin}/up/${this.clientId}`;
        this.mqttClient.publish(topic, JSON.stringify(message), { qos: 0 });
      } catch (e) {
        console.warn('[ArenaNetwork] Uplink publish error', e);
      }
    }

    // 3. PeerJS
    if (this.peerConnections['host']) {
      try {
        this.peerConnections['host'].send(message);
      } catch (e) {}
    }
  }

  // --- MESSAGE INGESTION & SLIDING-WINDOW DEDUPLICATION ---
  handleIncomingRawMessage(msg, transportName) {
    if (!msg || !msg.type || !msg.pin) return;
    if (String(msg.pin) !== String(this.pin)) return; // Wrong room
    if (msg.sender === this.clientId) return; // Ignore own echo

    // Deduplication key
    const dedupKey = `${msg.sender}_${msg.type}_${msg.msgId || msg.timestamp}`;
    if (this._seenMessageKeys.has(dedupKey)) return;
    this._seenMessageKeys.add(dedupKey);

    // Keep deduplication set bounded to 250 items to avoid memory leaks
    if (this._seenMessageKeys.size > 250) {
      const oldestKey = this._seenMessageKeys.values().next().value;
      this._seenMessageKeys.delete(oldestKey);
    }

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
    clearTimeout(this._connectTimeout);
    if (this.broadcastChannel) {
      try { this.broadcastChannel.close(); } catch(e){}
    }
    if (this.mqttClient) {
      try {
        this.mqttClient.removeAllListeners();
        this.mqttClient.end(true);
      } catch(e){}
    }
    if (this.peer) {
      try { this.peer.destroy(); } catch(e){}
    }
  }
}

// Global factory helper
window.ArenaNetwork = ArenaNetwork;
