import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import CTA from '../components/CTA';
import FAQItem from '../components/FAQItem';
import SmartImage from '../components/SmartImage';
import Parallax from '../components/motion/Parallax';
import { AnimatedSection } from '../hooks/useReveal';
import { FAQS } from '../data/content';

export default function FAQs() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <Helmet><title>FAQs | VS GLOBAL</title></Helmet>
      <section className="container-x section">
        <div className="grid gap-8 lg:grid-cols-[1fr_.85fr] items-start max-w-6xl mx-auto">
        <div className="max-w-3xl">
        <AnimatedSection>
          <p className="eyebrow">FAQs</p>
          <h1 className="display mt-4">Honest answers.</h1>
          <p className="body-lg mt-4" style={{ color: 'rgb(var(--muted))' }}>What students and parents ask us most.</p>
        </AnimatedSection>
        <div className="mt-8 grid gap-3">
          {FAQS.map((f, i) => (
            <AnimatedSection key={f.q} delay={Math.min(i, 4) * 60}>
              <FAQItem q={f.q} a={f.a} open={open === i} onToggle={() => setOpen(open === i ? null : i)} />
            </AnimatedSection>
          ))}
        </div>
        </div>
        <AnimatedSection delay={140} className="hidden lg:block">
          <div className="lg:sticky lg:top-24 grid gap-4">
            <div className="img-zoom px-scale overflow-hidden rounded-3xl border shadow-card" style={{ borderColor: 'rgb(var(--line))' }}>
              <Parallax speed="card">
              <SmartImage id="photo-1571260899304-425eee4c7efc" alt="Graduates celebrating at a UK university ceremony" ratio="aspect-[4/5]" />
              </Parallax>
            </div>
            <div className="glass rounded-3xl p-5">
              <p className="small font-semibold">No guarantees — just clarity.</p>
              <p className="caption mt-1" style={{ color: 'rgb(var(--muted))' }}>Admission, CAS and visas are decided by institutions and authorities.</p>
            </div>
          </div>
        </AnimatedSection>
        </div>
      </section>
      <CTA title="Still have questions?" text="Message us on WhatsApp — we reply with the next step for your profile." primary="Chat With VS GLOBAL" variant="surface" />
    </>
  );
}
