import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, BadgeCheck, GraduationCap, Luggage, Phone, Plane, ShieldCheck, Stamp } from 'lucide-react';
import CTA from '../components/CTA';
import EnquiryForm from '../components/EnquiryForm';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import SmartImage from '../components/SmartImage';
import Parallax from '../components/motion/Parallax';
import { MotionBackground } from '../components/motion/Ambient';
import { RevealText } from '../components/motion/RevealText';
import { useMouseDrift } from '../components/motion/useMouseDrift';
import { AnimatedSection } from '../hooks/useReveal';
import { SERVICES, WHY_CHOOSE } from '../data/content';
import { SITE, waLink } from '../data/site';

const TRUST = [
  { icon: BadgeCheck, t: 'Personalised Counselling' }, { icon: GraduationCap, t: 'Application Support' },
  { icon: Stamp, t: 'CAS Guidance' }, { icon: Plane, t: 'Visa Guidance' }, { icon: Luggage, t: 'Pre-Departure' },
];

export default function Home() {
  const heroCard = useMouseDrift<HTMLDivElement>(5);
  return (
    <>
      <Helmet><title>VS GLOBAL | Study in UK from India – UK Master's Consultancy</title>
        <meta name="description" content="VS GLOBAL helps students from India with UK Master's applications: counselling, applications, CAS guidance and visa-process assistance." /></Helmet>

      <section className="relative overflow-hidden">
        <MotionBackground />
        <div className="container-x section relative grid gap-10 lg:grid-cols-[1.05fr_.95fr] items-center pt-10 md:pt-16">
          <div>
            <RevealText delay={0}><p className="eyebrow"><ShieldCheck size={15} /> UK Master's guidance · India to UK</p></RevealText>
            <RevealText delay={90}><h1 className="display mt-4">Study in the UK with confidence.</h1></RevealText>
            <RevealText delay={180}><p className="body-lg mt-5 max-w-xl" style={{ color: 'rgb(var(--muted))' }}>
              VS GLOBAL helps students from India navigate the UK university application journey — personalised counselling, application support, CAS guidance and visa-process assistance.
            </p></RevealText>
            <RevealText delay={260}><div className="mt-7 flex flex-wrap gap-3">
              <a href={waLink()} target="_blank" rel="noreferrer" className="btn-primary link-arrow">Apply Now <ArrowRight size={17} /></a>
              <a href={`tel:${SITE.ukPhoneHref}`} className="btn-ghost"><Phone size={16} /> Talk to an Expert</a>
            </div></RevealText>
            <RevealText delay={340}><div className="mt-8 flex flex-wrap gap-2">
              {TRUST.map(({ icon: I, t }) => <span key={t} className="chip"><I size={15} className="text-accent" /> {t}</span>)}
            </div></RevealText>
          </div>
          <div className="relative" ref={heroCard} style={{ transform: 'translate3d(var(--mouse-x, 0px), var(--mouse-y, 0px), 0)' }}>
            <Parallax speed="image">
            <div className="img-zoom px-scale overflow-hidden rounded-3xl shadow-card border" style={{ borderColor: 'rgb(var(--line))' }}>
              <SmartImage id="photo-1523240795612-9a054b0db644" alt="International students collaborating on coursework at a UK university" eager w={1400} />
            </div>
            </Parallax>
            <Parallax speed="decor" className="absolute -top-4 right-4 sm:right-6">
              <div className="glass rounded-full px-4 py-2 shadow-card flex items-center gap-2 float-soft">
                <ShieldCheck size={15} className="text-accent" /><span className="small font-bold">Honest guidance · No false guarantees</span>
              </div>
            </Parallax>
            <Parallax speed="card" className="absolute -bottom-5 left-4 right-4 sm:left-6 sm:right-auto">
              <div className="glass rounded-2xl px-5 py-4 shadow-card">
                <p className="font-heading font-extrabold">One journey. One support team.</p>
                <p className="small" style={{ color: 'rgb(var(--muted))' }}>Enquiry → application → CAS → visa → arrival</p>
              </div>
            </Parallax>
          </div>
        </div>
      </section>

      <section className="container-x section">
        <SectionHeading eyebrow="Services" title="Everything for your UK Master's application" text="Guidance and support throughout your UK education journey — never guaranteed outcomes." />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => <ServiceCard key={s.title} index={i} icon={s.icon} title={s.title} text={s.text} note={s.note} />)}
        </div>
        <div className="text-center mt-8"><Link to="/services" className="btn-ghost link-arrow">View all services <ArrowRight size={16} /></Link></div>
      </section>

      <section className="border-y" style={{ borderColor: 'rgb(var(--line))', background: 'rgb(var(--surface))' }}>
        <div className="container-x section grid gap-10 lg:grid-cols-2 items-center">
          <AnimatedSection>
            <Parallax speed="image">
            <div className="img-zoom px-scale overflow-hidden rounded-3xl border shadow-card" style={{ borderColor: 'rgb(var(--line))' }}>
              <SmartImage id="photo-1481627834876-b7833e8f5570" alt="University library with students preparing for postgraduate study" ratio="aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]" />
            </div>
            </Parallax>
          </AnimatedSection>
          <div>
          <AnimatedSection>
            <p className="eyebrow">Why VS GLOBAL</p>
            <h2 className="h2 mt-3">A calm, clear path from first call to classroom.</h2>
            <p className="body-lg mt-3" style={{ color: 'rgb(var(--muted))' }}>Student-first counselling with the process explained at every step — what we do, what your university does, and what the authorities decide.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/process" className="btn-navy link-arrow">See the 22-step journey <ArrowRight size={16} /></Link>
            </div>
          </AnimatedSection>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {WHY_CHOOSE.map((w, i) => (
              <AnimatedSection key={w} delay={(i % 2) * 80}>
                <div className="card !p-5 h-full"><p className="caption text-accent font-bold">0{i + 1}</p><p className="font-semibold mt-1">{w}</p></div>
              </AnimatedSection>
            ))}
          </div>
          </div>
        </div>
      </section>

      <section className="container-x section">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-3xl border img-zoom px-scale" style={{ borderColor: 'rgb(var(--line))' }}>
            <Parallax speed="image">
              <SmartImage id="photo-1533929736458-ca588d08c8be" alt="London street with classic architecture" ratio="aspect-[16/10] md:aspect-[21/9]" />
            </Parallax>
            <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgb(6 18 48 / .78) 0%, rgb(6 18 48 / .35) 55%, transparent 100%)' }} aria-hidden="true" />
            <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-center max-w-xl">
              <p className="caption font-bold text-white/80">Study in the UK</p>
              <p className="font-heading font-extrabold text-white text-2xl md:text-4xl mt-2">Campuses, cities and student life.</p>
              <Link to="/study-uk" className="btn-primary w-fit mt-5 link-arrow">Explore studying in the UK <ArrowRight size={16} /></Link>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <CTA title="Ready to start your UK journey?" text="Tell us about your academic profile and let VS GLOBAL guide you through the next steps." />

      <section className="container-x section pt-0">
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] items-start">
          <AnimatedSection>
            <p className="eyebrow">Enquire</p>
            <h2 className="h2 mt-3">Get a profile assessment.</h2>
            <p className="body-lg mt-3" style={{ color: 'rgb(var(--muted))' }}>Fill the form — it opens WhatsApp with your summary. Or call {SITE.ukPhone} / {SITE.indiaPhone}.</p>
            <div className="card mt-6 !p-5">
              <p className="small font-semibold">What happens next?</p>
              <ol className="small mt-2 grid gap-1.5" style={{ color: 'rgb(var(--muted))' }}>
                <li>1 · We review your academics, budget and intake.</li>
                <li>2 · We suggest suitable courses and universities.</li>
                <li>3 · We support application, CAS and visa steps.</li>
              </ol>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={120}><EnquiryForm /></AnimatedSection>
        </div>
      </section>
    </>
  );
}
