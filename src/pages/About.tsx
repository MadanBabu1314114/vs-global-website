import { Helmet } from 'react-helmet-async';
import CTA from '../components/CTA';
import SectionHeading from '../components/SectionHeading';
import SmartImage from '../components/SmartImage';
import Parallax from '../components/motion/Parallax';
import { AnimatedSection } from '../hooks/useReveal';

const POINTS = ['Student-focused counselling', 'Course and university guidance', 'Application assistance', 'Offer-condition support', 'CAS guidance', 'Student visa-process guidance', 'Pre-departure support'];

export default function About() {
  return (
    <>
      <Helmet><title>About Us | VS GLOBAL UK Education Consultancy</title></Helmet>
      <section className="container-x section">
        <AnimatedSection>
          <p className="eyebrow">About VS GLOBAL</p>
          <h1 className="display mt-4 max-w-3xl">Your trusted partner for your UK education journey.</h1>
          <p className="body-lg mt-5 max-w-3xl" style={{ color: 'rgb(var(--muted))' }}>
            VS GLOBAL supports students through every stage of the UK study application process — from first enquiry to pre-departure — with clear, honest guidance. We do not guarantee admission, CAS or visas.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={120}>
          <div className="mt-8 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
            <Parallax speed="image">
            <div className="img-zoom px-scale overflow-hidden rounded-3xl border shadow-card" style={{ borderColor: 'rgb(var(--line))' }}>
              <SmartImage id="photo-1524178232363-1fb2b075b655" alt="University lecture hall during a counselling guidance session" ratio="aspect-[16/10] lg:aspect-auto lg:h-full" />
            </div>
            </Parallax>
            <div className="grid gap-4">
              <Parallax speed="decor">
              <div className="img-zoom px-scale overflow-hidden rounded-3xl border" style={{ borderColor: 'rgb(var(--line))' }}>
                <SmartImage id="photo-1517486808906-6ca8b3f04846" alt="Advisor guiding students in a classroom discussion" ratio="aspect-[16/10]" />
              </div>
              </Parallax>
              <Parallax speed="card">
              <div className="glass rounded-3xl p-6 float-soft">
                <p className="font-heading font-extrabold text-lg">Counselling-first, always.</p>
                <p className="small mt-1" style={{ color: 'rgb(var(--muted))' }}>Clear roles: we guide — universities and authorities decide.</p>
              </div>
              </Parallax>
            </div>
          </div>
        </AnimatedSection>
        <div className="mt-10">
          <SectionHeading eyebrow="What we do" title="Support at every stage" align="left" />
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {POINTS.map((p, i) => (
              <AnimatedSection key={p} delay={(i % 3) * 80}>
                <div className="card !p-5 h-full"><p className="caption text-accent font-bold">0{i + 1}</p><p className="font-semibold mt-1">{p}</p></div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <CTA title="Not sure which university is right for you?" text="Get a profile assessment from VS GLOBAL." primary="Get Profile Assessment" variant="surface" />
    </>
  );
}
