// ===================================================
// QUIZ ARENA — CONFIGURATION
// Standalone Live Classroom Quiz Arena
// ===================================================

const CONFIG = {
  // App branding
  APP_TITLE: 'Quiz Arena',
  APP_SUBTITLE: 'Live Interactive Classroom Challenge',
  ARENA_TAGLINE: 'Live Quiz Arena • Powered by Mr Anderson',

  // Google Apps Script Web App URL (Optional - paste here to auto-save results to Google Sheets)
  SCRIPT_URL: '',

  // Teacher dashboard & host master password:
  TEACHER_PASSWORD: 'teacher2026',

  // Fallback class code:
  CLASS_CODE: 'QUIZ2026',

  // Default game parameters
  DEFAULT_TIMER_SECONDS: 20, // Options: 10, 15, 20, 30, 45, 60
  MAX_POINTS_PER_QUESTION: 1000,
  STREAK_BONUS_MULTIPLIER: 100, // +100 bonus pts per consecutive correct answer (capped at +500)
  ENABLE_SOUND_BY_DEFAULT: true,

  // Student roster left empty: students enter their own name or nickname on the join screen
  STUDENTS: [],

  // Real-time communication broker endpoints
  // Triple-redundancy: EMQX WSS + Mosquitto TLS + HiveMQ Public TLS + WebRTC PeerJS + BroadcastChannel
  MQTT_BROKERS: [
    { url: 'wss://broker.emqx.io:8084/mqtt', name: 'EMQX Public TLS' },
    { url: 'wss://test.mosquitto.org:8081/mqtt', name: 'Mosquitto TLS' },
    { url: 'wss://broker.hivemq.com:8884/mqtt', name: 'HiveMQ TLS' }
  ],
  MQTT_TOPIC_PREFIX: 'quizarena/arena/'
};

// Expose globally for browser usage
if (typeof window !== 'undefined') {
  window.CONFIG = CONFIG;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
