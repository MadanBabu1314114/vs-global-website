import { useState } from 'react';

export const IMG = (id: string, w = 1200, q = 75) =>
  `https://images.unsplash.com/${id}?w=${w}&q=${q}&auto=format&fit=crop`;

type Props = {
  id: string;
  alt: string;
  ratio?: string;
  eager?: boolean;
  w?: number;
  className?: string;
};

export default function SmartImage({ id, alt, ratio = 'aspect-[4/3]', eager = false, w = 1200, className = '' }: Props) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className={`${ratio} w-full rounded-[inherit] grid place-items-center ${className}`} style={{ background: 'linear-gradient(135deg,#0A1F44,#C8102E)' }} role="img" aria-label={alt}>
        <span className="font-heading font-extrabold text-white/90 text-lg px-6 text-center">VS GLOBAL</span>
      </div>
    );
  }
  return (
    <img
      src={IMG(id, w)} alt={alt} onError={() => setFailed(true)}
      loading={eager ? 'eager' : 'lazy'} decoding="async"
      {...(eager ? ({ fetchpriority: 'high' } as Record<string, string>) : {})}
      className={`w-full object-cover ${ratio} ${className}`}
    />
  );
}
