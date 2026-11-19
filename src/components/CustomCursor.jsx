import React, { useEffect, useState, useRef } from 'react';

const SPARKLE_CHARS = ['✨', '♡', '✦', '🌸', '⭐', '🪄'];

export function CustomCursor({ isCreepy }) {
  const [particles, setParticles] = useState([]);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);
  const lastSpawnTime = useRef(0);

  useEffect(() => {
    // Only enable on desktop / fine pointer devices
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsFinePointer(mediaQuery.matches);

    const handleMediaChange = (e) => setIsFinePointer(e.matches);
    mediaQuery.addEventListener('change', handleMediaChange);

    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  useEffect(() => {
    if (!isFinePointer) return;

    let animId;

    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      setPos({ x, y });

      // Check if hovering clickable
      const target = e.target;
      const clickable = target.closest('button, a, input, [role="button"], label, canvas');
      setIsHoveringClickable(!!clickable);

      // Don't spawn sparkle trails over the drawing canvas to keep art clean
      if (target.closest('canvas')) return;

      const now = performance.now();
      // Throttle sparkle creation to ~45ms for smooth aesthetic trail
      if (now - lastSpawnTime.current > 45) {
        lastSpawnTime.current = now;
        const char = SPARKLE_CHARS[Math.floor(Math.random() * SPARKLE_CHARS.length)];
        const newParticle = {
          id: Math.random(),
          x: x + (Math.random() * 12 - 6),
          y: y + (Math.random() * 12 - 6),
          char,
          size: Math.random() * 6 + 10, // 10px to 16px
          rotation: Math.random() * 360,
          color: isCreepy ? '#C6B2C5' : '#D99EAF',
          createdAt: now,
        };

        setParticles((prev) => [...prev.slice(-14), newParticle]);
      }
    };

    const handleClick = (e) => {
      // Little burst of 3 sparkles on click
      const { clientX: x, clientY: y } = e;
      const burst = [0, 1, 2].map((i) => ({
        id: Math.random(),
        x: x + (Math.random() * 30 - 15),
        y: y + (Math.random() * 30 - 15),
        char: isCreepy ? '👀' : '💖',
        size: 16,
        rotation: (i * 45) - 30,
        color: isCreepy ? '#9E4E67' : '#D99EAF',
        createdAt: performance.now(),
      }));
      setParticles((prev) => [...prev.slice(-12), ...burst]);
    };

    // Clean up expired particles continuously
    const updateLoop = () => {
      const now = performance.now();
      setParticles((prev) => prev.filter((p) => now - p.createdAt < 650));
      animId = requestAnimationFrame(updateLoop);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('click', handleClick, { passive: true });
    animId = requestAnimationFrame(updateLoop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animId);
    };
  }, [isFinePointer, isCreepy]);

  if (!isFinePointer) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden select-none">
      {/* Trailing Sparkle Particles */}
      {particles.map((p) => {
        const age = (performance.now() - p.createdAt) / 650; // 0 to 1
        const opacity = Math.max(0, 1 - age);
        const translateY = -age * 28; // gentle float upward
        const scale = 1 - age * 0.4;

        return (
          <span
            key={p.id}
            className="absolute font-sans leading-none transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
            style={{
              left: `${p.x}px`,
              top: `${p.y + translateY}px`,
              opacity,
              fontSize: `${p.size}px`,
              transform: `rotate(${p.rotation}deg) scale(${scale})`,
              color: p.color,
              textShadow: isCreepy 
                ? '0 0 4px rgba(198, 178, 197, 0.4)' 
                : '0 0 4px rgba(217, 158, 175, 0.5)',
            }}
          >
            {p.char}
          </span>
        );
      })}

      {/* Main Cursor Wand / Heart Charm following the mouse */}
      <div
        className="fixed top-0 left-0 transition-transform duration-75 ease-out pointer-events-none"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        }}
      >
        <div
          className={`relative -top-2 -left-2 transition-transform duration-200 ${
            isHoveringClickable ? 'scale-125 rotate-12' : 'scale-100'
          }`}
        >
          {/* Subtle cursor aura */}
          <div
            className={`w-5 h-5 rounded-full blur-xs transition-opacity duration-300 ${
              isCreepy ? 'bg-creepy-rose/30' : 'bg-rose/30'
            }`}
          />
        </div>
      </div>
    </div>
  );
}
