import { ArrowUpRight, ClipboardCheck, FileText, GraduationCap, Luggage, MailCheck, Plane, Stamp, type LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../hooks/useReveal';

const ICONS: Record<string, LucideIcon> = { GraduationCap, ClipboardCheck, FileText, MailCheck, Stamp, Plane, Luggage };

export default function ServiceCard({ icon, index, title, text, note }: { icon: string; index: number; title: string; text: string; note?: string }) {
  const Icon = ICONS[icon] ?? GraduationCap;
  return (
    <AnimatedSection delay={(index % 3) * 90}>
      <Link to="/contact" className="card group grid gap-3 h-full hover:-translate-y-1 relative overflow-hidden" aria-label={`${title} — enquire`}>
        <span className="absolute top-0 left-0 h-1 w-10 bg-accent rounded-full transition-all duration-300 group-hover:w-full" aria-hidden="true" />
        <div className="flex items-start justify-between">
          <span className="w-12 h-12 rounded-2xl grid place-items-center text-white transition-transform duration-300 group-hover:scale-105" style={{ background: 'linear-gradient(135deg,#0A1F44,#C8102E)' }}>
            <Icon size={20} />
          </span>
          <span className="font-heading font-extrabold text-2xl opacity-15">0{index + 1}</span>
        </div>
        <p className="font-heading font-bold text-lg leading-snug">{title}</p>
        <p className="small" style={{ color: 'rgb(var(--muted))' }}>{text}</p>
        {note && <p className="caption font-semibold text-accent">{note}</p>}
        <span className="link-arrow small font-semibold inline-flex items-center gap-1 text-accent mt-auto pt-1">Enquire <ArrowUpRight size={15} /></span>
      </Link>
    </AnimatedSection>
  );
}
