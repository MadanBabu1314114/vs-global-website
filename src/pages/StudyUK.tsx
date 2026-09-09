import { Helmet } from 'react-helmet-async';
import CTA from '../components/CTA';
import SectionHeading from '../components/SectionHeading';
import SmartImage from '../components/SmartImage';
import Parallax from '../components/motion/Parallax';
import { MotionBackground } from '../components/motion/Ambient';
import { AnimatedSection } from '../hooks/useReveal';

const ITEMS = [
  { t: 'World-class universities', d: 'Globally recognised institutions with rigorous Master’s teaching.' },
  { t: 'Wide range of Master’s programmes', d: 'Specialist and conversion-friendly postgraduate options.' },
  { t: 'International student environment', d: 'Diverse cohorts and dedicated international support.' },
  { t: 'Career-focused education', d: 'Practical learning shaped around employability skills.' },
  { t: 'Diverse cities and communities', d: 'From London to regional hubs — find your fit and budget.' },
  { t: 'UK culture and experience', d: 'History, arts, sport and student life across the country.' },
];

export default function StudyUK() {
  return (
    <>
      <Helmet><title>Study in UK | VS GLOBAL – UK Master's for Indian Students</title></Helmet>
      <section className="relative overflow-hidden">
        <MotionBackground />
        <div className="container-x section relative">
          <AnimatedSection>
            <p className="eyebrow">Study in the UK</p>
            <h1 className="display mt-4 max-w-3xl">Why students choose the UK.</h1>
          </AnimatedSection>
          <AnimatedSection delay={120}>
            <div className="img-zoom px-scale overflow-hidden rounded-3xl mt-8 border shadow-card" style={{ borderColor: 'rgb(var(--line))' }}>
              <Parallax speed="image">
              <SmartImage id="photo-1541339907198-e08756dedf3f" alt="Historic UK university building with green lawn" ratio="aspect-[16/10] md:aspect-[21/9]" eager w={1400} />
              </Parallax>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <section className="container-x section pt-0">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <AnimatedSection>
            <div className="img-zoom px-scale overflow-hidden rounded-3xl border shadow-card" style={{ borderColor: 'rgb(var(--line))' }}>
              <Parallax speed="image">
              <SmartImage id="photo-1577896851231-70ef18881754" alt="Students walking across a UK university campus" ratio="aspect-[4/3]" />
              </Parallax>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <div className="img-zoom px-scale overflow-hidden rounded-3xl border" style={{ borderColor: 'rgb(var(--line))' }}>
              <Parallax speed="orb">
              <SmartImage id="photo-1607237138185-eedd9c632b0b" alt="Tower Bridge in London at dusk" ratio="aspect-[4/3]" />
              </Parallax>
            </div>
          </AnimatedSection>
        </div>
        <div className="mt-12">
        <SectionHeading eyebrow="The UK advantage" title="An environment built for postgraduate study" align="left" />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {ITEMS.map((c, i) => (
            <AnimatedSection key={c.t} delay={(i % 2) * 90}>
              <article className="card h-full">
                <p className="caption text-accent font-bold">0{i + 1}</p>
                <h3 className="font-heading font-bold text-lg mt-1">{c.t}</h3>
                <p className="small mt-2" style={{ color: 'rgb(var(--muted))' }}>{c.d}</p>
              </article>
            </AnimatedSection>
          ))}
        </div>
        </div>
      </section>
      <CTA title="Ready to start your UK journey?" text="Tell us about your academic profile and let VS GLOBAL guide you through the next steps." />
    </>
  );
}
