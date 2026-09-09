import { useEffect, useRef, type ReactNode } from 'react';

export function useCountUp(target: number, run: boolean, dur = 1200) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!run || !ref.current) return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { ref.current.textContent = String(target); return; }
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      if (ref.current) ref.current.textContent = String(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, target, dur]);
  return ref;
}

export function RevealText({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--reveal-delay', `${delay}ms`);
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { el.classList.add('is-visible'); return; }
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.disconnect(); } }), { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}
