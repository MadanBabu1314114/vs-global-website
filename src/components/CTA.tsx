import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { waLink } from '../data/site';
import { AnimatedSection } from '../hooks/useReveal';

export default function CTA({ title, text, primary = 'Start Your Application', variant = 'navy' }: { title: string; text: string; primary?: string; variant?: 'navy' | 'accent' | 'surface' }) {
  const bg = variant === 'accent'
    ? 'linear-gradient(135deg,#C8102E,#7f0a1e)'
    : variant === 'surface'
      ? undefined
      : 'linear-gradient(135deg,#0A1F44 0%,#1a3a6b 60%,#0A1F44 100%)';
  return (
    <section className="container-x section">
      <AnimatedSection>
        <div className="relative overflow-hidden rounded-3xl text-center px-6 py-12 md:py-16 border" style={variant === 'surface' ? { background: 'rgb(var(--surface))', borderColor: 'rgb(var(--line))' } : { background: bg, borderColor: 'transparent' }}>
          <div className="glow-orb w-72 h-72 -top-20 -left-20" style={{ background: 'rgb(var(--accent) / .25)' }} aria-hidden="true" />
          <div className="glow-orb w-72 h-72 -bottom-24 -right-16" style={{ background: '#3b82f6 / .2)' }} aria-hidden="true" />
          <h2 className="h2 max-w-2xl mx-auto" style={variant === 'surface' ? undefined : { color: '#fff' }}>{title}</h2>
          <p className="body-lg mt-3 max-w-2xl mx-auto" style={variant === 'surface' ? { color: 'rgb(var(--muted))' } : { color: 'rgba(255,255,255,.82)' }}>{text}</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href={waLink()} target="_blank" rel="noreferrer" className="btn-primary link-arrow">{primary} <ArrowRight size={17} /></a>
            <Link to="/contact" className={variant === 'surface' ? 'btn-ghost' : 'btn !border-white/70 !text-white hover:!bg-white hover:!text-navy border-2'}>Get Profile Assessment</Link>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
