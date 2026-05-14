import React, { useEffect, useRef, useState } from 'react';

const HOVER_SELECTOR = 'a, button, [role="button"], input, select, textarea, [data-cursor-hover]';

export const CustomCursor = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const fine = window.matchMedia('(pointer: fine)').matches;
    setEnabled(fine);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const root = document.documentElement;
    root.classList.add('cursor-none');
    return () => {
      root.classList.remove('cursor-none');
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const handleMove = (e: MouseEvent) => {
      // Tip of the arrow is at SVG coords (5, 3). Offset so the tip lands exactly at the mouse pointer.
      wrapper.style.transform = `translate3d(${e.clientX - 5}px, ${e.clientY - 3}px, 0)`;
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest(HOVER_SELECTOR)) setHovering(true);
    };

    const handleOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest(HOVER_SELECTOR)) setHovering(false);
    };

    window.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseover', handleOver);
    document.addEventListener('mouseout', handleOut);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseout', handleOut);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={wrapperRef}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[100]"
      style={{ willChange: 'transform' }}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        style={{
          transformOrigin: '5px 3px',
          transform: hovering ? 'scale(1.3)' : 'scale(1)',
          filter: hovering
            ? 'drop-shadow(0 0 10px hsl(var(--primary))) drop-shadow(0 0 18px hsl(var(--primary) / 0.5))'
            : 'drop-shadow(0 0 5px hsl(var(--primary) / 0.55))',
          transition: 'transform 150ms cubic-bezier(0.16, 1, 0.3, 1), filter 200ms ease-out',
        }}
      >
        {/* Outer brand-gradient body */}
        <defs>
          <linearGradient id="cursor-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" />
          </linearGradient>
        </defs>
        <path
          d="M5 3 L5 24 L10.5 19.5 L14 28 L17.5 27 L13.5 18.5 L21 18.5 Z"
          fill="url(#cursor-gradient)"
          stroke="hsl(var(--background))"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        {/* Inner highlight line — gives the techy/AI feel */}
        <path
          d="M6.5 5.5 L6.5 14"
          stroke="hsl(var(--primary-foreground))"
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity="0.85"
        />
        {/* Tip accent dot — subtle AI/processor vibe */}
        <circle
          cx="5"
          cy="3"
          r="0.9"
          fill="hsl(var(--primary-foreground))"
          opacity="0.9"
        />
      </svg>
    </div>
  );
};

export default CustomCursor;
