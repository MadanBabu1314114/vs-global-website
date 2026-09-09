import { useEffect, useRef } from 'react';
import { speedValue, type SpeedName } from './speeds';

const registry = new Set<{ el: HTMLElement; speed: number }>();
let raf = 0;
let ticking = false;

function motionOK() {
  return (
    typeof window !== 'undefined' &&
    !matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

function loop() {
  ticking = false;
  const vh = window.innerHeight;
  registry.forEach(({ el, speed }) => {
    const r = el.getBoundingClientRect();
    if (r.bottom < -200 || r.top > vh + 200) return;
    const y = (r.top + r.height / 2 - vh / 2) * -speed;
    el.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0)`;
  });
  if (registry.size > 0) schedule();
}

function schedule() {
  if (!ticking) { ticking = true; raf = requestAnimationFrame(loop); }
}

if (typeof window !== 'undefined') {
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule, { passive: true });
}

export function useParallax<T extends HTMLElement>(speed: SpeedName | number, scale?: number) {
  const ref = useRef<T | null>(null);
  const speedRef = useRef(speed);
  const scaleRef = useRef(scale);
  // Mount-once by design: refs are stable; speed/scale fixed per usage.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const el = ref.current;
    if (!el || !motionOK()) return;
    const isMobile = matchMedia('(max-width: 768px)').matches;
    const entry = { el, speed: speedValue(speedRef.current) * (isMobile ? 0.5 : 1) };
    if (scaleRef.current) el.style.setProperty('--px-scale', String(scaleRef.current));
    registry.add(entry);
    schedule();
    return () => { registry.delete(entry); if (registry.size === 0) cancelAnimationFrame(raf); };
  }, []);
  return ref as React.RefObject<T | null>;
}
