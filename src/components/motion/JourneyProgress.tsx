import { useEffect, useRef } from 'react';

export default function JourneyProgress() {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ol = ref.current?.parentElement;
    if (!ol) return;
    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = ol.getBoundingClientRect();
        const vh = window.innerHeight;
        const total = r.height;
        const seen = Math.min(Math.max(vh * 0.6 - r.top, 0), total);
        if (ref.current) ref.current.style.transform = `scaleY(${total ? seen / total : 0})`;
      });
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => { window.removeEventListener('scroll', update); cancelAnimationFrame(raf); };
  }, []);
  return <span className="step-rail" aria-hidden="true"><span ref={ref} /></span>;
}
