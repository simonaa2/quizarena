// ===================================================
// QUIZ ARENA — CONFIGURATION
// Standalone Live Classroom Quiz Arena
// ===================================================

const CONFIG = {
  // App branding
  APP_TITLE: 'Quiz Arena',
  APP_SUBTITLE: 'Live Interactive Classroom Quiz Challenge',
  ARENA_TAGLINE: 'Live Quiz Arena • Powered by Mr Anderson',

  // Google Apps Script Web App URL (Optional - paste here to auto-save results to Google Sheets)
  SCRIPT_URL: '',

  // Teacher dashboard & host master password:
  TEACHER_PASSWORD: 'teacher2026',

  // Fallback class code for student self-enrolment:
  CLASS_CODE: 'QUIZ2026',

  // Default game parameters
  DEFAULT_TIMER_SECONDS: 20, // Options: 10, 15, 20, 30, 45, 60
  MAX_POINTS_PER_QUESTION: 1000,
  STREAK_BONUS_MULTIPLIER: 100, // +100 bonus pts per consecutive correct answer (capped at +500)
  ENABLE_SOUND_BY_DEFAULT: true,

  // -----------------------------------------------
  // STUDENT ROSTER
  // Students can quickly pick their name from this list or type their own nickname.
  // Add/edit students as needed:
  // -----------------------------------------------
  STUDENTS: [
    { name: 'Simon Anderson' },
    { name: 'Austin Crump' },
    { name: 'Aidan Tresister' },
    { name: 'Adam Avdalis' },
    { name: 'Zach Hull' },
    { name: 'Lucas Helacas' },
    { name: 'Seb Sacilotto' },
    { name: 'William Rebel' },
  ],

  // Real-time communication broker endpoints
  // Triple-redundancy: HiveMQ Public TLS WSS + EMQX WSS fallback + WebRTC PeerJS + BroadcastChannel
  MQTT_BROKERS: [
    { url: 'wss://broker.hivemq.com:8884/mqtt', name: 'HiveMQ TLS' },
    { url: 'wss://broker.emqx.io:8084/mqtt', name: 'EMQX TLS' }
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
