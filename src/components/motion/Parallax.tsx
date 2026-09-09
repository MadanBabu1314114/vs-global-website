import { useParallax } from './useParallax';
import type { SpeedName } from './speeds';

export default function Parallax({ speed = 'image', scale, className = '', children }: { speed?: SpeedName | number; scale?: number; className?: string; children: React.ReactNode }) {
  const ref = useParallax<HTMLDivElement>(speed, scale);
  return <div ref={ref} className={`will-change-transform ${className}`} style={scale ? { ['--px-scale' as string]: scale } : undefined}>{children}</div>;
}
