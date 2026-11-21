
import React, { useEffect, useRef } from 'react';
import './CursorEffects.css';

const particles = [
  { x: 8, y: 15 }, { x: 18, y: 75 },
  { x: 29, y: 35 }, { x: 39, y: 88 },
  { x: 48, y: 18 }, { x: 57, y: 65 },
  { x: 68, y: 30 }, { x: 78, y: 82 },
  { x: 88, y: 20 }, { x: 95, y: 55 },
  { x: 13, y: 48 }, { x: 35, y: 10 },
  { x: 53, y: 92 }, { x: 72, y: 55 },
  { x: 83, y: 40 }, { x: 24, y: 92 },
];

const CursorEffects: React.FC = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return;

      const glow = glowRef.current;

      if (glow) {
        glow.style.left = `${event.clientX}px`;
        glow.style.top = `${event.clientY}px`;
      }
    };

    window.addEventListener('pointermove', handleMouseMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener('pointermove', handleMouseMove);
    };
  }, []);

  return (
    <div className="cursor-effects" aria-hidden="true">

      {/* Mouse-following glow */}
      <div ref={glowRef} className="cursor-glow" />

      {/* Background floating particles */}
      <div className="particles-container">
        {particles.map((particle, index) => (
          <span
            key={index}
            className="floating-particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${(index % 6) * -0.8}s`,
            }}
          />
        ))}
      </div>

    </div>
  );
};

export default CursorEffects;
