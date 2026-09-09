import { AnimatedSection } from '../hooks/useReveal';
import type { Step } from '../data/process';

const ROLE_STYLE: Record<string, string> = {
  Student: 'bg-success/15 text-success',
  'VS GLOBAL': 'bg-accent/12 text-accent',
  University: 'bg-[#3b82f6]/15 text-[#3b82f6]',
  UKVI: 'bg-warning/15 text-warning',
};

function roleClass(who: string) {
  if (who.includes('UK')) return ROLE_STYLE.UKVI;
  if (who.includes('University')) return ROLE_STYLE.University;
  if (who.includes('VS GLOBAL')) return ROLE_STYLE['VS GLOBAL'];
  return ROLE_STYLE.Student;
}

export default function TimelineStep({ step }: { step: Step }) {
  return (
    <AnimatedSection>
      <li className="relative ml-8 md:ml-10 card !p-5">
        <span className="absolute -left-8 md:-left-10 top-5 w-9 h-9 rounded-full grid place-items-center text-xs font-extrabold text-white shadow-soft" style={{ background: 'linear-gradient(135deg,#0A1F44,#C8102E)' }} aria-hidden="true">
          {String(step.n).padStart(2, '0')}
        </span>
        <p className="font-heading font-bold">STEP {step.n} — {step.title}</p>
        <span className={`inline-flex mt-2 rounded-full px-2.5 py-1 caption font-bold ${roleClass(step.who)}`}>{step.who}</span>
        <p className="small mt-2" style={{ color: 'rgb(var(--muted))' }}>{step.text}</p>
      </li>
    </AnimatedSection>
  );
}
