import React, { useState, useRef, useEffect, useCallback } from 'react';

/**
 * A wrapper for decorative images that adds an elegant line underneath
 * and a soft central glow effect on hover/click, without the glow revealing
 * the rectangular bounds of the image.
 */
export default function DecoratedImage({
  children,
  className = '',
  ariaLabel = 'Imagen decorativa interactiva',
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [burst, setBurst] = useState(false);
  const timerRef = useRef(null);

  const startBurst = useCallback(() => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    setBurst(true);
    timerRef.current = window.setTimeout(() => {
      setBurst(false);
      timerRef.current = null;
    }, 2200);
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);

  const isActive = isHovered || burst;

  return (
    <div
      className={`relative inline-flex flex-col items-center justify-center cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={startBurst}
      role="button"
      tabIndex={0}
      aria-label={ariaLabel}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          startBurst();
        }
      }}
      style={{ outline: 'none' }}
    >
      {/* Central Glow Effect */}
      <div
        className="absolute z-0 pointer-events-none rounded-full transition-all duration-700 ease-in-out"
        style={{
          width: '140%',
          height: '140%',
          top: '50%',
          left: '50%',
          transform: `translate(-50%, -50%) scale(${isActive ? 1.2 : 0.8})`,
          opacity: isActive ? 1 : 0,
          background: 'radial-gradient(circle, rgba(226, 199, 129, 0.45) 0%, rgba(184, 147, 77, 0.15) 40%, transparent 70%)',
          filter: 'blur(8px)',
        }}
      />
      
      {/* Image */}
      <div className="relative z-10 transition-transform duration-500 ease-in-out" style={{ transform: isActive ? 'scale(1.05)' : 'scale(1)' }}>
        {children}
      </div>

      {/* Decorative Line Underneath */}
      <div
        className="mt-4 transition-all duration-700 ease-in-out"
        style={{
          height: '2px',
          width: isActive ? '6.5rem' : '4rem',
          background: 'linear-gradient(to right, transparent, #e2c781, transparent)',
          opacity: isActive ? 1 : 0.5,
          boxShadow: isActive
            ? '0 0 16px 4px rgba(226, 199, 129, 0.7)'
            : '0 0 8px 1px rgba(214, 190, 130, 0.3)',
        }}
      />
    </div>
  );
}
