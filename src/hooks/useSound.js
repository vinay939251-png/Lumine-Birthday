import { useState, useRef, useCallback, useEffect } from 'react';

/**
 * Self-contained gentle music-box synthesizer using Web Audio API.
 * 100% royalty-free, original, never autoplays, respects user toggle.
 */
export function useSound() {
  // Enabled by default on open
  const [soundEnabled, setSoundEnabled] = useState(true);
  const audioCtxRef = useRef(null);

  const getAudioContext = useCallback(() => {
    if (typeof window === 'undefined') return null;
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  }, []);

  // Unlock AudioContext on first user interaction in case browser pauses it initially
  useEffect(() => {
    const unlockAudio = () => {
      getAudioContext();
      window.removeEventListener('click', unlockAudio);
      window.removeEventListener('touchstart', unlockAudio);
      window.removeEventListener('keydown', unlockAudio);
    };

    window.addEventListener('click', unlockAudio, { once: true });
    window.addEventListener('touchstart', unlockAudio, { once: true });
    window.addEventListener('keydown', unlockAudio, { once: true });

    return () => {
      window.removeEventListener('click', unlockAudio);
      window.removeEventListener('touchstart', unlockAudio);
      window.removeEventListener('keydown', unlockAudio);
    };
  }, [getAudioContext]);

  const toggleSound = useCallback(() => {
    setSoundEnabled(prev => {
      const next = !prev;
      if (next) {
        getAudioContext();
      }
      return next;
    });
  }, [getAudioContext]);

  // Plays a single gentle music-box bell tone
  const playTone = useCallback((freq, duration = 1.2, delay = 0, volume = 0.15) => {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const startTime = ctx.currentTime + delay;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Sine wave with soft harmonic
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, startTime);

      // Envelope: instant soft attack, gentle exponential decay
      gain.gain.setValueAtTime(0.0001, startTime);
      gain.gain.exponentialRampToValueAtTime(volume, startTime + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + duration);
    } catch {
      // Graceful fallback if audio is not supported
    }
  }, [soundEnabled, getAudioContext]);

  // Gentle pentatonic music-box celebration chime when wish is made
  const playWishChime = useCallback(() => {
    if (!soundEnabled) return;
    // C5, E5, G5, A5, C6 arpeggio with warm delay
    const notes = [523.25, 659.25, 783.99, 880.00, 1046.50, 1318.51];
    notes.forEach((freq, idx) => {
      playTone(freq, 1.8, idx * 0.12, 0.18);
    });
  }, [soundEnabled, playTone]);

  // Soft extinguish chime (subtle descending tone)
  const playExtinguish = useCallback(() => {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const t = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(580, t);
      osc.frequency.exponentialRampToValueAtTime(320, t + 0.25);

      gain.gain.setValueAtTime(0.08, t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.3);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(t);
      osc.stop(t + 0.3);
    } catch {
      // Fallback
    }
  }, [soundEnabled, getAudioContext]);

  // Gentle paper fold / card click tone
  const playPaperClick = useCallback(() => {
    if (!soundEnabled) return;
    playTone(440, 0.2, 0, 0.05);
  }, [soundEnabled, playTone]);

  return {
    soundEnabled,
    toggleSound,
    playWishChime,
    playExtinguish,
    playPaperClick
  };
}
