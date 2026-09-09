import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { CheckCircle2, ChevronDown, FileCheck } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import CTA from '../components/CTA';
import SmartImage from '../components/SmartImage';
import Parallax from '../components/motion/Parallax';
import { AnimatedSection } from '../hooks/useReveal';
import { CHECKLIST } from '../data/content';

const CORE = new Set(['Passport', 'Degree certificate', 'Academic transcripts', 'English-language evidence']);
const CONDITIONAL = new Set(['CV where required', 'Personal statement where required', 'References where required', 'Work experience documents where relevant']);
const VISA = new Set(['Financial documents where required', 'TB certificate where required', 'ATAS certificate where required']);

function Group({ title, items, open, onToggle }: { title: string; items: string[]; open: boolean; onToggle: () => void }) {
  return (
    <div className="card !p-0 overflow-hidden">
      <button type="button" onClick={onToggle} aria-expanded={open} className="w-full flex items-center justify-between gap-3 px-5 py-5 font-heading font-bold text-lg min-h-[60px]">
        <span className="inline-flex items-center gap-2"><FileCheck size={19} className="text-accent" /> {title} <span className="caption font-semibold" style={{ color: 'rgb(var(--muted))' }}>{items.length}</span></span>
        <ChevronDown size={18} className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`acc-body ${open ? 'acc-open' : ''}`}><div className="acc-inner">
        <ul className="px-5 pb-5 grid gap-2">
          {items.map((c) => (
            <li key={c} className="flex items-start gap-2.5 rounded-xl border px-3.5 py-3 small" style={{ borderColor: 'rgb(var(--line))', background: 'rgb(var(--surface))' }}>
              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-success" /> {c}
            </li>
          ))}
        </ul>
      </div></div>
    </div>
  );
}

export default function Documents() {
  const [open, setOpen] = useState<number | null>(0);
  const groups = [
    { title: 'Core academic & identity', items: CHECKLIST.filter((c) => CORE.has(c)) },
    { title: 'Course-specific (where required)', items: CHECKLIST.filter((c) => CONDITIONAL.has(c)) },
    { title: 'Visa-related (where required)', items: CHECKLIST.filter((c) => VISA.has(c)) },
  ];
  return (
    <>
      <Helmet><title>Document Checklist | VS GLOBAL UK Master's Application</title></Helmet>
      <section className="container-x section">
        <AnimatedSection>
          <p className="eyebrow">Checklist</p>
          <h1 className="display mt-4">UK Master’s application checklist.</h1>
          <p className="body-lg mt-4 max-w-3xl" style={{ color: 'rgb(var(--muted))' }}>Grouped by when you usually need them — without changing what is required.</p>
        </AnimatedSection>
        <AnimatedSection delay={120}>
          <div className="img-zoom px-scale overflow-hidden rounded-3xl mt-8 border" style={{ borderColor: 'rgb(var(--line))' }}>
            <Parallax speed="bg">
            <SmartImage id="photo-1503676260728-1c00da094a0b" alt="Study desk with documents prepared for a university application" ratio="aspect-[16/10] md:aspect-[21/9]" />
            </Parallax>
          </div>
        </AnimatedSection>
        <div className="mt-8 grid gap-4 max-w-3xl">
          {groups.map((g, i) => <Group key={g.title} title={g.title} items={g.items} open={open === i} onToggle={() => setOpen(open === i ? null : i)} />)}
        </div>
        <p className="caption mt-6 max-w-3xl" style={{ color: 'rgb(var(--muted))' }}>Document requirements vary by university, course and student circumstances. Students should always follow the latest requirements provided by their university and the UK government.</p>
        <div className="mt-6 max-w-3xl"><SectionHeading eyebrow="Tip" title="Start with passport + transcripts" text="Most delays come from transcripts and English evidence — gather those first, then course extras." align="left" /></div>
      </section>
      <CTA title="Confused about your documents?" text="Send your profile and we will explain what your shortlisted universities typically ask for." variant="surface" />
    </>
  );
}
