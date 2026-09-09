import { AnimatedSection } from '../hooks/useReveal';

export default function SectionHeading({ eyebrow, title, text, align = 'center' }: { eyebrow: string; title: string; text?: string; align?: 'center' | 'left' }) {
  const a = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <AnimatedSection className={`max-w-3xl ${a}`}>
      <p className="eyebrow"><span className="w-6 h-px bg-accent inline-block" />{eyebrow}</p>
      <h2 className="h2 mt-3">{title}</h2>
      {text && <p className="body-lg mt-3" style={{ color: 'rgb(var(--muted))' }}>{text}</p>}
    </AnimatedSection>
  );
}
