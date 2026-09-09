import { Helmet } from 'react-helmet-async';
import CTA from '../components/CTA';
import TimelineStep from '../components/TimelineStep';
import SmartImage from '../components/SmartImage';
import Parallax from '../components/motion/Parallax';
import JourneyProgress from '../components/motion/JourneyProgress';
import { AnimatedSection } from '../hooks/useReveal';
import { STEPS } from '../data/process';

export default function Process() {
  return (
    <>
      <Helmet><title>Application Process (22 Steps) | VS GLOBAL</title></Helmet>
      <section className="container-x section">
        <AnimatedSection>
          <p className="eyebrow">The journey</p>
          <h1 className="display mt-4">22 steps, one clear path.</h1>
          <p className="body-lg mt-4 max-w-3xl" style={{ color: 'rgb(var(--muted))' }}>
            Each stage shows who acts — student, VS GLOBAL, university or UK immigration authorities.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {['Student', 'VS GLOBAL', 'University', 'UKVI'].map((r) => <span key={r} className="chip">{r}</span>)}
          </div>
          <AnimatedSection delay={120}>
            <div className="img-zoom px-scale overflow-hidden rounded-3xl mt-8 border shadow-card" style={{ borderColor: 'rgb(var(--line))' }}>
              <Parallax speed="image">
              <SmartImage id="photo-1498243691581-b145c3f54a5a" alt="UK university quadrangle representing the application journey" ratio="aspect-[16/10] md:aspect-[21/9]" eager w={1400} />
              </Parallax>
            </div>
          </AnimatedSection>
        </AnimatedSection>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_.8fr] items-start">
        <ol className="relative border-l-2 ml-4 md:ml-5 space-y-4" style={{ borderColor: 'rgb(var(--line))' }}>
          <JourneyProgress />
          {STEPS.map((s) => <TimelineStep key={s.n} step={s} />)}
        </ol>
        <div className="lg:sticky lg:top-24 grid gap-4">
          <AnimatedSection>
            <div className="img-zoom px-scale overflow-hidden rounded-3xl border shadow-card" style={{ borderColor: 'rgb(var(--line))' }}>
              <Parallax speed="card">
              <SmartImage id="photo-1522202176988-66273c2fd55f" alt="Students preparing documents together for university applications" ratio="aspect-[4/3]" />
              </Parallax>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <div className="glass rounded-3xl p-6">
              <p className="font-heading font-extrabold">Where are you right now?</p>
              <p className="small mt-1" style={{ color: 'rgb(var(--muted))' }}>Steps 1–9: university side. Steps 10–11: CAS. Steps 12–20: visa. Tell us your step — we map the next one.</p>
            </div>
          </AnimatedSection>
        </div>
        </div>
      </section>
      <CTA title="Not sure where you are in the journey?" text="Get a profile assessment and we will map your next steps." primary="Get Profile Assessment" variant="surface" />
    </>
  );
}
