import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import CTA from '../components/CTA';
import ServiceCard from '../components/ServiceCard';
import SmartImage from '../components/SmartImage';
import Parallax from '../components/motion/Parallax';
import { AnimatedSection } from '../hooks/useReveal';
import { SERVICES } from '../data/content';

export default function Services() {
  return (
    <>
      <Helmet><title>Services | VS GLOBAL UK University Application Support</title></Helmet>
      <section className="container-x section">
        <AnimatedSection>
          <p className="eyebrow">Services</p>
          <h1 className="display mt-4">Guidance, not guesswork.</h1>
          <p className="body-lg mt-4 max-w-3xl" style={{ color: 'rgb(var(--muted))' }}>Guidance and support throughout your UK education journey.</p>
        </AnimatedSection>
        <AnimatedSection>
          <div className="mt-10 relative overflow-hidden rounded-3xl border img-zoom px-scale" style={{ borderColor: 'rgb(var(--line))' }}>
            <Parallax speed="image">
            <SmartImage id="photo-1562774053-701939374585" alt="Historic UK university campus building" ratio="aspect-[16/10] md:aspect-[21/9]" eager w={1400} />
            </Parallax>
            <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgb(6 18 48 / .8) 0%, rgb(6 18 48 / .3) 55%, transparent 100%)' }} aria-hidden="true" />
            <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-center max-w-xl">
              <p className="caption font-bold text-white/80">Featured · University & Course Selection</p>
              <p className="font-heading font-extrabold text-white text-2xl md:text-4xl mt-2">Find courses that fit your background, budget and goals.</p>
              <Link to="/contact" className="btn-primary w-fit mt-5 link-arrow">Get assessed <ArrowRight size={16} /></Link>
            </div>
          </div>
        </AnimatedSection>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <div key={s.title} className={i === 0 ? 'md:col-span-2' : ''}>
              <ServiceCard index={i} icon={s.icon} title={s.title} text={s.text} note={s.note} />
            </div>
          ))}
        </div>
      </section>
      <CTA title="Ready to start your UK journey?" text="Tell us about your academic profile and let VS GLOBAL guide you through the next steps." variant="accent" />
    </>
  );
}
