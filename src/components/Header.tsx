import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ArrowRight, Menu, Phone, X } from 'lucide-react';
import { SITE, waLink } from '../data/site';
import ThemeToggle from './ThemeToggle';

const LINKS = [
  ['/', 'Home'], ['/about', 'About'], ['/services', 'Services'],
  ['/study-uk', 'Study in UK'], ['/process', 'Process'],
  ['/documents', 'Documents'], ['/faqs', 'FAQs'], ['/contact', 'Contact'],
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
  }, [open ]);

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'glass shadow-soft' : 'bg-transparent'}`}>
        <div className="container-x flex items-center justify-between h-[72px]">
          <Link to="/" className="flex items-center gap-3 group" aria-label="VS GLOBAL home">
            <span className="w-10 h-10 rounded-2xl grid place-items-center font-heading font-extrabold text-white transition-transform duration-300 group-hover:scale-105" style={{ background: 'linear-gradient(135deg,#0A1F44,#C8102E)' }}>VS</span>
            <span className="leading-none">
              <span className="font-heading font-extrabold block" style={{ color: 'rgb(var(--ink))' }}>VS GLOBAL</span>
              <span className="caption font-medium" style={{ color: 'rgb(var(--muted))' }}>UK Education Consultancy</span>
            </span>
          </Link>
          <nav className="hidden lg:flex items-center gap-1 text-[0.9rem] font-medium" aria-label="Primary">
            {LINKS.map(([to, label]) => (
              <NavLink key={to} to={to} className={({ isActive }) => `relative px-3 py-2 rounded-full transition-colors ${isActive ? '' : 'hover:bg-surface'}`}
                style={({ isActive }) => ({ color: isActive ? 'rgb(var(--accent))' : 'rgb(var(--ink) / .78)' })}>
                {({ isActive }) => (<>{label}{isActive && <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-accent" />}</>)}
              </NavLink>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle compact />
            <a href={waLink()} target="_blank" rel="noreferrer" className="btn-primary !min-h-[44px] !px-5 text-sm">Apply Now <ArrowRight size={16} /></a>
          </div>
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle compact />
            <button aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)} className="w-11 h-11 rounded-full border grid place-items-center" style={{ borderColor: 'rgb(var(--line))' }}>
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>
      <div className={`h-[72px] ${scrolled ? '' : ''}`} aria-hidden="true" />
      <div className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        style={{ background: 'rgb(0 0 0 / .4)', backdropFilter: 'blur(4px)' }} onClick={() => setOpen(false)} aria-hidden="true" />
      <nav aria-label="Mobile" className={`lg:hidden fixed top-[72px] bottom-0 right-0 z-40 w-[86%] max-w-sm p-5 flex flex-col gap-1 overflow-y-auto transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ background: 'rgb(var(--elevated))', borderLeft: '1px solid rgb(var(--line))' }}>
        {LINKS.map(([to, label], i) => (
          <NavLink key={to} to={to} onClick={() => setOpen(false)} style={{ transitionDelay: `${i * 25}ms` }}
            className={({ isActive }) => `rounded-2xl px-4 py-4 font-heading font-bold text-lg transition-all ${open ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'} ${isActive ? 'bg-surface text-accent' : ''}`}>
            {label}
          </NavLink>
        ))}
        <div className="grid grid-cols-2 gap-2 pt-4 mt-auto">
          <a href={waLink()} target="_blank" rel="noreferrer" className="btn-primary text-sm">Apply Now</a>
          <a href={`tel:${SITE.ukPhoneHref}`} className="btn-ghost text-sm"><Phone size={16} /> {SITE.ukPhone}</a>
        </div>
      </nav>
    </>
  );
}
