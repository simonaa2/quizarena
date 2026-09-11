// ===================================================
// HSC SANDO 1603 QUIZ ARENA — PROCEDURAL SOUND ENGINE
// Web Audio API Synthesizer (Zero external audio files, Zero latency)
// ===================================================

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.volume = 0.4;
    
    // Check local storage for user mute preference
    const saved = localStorage.getItem('hscsando_sound_enabled');
    if (saved !== null) {
      this.enabled = saved === 'true';
    } else if (typeof CONFIG !== 'undefined' && CONFIG.ENABLE_SOUND_BY_DEFAULT !== undefined) {
      this.enabled = CONFIG.ENABLE_SOUND_BY_DEFAULT;
    }
  }

  init() {
    if (!this.ctx && (typeof window !== 'undefined')) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleSound() {
    this.enabled = !this.enabled;
    localStorage.setItem('hscsando_sound_enabled', this.enabled ? 'true' : 'false');
    if (this.enabled) {
      this.init();
      this.lockIn();
    }
    return this.enabled;
  }

  // --- SOUND EFFECTS ---

  // 1. Tick for countdown timer
  tick(isUrgent = false) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;

      osc.type = isUrgent ? 'sawtooth' : 'sine';
      osc.frequency.setValueAtTime(isUrgent ? 880 : 440, now); // Higher pitch for urgency

      gain.gain.setValueAtTime(this.volume * (isUrgent ? 0.35 : 0.2), now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.08);
    } catch (e) {}
  }

  // 2. Student answer lock-in chime / pop
  lockIn() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(640, now + 0.12);

      gain.gain.setValueAtTime(this.volume * 0.4, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.14);
    } catch (e) {}
  }

  // 3. Question Start Chime
  roundStart() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const now = this.ctx.currentTime + idx * 0.08;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(this.volume * 0.3, now + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.25);
      });
    } catch (e) {}
  }

  // 4. Correct Answer Jingle
  correct() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const notes = [587.33, 739.99, 880.00, 1174.66]; // D5, F#5, A5, D6
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const now = this.ctx.currentTime + idx * 0.09;

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(this.volume * 0.45, now + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.35);
      });
    } catch (e) {}
  }

  // 5. Wrong Answer Thud
  wrong() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(110, now + 0.25);

      gain.gain.setValueAtTime(this.volume * 0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.25);
    } catch (e) {}
  }

  // 6. Streak Powerup Fanfare
  streak() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const notes = [440, 554.37, 659.25, 880, 1108.73];
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const now = this.ctx.currentTime + idx * 0.06;

        osc.type = 'square';
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(this.volume * 0.25, now + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.2);
      });
    } catch (e) {}
  }

  // 7. Grand Finale & Podium Fanfare
  podiumFanfare() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      // Victory triumphant chord sequence
      const chords = [
        { time: 0.0, notes: [523.25, 659.25, 783.99], dur: 0.25 }, // C
        { time: 0.28, notes: [523.25, 659.25, 783.99], dur: 0.25 }, // C
        { time: 0.56, notes: [523.25, 659.25, 783.99], dur: 0.25 }, // C
        { time: 0.84, notes: [587.33, 698.46, 880.00], dur: 0.35 }, // Dm
        { time: 1.25, notes: [523.25, 659.25, 783.99, 1046.50], dur: 0.8 } // C high
      ];

      chords.forEach(c => {
        c.notes.forEach(f => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          const t = this.ctx.currentTime + c.time;

          osc.type = 'triangle';
          osc.frequency.setValueAtTime(f, t);

          gain.gain.setValueAtTime(0, t);
          gain.gain.linearRampToValueAtTime(this.volume * 0.35, t + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.001, t + c.dur);

          osc.connect(gain);
          gain.connect(this.ctx.destination);

          osc.start(t);
          osc.stop(t + c.dur);
        });
      });
    } catch (e) {}
  }
}

// Global instance
const Sound = new SoundEngine();
if (typeof window !== 'undefined') {
  window.Sound = Sound;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Sound;
}
