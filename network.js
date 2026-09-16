// ===================================================
// QUIZ ARENA â€” REAL-TIME NETWORK ENGINE
// Multi-Broker Mesh Bridge: EMQX + Mosquitto + HiveMQ
// + Local BroadcastChannel + WebRTC PeerJS
// Zero paid servers required. 100% resilient across school firewalls!
// ===================================================

class ArenaNetwork {
  constructor() {
    this.role = null; // 'HOST' or 'CLIENT'
    this.pin = null;
    this.clientId = 'c_' + Math.random().toString(36).substring(2, 9);
    this.studentName = '';
    this.connected = false;
    this.activeBrokerIndex = 0;
    this.activeBrokerName = 'Initializing...';
    this.listeners = {};

    // Transports
    this.broadcastChannel = null;
    this.mqttClients = []; // HOST: Array of { client, broker, index, connected }
    this.mqttClient = null;  // CLIENT: Single active connection
    this.peer = null;
    this.peerConnections = {};

    // HTTPS Real-Time Relay (Firewall-Proof Port 443)
    this.httpRelayEnabled = true;
    this.httpRelayEventSource = null;
    this.httpRelayPollTimer = null;
    this.httpRelayConnected = false;
    this._roomStartTime = Date.now();
    this._lastLobbyBroadcastTime = 0;
    this._lastLobbyCount = -1;

    // Internal state
    this._seenMessageKeys = new Set();
    this._clientConnectTimeout = null;
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
  // Host connects to ALL brokers in the pool simultaneously + HTTPS Real-Time Relay!
  // Any student on ANY broker or on restricted school Wi-Fi communicates directly with teacher.
  initHost(pin) {
    this.role = 'HOST';
    this.pin = String(pin).trim();
    this._roomStartTime = Date.now();
    this.initBroadcastChannel();
    this.initHostHttpRelay();
    this.initHostMultiBrokerMQTT();
    this.initPeerHost();
    console.log(`[ArenaNetwork] Host initialized for PIN: ${this.pin}`);
  }

  // --- INITIALIZE AS CLIENT (STUDENT) ---
  initClient(pin, studentName, preferredBrokerIndex = 0) {
    this.role = 'CLIENT';
    this.pin = String(pin).trim();
    this.studentName = String(studentName).trim();
    this._roomStartTime = Date.now();
    this.initBroadcastChannel();
    this.initClientHttpRelay();
    this.initClientMQTT(preferredBrokerIndex);
    this.initPeerClient();

    // Immediately send initial join packet on all available channels
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

  // --- 2. HTTPS REAL-TIME RELAY (Firewall-Proof Port 443 SSE + Polling) ---
  initHostHttpRelay() {
    if (!this.httpRelayEnabled || typeof window === 'undefined') return;

    const upTopic = 'quizarena_' + this.pin + '_up';
    const sseUrl = `https://ntfy.sh/${upTopic}/sse`;

    try {
      if (window.EventSource) {
        this.httpRelayEventSource = new EventSource(sseUrl);
        this.httpRelayEventSource.onopen = () => {
          console.log(`[ArenaNetwork] ✅ HTTPS Real-Time Relay Host listening on ${upTopic}`);
          this.httpRelayConnected = true;
          this.connected = true;
          this._reportHostBrokerStatus();
        };

        this.httpRelayEventSource.onmessage = (event) => {
          try {
            const data = JSON.parse(event.data);
            if (data.event === 'message' && data.message) {
              const parsed = JSON.parse(data.message);
              this.handleIncomingRawMessage(parsed, 'HTTPS_Relay_SSE');
            }
          } catch (err) {}
        };

        this.httpRelayEventSource.onerror = () => {
          this.httpRelayConnected = false;
          this._reportHostBrokerStatus();
        };
      }
    } catch (e) {
      console.warn('[ArenaNetwork] HTTPS Relay EventSource init error:', e);
    }

    // Safety fallback: Only poll if EventSource is NOT open (saves bandwidth & prevents rate limits)
    clearInterval(this.httpRelayPollTimer);
    this.httpRelayPollTimer = setInterval(async () => {
      if (this.httpRelayEventSource && this.httpRelayEventSource.readyState === 1) {
        return; // EventSource.OPEN - live stream active, no polling required
      }
      try {
        const since = Math.max(0, Math.floor((Date.now() - 30000) / 1000));
        const res = await fetch(`https://ntfy.sh/${upTopic}/json?poll=1&since=${since}`, {
          cache: 'no-store'
        });
        if (res.ok) {
          const text = await res.text();
          if (text) {
            const lines = text.trim().split('\n');
            for (const line of lines) {
              if (!line.trim()) continue;
              try {
                const item = JSON.parse(line);
                if (item.event === 'message' && item.message) {
                  const parsed = JSON.parse(item.message);
                  this.handleIncomingRawMessage(parsed, 'HTTPS_Relay_Poll');
                }
              } catch (e) {}
            }
          }
          if (!this.httpRelayConnected) {
            this.httpRelayConnected = true;
            this.connected = true;
            this._reportHostBrokerStatus();
          }
        }
      } catch (err) {}
    }, 4000);
  }

  initClientHttpRelay() {
    if (!this.httpRelayEnabled || typeof window === 'undefined') return;

    const downTopic = 'quizarena_' + this.pin + '_down';
    const sseUrl = `https://ntfy.sh/${downTopic}/sse`;

    try {
      if (window.EventSource) {
        this.httpRelayEventSource = new EventSource(sseUrl);
        this.httpRelayEventSource.onopen = () => {
          console.log(`[ArenaNetwork] ✅ HTTPS Real-Time Relay Student connected to ${downTopic}`);
          this.httpRelayConnected = true;
          this.connected = true;
          this.emit('connection_status', {
            connected: true,
            status: 'connected',
            brokerName: 'HTTPS Real-Time Relay (Firewall-Proof)',
            brokerIndex: 99
          });
          this.emit('ready_to_transmit', {
            brokerIndex: 99,
            brokerName: 'HTTPS Real-Time Relay'
          });
          this.sendToHost('STUDENT_JOIN', {
            clientId: this.clientId,
            name: this.studentName,
            timestamp: Date.now()
          });
        };

        this.httpRelayEventSource.onmessage = (event) => {
          try {
            const data = JSON.parse(event.data);
            if (data.event === 'message' && data.message) {
              const parsed = JSON.parse(data.message);
              this.handleIncomingRawMessage(parsed, 'HTTPS_Relay_SSE');
            }
          } catch (err) {}
        };

        this.httpRelayEventSource.onerror = () => {
          this.httpRelayConnected = false;
        };
      }
    } catch (e) {
      console.warn('[ArenaNetwork] Client HTTPS Relay EventSource init error:', e);
    }

    // Safety fallback: Only poll if EventSource is NOT open (saves bandwidth & prevents rate limits)
    clearInterval(this.httpRelayPollTimer);
    this.httpRelayPollTimer = setInterval(async () => {
      if (this.httpRelayEventSource && this.httpRelayEventSource.readyState === 1) {
        return; // EventSource.OPEN - live stream active, no polling required
      }
      try {
        const since = Math.max(0, Math.floor((Date.now() - 30000) / 1000));
        const res = await fetch(`https://ntfy.sh/${downTopic}/json?poll=1&since=${since}`, {
          cache: 'no-store'
        });
        if (res.ok) {
          const text = await res.text();
          if (text) {
            const lines = text.trim().split('\n');
            for (const line of lines) {
              if (!line.trim()) continue;
              try {
                const item = JSON.parse(line);
                if (item.event === 'message' && item.message) {
                  const parsed = JSON.parse(item.message);
                  this.handleIncomingRawMessage(parsed, 'HTTPS_Relay_Poll');
                }
              } catch (e) {}
            }
          }
          if (!this.httpRelayConnected) {
            this.httpRelayConnected = true;
            this.connected = true;
            this.emit('connection_status', {
              connected: true,
              status: 'connected',
              brokerName: 'HTTPS Real-Time Relay (Firewall-Proof)',
              brokerIndex: 99
            });
          }
        }
      } catch (err) {}
    }, 4000);
  }

  // --- 3A. HOST MULTI-BROKER CONCURRENT BRIDGE ---
  initHostMultiBrokerMQTT() {
    if (typeof mqtt === 'undefined') {
      console.warn('[ArenaNetwork] mqtt.js library not loaded yet; relying on fallback transports');
      return;
    }

    const brokers = (CONFIG.MQTT_BROKERS && CONFIG.MQTT_BROKERS.length > 0)
      ? CONFIG.MQTT_BROKERS
      : [{ url: 'wss://broker.emqx.io:8084/mqtt', name: 'EMQX TLS' }];

    const prefix = CONFIG.MQTT_TOPIC_PREFIX || 'quizarena/arena/';
    const subTopic = `${prefix}${this.pin}/up/#`;

    this.mqttClients = [];

    brokers.forEach((broker, idx) => {
      try {
        console.log(`[ArenaNetwork] Host initiating link to Broker ${idx}: ${broker.name} (${broker.url})...`);
        const client = mqtt.connect(broker.url, {
          clientId: `host_${this.clientId}_b${idx}_${Math.random().toString(36).substring(2, 6)}`,
          clean: true,
          connectTimeout: 8000,
          reconnectPeriod: 3000,
          keepalive: 30
        });

        const entry = {
          client,
          broker,
          index: idx,
          connected: false
        };
        this.mqttClients.push(entry);

        client.on('connect', () => {
          entry.connected = true;
          this.connected = true;
          console.log(`[ArenaNetwork] ✅ Host connected to ${broker.name}`);

          client.subscribe(subTopic, { qos: 0 }, (err) => {
            if (!err) {
              console.log(`[ArenaNetwork] Host subscribed on ${broker.name} to: ${subTopic}`);
            } else {
              console.warn(`[ArenaNetwork] Subscription error on ${broker.name}:`, err);
            }
          });

          this._reportHostBrokerStatus();
        });

        client.on('message', (receivedTopic, messageBuffer) => {
          try {
            const rawStr = messageBuffer.toString();
            const parsed = JSON.parse(rawStr);
            this.handleIncomingRawMessage(parsed, `MQTT_${broker.name}`);
          } catch (e) {
            console.warn(`[ArenaNetwork] Parse error on ${broker.name}:`, e);
          }
        });

        client.on('error', (err) => {
          console.warn(`[ArenaNetwork] Host link warning on ${broker.name}:`, err.message || err);
        });

        client.on('close', () => {
          entry.connected = false;
          this._reportHostBrokerStatus();
        });

      } catch (err) {
        console.warn(`[ArenaNetwork] Failed to initialize link to ${broker.name}:`, err);
      }
    });
  }

  _reportHostBrokerStatus() {
    const connectedBrokers = this.mqttClients.filter(e => e.connected);
    const anyConnected = connectedBrokers.length > 0 || this.httpRelayConnected;
    this.connected = anyConnected;

    const names = connectedBrokers.map(e => e.broker.name);
    if (this.httpRelayConnected) {
      names.unshift('HTTPS Relay (Firewall-Proof)');
    }
    this.emit('connection_status', {
      connected: anyConnected,
      status: anyConnected ? 'connected' : 'reconnecting',
      brokerName: anyConnected ? names.join(' + ') : 'All networks disconnected',
      totalConnected: (connectedBrokers.length + (this.httpRelayConnected ? 1 : 0)),
      totalBrokers: this.mqttClients.length + 1
    });
  }

  // --- 2B. CLIENT SINGLE-BROKER WITH INSTANT FAILOVER ---
  initClientMQTT(preferredIndex = 0) {
    if (typeof mqtt === 'undefined') {
      console.warn('[ArenaNetwork] mqtt.js library not loaded yet; relying on fallback transports');
      return;
    }

    const brokers = (CONFIG.MQTT_BROKERS && CONFIG.MQTT_BROKERS.length > 0)
      ? CONFIG.MQTT_BROKERS
      : [{ url: 'wss://broker.emqx.io:8084/mqtt', name: 'EMQX TLS' }];

    const startIndex = Math.max(0, Math.min(Number(preferredIndex) || 0, brokers.length - 1));
    this.connectClientToBroker(brokers, startIndex);
  }

  connectClientToBroker(brokers, index) {
    if (this._isSwitchingBroker) return;
    this._isSwitchingBroker = true;

    // Clean up previous client if switching
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
    this.connected = this.httpRelayConnected || false;

    console.log(`[ArenaNetwork] Student connecting to MQTT ${broker.name} (${broker.url})...`);
    if (!this.httpRelayConnected) {
      this.emit('connection_status', {
        connected: false,
        status: 'connecting',
        brokerName: broker.name,
        brokerIndex: index
      });
    }

    clearTimeout(this._clientConnectTimeout);
    let connectionResolved = false;

    // Generous 7.5s failover timeout on student laptops
    this._clientConnectTimeout = setTimeout(() => {
      if (!connectionResolved && (!this.mqttClient || !this.mqttClient.connected)) {
        console.warn(`[ArenaNetwork] Timeout connecting to MQTT ${broker.name}. Trying next server in pool...`);
        connectionResolved = true;
        this._isSwitchingBroker = false;
        const nextIndex = (index + 1) % brokers.length;
        this.connectClientToBroker(brokers, nextIndex);
      }
    }, 7500);

    try {
      this.mqttClient = mqtt.connect(broker.url, {
        clientId: `stu_${this.clientId}_${Math.random().toString(36).substring(2, 6)}`,
        clean: true,
        connectTimeout: 6000,
        reconnectPeriod: 3000,
        keepalive: 30
      });

      this.mqttClient.on('connect', () => {
        connectionResolved = true;
        clearTimeout(this._clientConnectTimeout);
        this._isSwitchingBroker = false;
        this.connected = true;

        console.log(`[ArenaNetwork] ✅ Student connected to MQTT ${broker.name}`);
        this.emit('connection_status', {
          connected: true,
          status: 'connected',
          brokerName: this.httpRelayConnected ? `HTTPS Relay + ${broker.name}` : broker.name,
          brokerIndex: index
        });

        // Student subscribes ONLY to host downlink
        const prefix = CONFIG.MQTT_TOPIC_PREFIX || 'quizarena/arena/';
        const subTopic = `${prefix}${this.pin}/down`;

        this.mqttClient.subscribe(subTopic, { qos: 0 }, (err) => {
          if (!err) {
            console.log(`[ArenaNetwork] Student subscribed to MQTT: ${subTopic}`);
            this.emit('ready_to_transmit', {
              brokerIndex: index,
              brokerName: broker.name
            });
            this.sendToHost('STUDENT_JOIN', {
              clientId: this.clientId,
              name: this.studentName,
              timestamp: Date.now()
            });
          } else {
            console.warn(`[ArenaNetwork] Subscription error on ${subTopic}:`, err);
          }
        });
      });

      this.mqttClient.on('message', (receivedTopic, messageBuffer) => {
        try {
          const rawStr = messageBuffer.toString();
          const parsed = JSON.parse(rawStr);
          this.handleIncomingRawMessage(parsed, `MQTT_${broker.name}`);
        } catch (e) {
          console.warn('[ArenaNetwork] JSON parse error:', e);
        }
      });

      this.mqttClient.on('error', (err) => {
        console.warn(`[ArenaNetwork] MQTT Error on ${broker.name}:`, err.message || err);
        if (!connectionResolved) {
          connectionResolved = true;
          clearTimeout(this._clientConnectTimeout);
          this._isSwitchingBroker = false;
          const nextIndex = (index + 1) % brokers.length;
          this.connectClientToBroker(brokers, nextIndex);
        }
      });

      this.mqttClient.on('close', () => {
        if (!this.httpRelayConnected) {
          this.connected = false;
          console.warn(`[ArenaNetwork] Student MQTT closed on ${broker.name}`);
          this.emit('connection_status', {
            connected: false,
            status: 'reconnecting',
            brokerName: broker.name,
            brokerIndex: index
          });
        }
      });

    } catch (e) {
      console.warn(`[ArenaNetwork] Exception connecting to MQTT ${broker.name}:`, e);
      connectionResolved = true;
      clearTimeout(this._clientConnectTimeout);
      this._isSwitchingBroker = false;
      const nextIndex = (index + 1) % brokers.length;
      this.connectClientToBroker(brokers, nextIndex);
    }
  }

  // Student manual or auto-rotation to next broker in the pool
  rotateToNextBroker() {
    if (this.role !== 'CLIENT') return;
    const brokers = (CONFIG.MQTT_BROKERS && CONFIG.MQTT_BROKERS.length > 0)
      ? CONFIG.MQTT_BROKERS
      : [{ url: 'wss://broker.emqx.io:8084/mqtt', name: 'EMQX TLS' }];

    this._isSwitchingBroker = false;
    clearTimeout(this._clientConnectTimeout);
    const nextIndex = (this.activeBrokerIndex + 1) % brokers.length;
    console.log(`[ArenaNetwork] Rotating student to next server: Broker ${nextIndex} (${brokers[nextIndex].name})...`);
    this.connectClientToBroker(brokers, nextIndex);
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
  // Host broadcasts to ALL students across ALL connected brokers
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

    // 2. Publish to ALL connected MQTT brokers simultaneously
    const prefix = CONFIG.MQTT_TOPIC_PREFIX || 'quizarena/arena/';
    const topic = `${prefix}${this.pin}/down`;
    const payloadStr = JSON.stringify(message);

    if (this.mqttClients && this.mqttClients.length > 0) {
      this.mqttClients.forEach(entry => {
        if (entry.connected && entry.client) {
          try {
            entry.client.publish(topic, payloadStr, { qos: 0 });
          } catch (e) {
            console.warn(`[ArenaNetwork] Broadcast publish error on ${entry.broker.name}:`, e);
          }
        }
      });
    } else if (this.mqttClient && this.mqttClient.connected) {
      // Fallback single client mode
      try {
        this.mqttClient.publish(topic, payloadStr, { qos: 0 });
      } catch (e) {}
    }

    // 3. PeerJS
    Object.values(this.peerConnections).forEach(conn => {
      try {
        conn.send(message);
      } catch (e) {}
    });

    // 4. HTTPS Real-Time Relay (Firewall-Proof Port 443)
    if (this.httpRelayEnabled) {
      let shouldSendRelay = true;
      if (type === 'LOBBY_STATE') {
        const now = Date.now();
        const count = payload.count !== undefined ? payload.count : (payload.playerIds ? payload.playerIds.length : 0);
        if (count === this._lastLobbyCount && (now - this._lastLobbyBroadcastTime) < 6000) {
          shouldSendRelay = false;
        } else {
          this._lastLobbyBroadcastTime = now;
          this._lastLobbyCount = count;
        }
      }

      if (shouldSendRelay) {
        const downTopic = 'quizarena_' + this.pin + '_down';
        fetch(`https://ntfy.sh/${downTopic}`, {
          method: 'POST',
          body: payloadStr,
          headers: { 'Content-Type': 'text/plain' },
          cache: 'no-store'
        }).catch(err => {
          console.warn('[ArenaNetwork] HTTPS Relay broadcast error:', err);
        });
      }
    }
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
        console.warn('[ArenaNetwork] Uplink publish error:', e);
      }
    }

    // 3. PeerJS
    if (this.peerConnections['host']) {
      try {
        this.peerConnections['host'].send(message);
      } catch (e) {}
    }

    // 4. HTTPS Real-Time Relay (Firewall-Proof Port 443)
    if (this.httpRelayEnabled) {
      const upTopic = 'quizarena_' + this.pin + '_up';
      fetch(`https://ntfy.sh/${upTopic}`, {
        method: 'POST',
        body: JSON.stringify(message),
        headers: { 'Content-Type': 'text/plain' },
        cache: 'no-store'
      }).catch(err => {
        console.warn('[ArenaNetwork] HTTPS Relay uplink send error:', err);
      });
    }
  }

  // --- MESSAGE INGESTION & SLIDING-WINDOW DEDUPLICATION ---
  handleIncomingRawMessage(msg, transportName) {
    if (!msg || !msg.type || !msg.pin) return;
    if (String(msg.pin) !== String(this.pin)) return; // Wrong room
    if (msg.sender === this.clientId) return; // Ignore own echo

    // Discard stale messages older than 30 seconds before room initialization
    if (msg.timestamp && msg.timestamp < (this._roomStartTime - 30000)) {
      return;
    }

    // Deduplication key
    const dedupKey = `${msg.sender}_${msg.type}_${msg.msgId || msg.timestamp}`;
    if (this._seenMessageKeys.has(dedupKey)) return;
    this._seenMessageKeys.add(dedupKey);

    // Keep deduplication set bounded to 500 items to avoid memory leaks
    if (this._seenMessageKeys.size > 500) {
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
    clearTimeout(this._clientConnectTimeout);
    if (this.broadcastChannel) {
      try { this.broadcastChannel.close(); } catch(e){}
    }
    if (this.httpRelayEventSource) {
      try { this.httpRelayEventSource.close(); } catch(e){}
      this.httpRelayEventSource = null;
    }
    if (this.httpRelayPollTimer) {
      clearInterval(this.httpRelayPollTimer);
      this.httpRelayPollTimer = null;
    }
    if (this.mqttClients && this.mqttClients.length > 0) {
      this.mqttClients.forEach(entry => {
        try {
          entry.client.removeAllListeners();
          entry.client.end(true);
        } catch(e){}
      });
      this.mqttClients = [];
    }
    if (this.mqttClient) {
      try {
        this.mqttClient.removeAllListeners();
        this.mqttClient.end(true);
      } catch(e){}
      this.mqttClient = null;
    }
    if (this.peer) {
      try { this.peer.destroy(); } catch(e){}
    }
  }
}

// Global factory helper
window.ArenaNetwork = ArenaNetwork;