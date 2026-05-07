import React, { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Wraps an image/icon with an interactive LED glow effect on click/hover.
 * Uses CSS classes defined in index.css (.invite-img-led-trigger).
 */
export default function LedImageWrap({
  children,
  className = '',
  ariaLabel = 'Imagen con brillo al interactuar',
}) {
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

  const cls = [
    'invite-img-led-trigger',
    burst ? 'invite-img-led-burst' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span
      role="button"
      tabIndex={0}
      aria-label={ariaLabel}
      onClick={startBurst}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          startBurst();
        }
      }}
      className={cls}
    >
      {children}
    </span>
  );
}
