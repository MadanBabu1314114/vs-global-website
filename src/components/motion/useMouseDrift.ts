import { useEffect, useRef } from 'react';

export function useMouseDrift<T extends HTMLElement>(max = 5) {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (matchMedia('(hover: none)').matches) return;
    let raf = 0;
    let tx = 0;
    let ty = 0;
    let x = 0;
    let y = 0;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      tx = ((e.clientX - (r.left + r.width / 2)) / r.width) * max;
      ty = ((e.clientY - (r.top + r.height / 2)) / r.height) * max;
      if (!raf) tick();
    };
    const tick = () => {
      x += (tx - x) * 0.08;
      y += (ty - y) * 0.08;
      el.style.setProperty('--mouse-x', `${x.toFixed(2)}px`);
      el.style.setProperty('--mouse-y', `${y.toFixed(2)}px`);
      if (Math.abs(tx - x) > 0.05 || Math.abs(ty - y) > 0.05) raf = requestAnimationFrame(tick);
      else raf = 0;
    };
    const section = el.closest('section');
    section?.addEventListener('mousemove', onMove, { passive: true });
    section?.addEventListener('mouseleave', () => { tx = 0; ty = 0; if (!raf) tick(); }, { passive: true });
    return () => { section?.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf); };
  }, [max]);
  return ref;
}
