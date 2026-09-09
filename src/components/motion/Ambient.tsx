import { useEffect, useMemo, useRef } from 'react';

export function FloatingOrb({ className = '', style }: { className?: string; style?: React.CSSProperties }) {
  return <div className={`glow-orb orb-drift ${className}`} style={{ pointerEvents: 'none', ...style }} aria-hidden="true" />;
}

export function AnimatedGrid() {
  return <div className="hero-grid-bg grid-pan absolute inset-0" aria-hidden="true" />;
}

export function ParticleField({ count = 22 }: { count?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const dots = useMemo(() => {
    const mobile = typeof window !== 'undefined' && matchMedia('(max-width: 768px)').matches;
    const n = mobile ? Math.min(count, 10) : count;
    return Array.from({ length: n }, (_, i) => ({
      left: `${(i * 37.7 + 11) % 100}%`,
      top: `${(i * 53.3 + 7) % 100}%`,
      size: 2 + ((i * 7) % 4),
      delay: (i % 9) * 0.9,
      dur: 9 + ((i * 13) % 8),
    }));
  }, [count]);
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches && ref.current) ref.current.style.display = 'none';
  }, []);
  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden" style={{ pointerEvents: 'none' }} aria-hidden="true">
      {dots.map((d, i) => (
        <span key={i} className="particle" style={{ left: d.left, top: d.top, width: d.size, height: d.size, animationDelay: `${d.delay}s`, animationDuration: `${d.dur}s` }} />
      ))}
    </div>
  );
}

export function MotionBackground() {
  return (
    <>
      <AnimatedGrid />
      <FloatingOrb className="w-[420px] h-[420px] -top-32 -right-24" style={{ background: 'rgb(var(--accent) / .14)' }} />
      <FloatingOrb className="w-[380px] h-[380px] top-40 -left-32" style={{ background: 'rgb(59 130 246 / .13)' }} />
      <ParticleField count={22} />
    </>
  );
}
