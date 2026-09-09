import { Link } from 'react-router-dom';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { SITE, waLink } from '../data/site';

export default function Footer() {
  return (
    <footer className="mt-10 border-t" style={{ borderColor: 'rgb(var(--line))', background: 'rgb(var(--surface))' }}>
      <div className="container-x py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-heading font-extrabold text-xl" style={{ color: 'rgb(var(--ink))' }}>VS GLOBAL</p>
          <p className="small mt-1" style={{ color: 'rgb(var(--muted))' }}>UK Education Consultancy for students in India.</p>
          <a href={waLink()} target="_blank" rel="noreferrer" className="btn-primary text-sm mt-5 !min-h-[44px]"><MessageCircle size={16} /> Chat on WhatsApp <ArrowUpRight size={15} /></a>
        </div>
        <nav aria-label="Explore">
          <p className="font-heading font-bold mb-3">Explore</p>
          <div className="grid gap-2 small">
            {[['/', 'Home'], ['/about', 'About Us'], ['/services', 'Services'], ['/study-uk', 'Study in UK'], ['/process', 'Application Process'], ['/documents', 'Documents'], ['/faqs', 'FAQs'], ['/contact', 'Contact']].map(([to, l]) => (
              <Link key={to} to={to} className="hover:text-accent transition-colors w-fit">{l}</Link>
            ))}
          </div>
        </nav>
        <nav aria-label="Services">
          <p className="font-heading font-bold mb-3">Services</p>
          <div className="grid gap-2 small">
            {[['/services', 'Course selection'], ['/services', 'Application support'], ['/services', 'CAS guidance'], ['/process', '22-step journey'], ['/documents', 'Document checklist']].map(([to, l], i) => (
              <Link key={i} to={to} className="hover:text-accent transition-colors w-fit">{l}</Link>
            ))}
          </div>
        </nav>
        <div>
          <p className="font-heading font-bold mb-3">Contact</p>
          <p className="small">{SITE.ukName}<br /><a className="hover:text-accent font-semibold" href={`tel:${SITE.ukPhoneHref}`}>{SITE.ukPhone}</a></p>
          <p className="small mt-2">{SITE.indiaName}<br /><a className="hover:text-accent font-semibold" href={`tel:${SITE.indiaPhoneHref}`}>{SITE.indiaPhone}</a></p>
          <p className="caption mt-4" style={{ color: 'rgb(var(--muted))' }}>Privacy Policy · Terms · Cookie Policy</p>
        </div>
      </div>
      <div className="border-t" style={{ borderColor: 'rgb(var(--line))' }}>
        <div className="container-x py-5 grid gap-2">
          <p className="caption" style={{ color: 'rgb(var(--muted))' }}>{SITE.disclaimer}</p>
          <p className="caption" style={{ color: 'rgb(var(--muted))' }}>© VS GLOBAL — Guidance and support throughout your UK education journey.</p>
        </div>
      </div>
    </footer>
  );
}
