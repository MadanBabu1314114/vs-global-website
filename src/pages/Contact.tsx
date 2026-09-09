import { Helmet } from 'react-helmet-async';
import { MessageCircle, Phone } from 'lucide-react';
import EnquiryForm from '../components/EnquiryForm';
import SmartImage from '../components/SmartImage';
import Parallax from '../components/motion/Parallax';
import { AnimatedSection } from '../hooks/useReveal';
import { SITE, waLink } from '../data/site';

export default function Contact() {
  return (
    <>
      <Helmet><title>Contact | VS GLOBAL</title></Helmet>
      <section className="container-x section">
        <AnimatedSection>
          <p className="eyebrow">Contact</p>
          <h1 className="display mt-4">Talk to a real advisor.</h1>
          <p className="body-lg mt-4 max-w-2xl" style={{ color: 'rgb(var(--muted))' }}>Call, WhatsApp or send the enquiry form — we review every profile personally.</p>
        </AnimatedSection>
        <div className="mt-10 grid gap-6 lg:grid-cols-[.9fr_1.1fr] items-start">
          <div className="grid gap-4">
            <AnimatedSection>
              <div className="img-zoom px-scale overflow-hidden rounded-3xl border shadow-card" style={{ borderColor: 'rgb(var(--line))' }}>
                <Parallax speed="card">
                <SmartImage id="photo-1522202176988-66273c2fd55f" alt="Advisor consulting with students about UK applications" ratio="aspect-[16/10]" eager w={1000} />
                </Parallax>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="card">
                <p className="caption text-accent font-bold">UK contact</p>
                <p className="font-heading font-bold text-lg mt-1">{SITE.ukName}</p>
                <p className="small" style={{ color: 'rgb(var(--muted))' }}>Phone / WhatsApp · {SITE.ukPhone}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <a href={`tel:${SITE.ukPhoneHref}`} className="btn-navy text-sm !min-h-[44px]"><Phone size={15} /> Call</a>
                  <a href={waLink()} target="_blank" rel="noreferrer" className="btn-primary text-sm !min-h-[44px]"><MessageCircle size={15} /> Chat With VS GLOBAL</a>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={90}>
              <div className="card">
                <p className="caption text-accent font-bold">India contact</p>
                <p className="font-heading font-bold text-lg mt-1">{SITE.indiaName}</p>
                <p className="small" style={{ color: 'rgb(var(--muted))' }}>Phone / WhatsApp · {SITE.indiaPhone}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <a href={`tel:${SITE.indiaPhoneHref}`} className="btn-navy text-sm !min-h-[44px]"><Phone size={15} /> Call India</a>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={160}>
              <div className="card small" style={{ color: 'rgb(var(--muted))' }}>
                Email: <span className="chip ml-1">coming soon</span><br />
                <span className="inline-block mt-2">Social links: <span className="chip ml-1">coming soon</span></span><br />
                <span className="inline-block mt-2">Office address: <span className="chip ml-1">to be added</span></span>
              </div>
            </AnimatedSection>
          </div>
          <AnimatedSection delay={120}><EnquiryForm /></AnimatedSection>
        </div>
      </section>
    </>
  );
}
