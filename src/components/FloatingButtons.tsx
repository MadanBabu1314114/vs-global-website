import { Link } from 'react-router-dom';
import { MessageCircle, Phone } from 'lucide-react';
import { SITE, waLink } from '../data/site';

export default function FloatingButtons() {
  return (
    <>
      <a href={waLink()} target="_blank" rel="noreferrer" aria-label="Chat with VS GLOBAL on WhatsApp"
        className="fixed bottom-20 md:bottom-6 right-4 z-40 w-14 h-14 rounded-full text-white grid place-items-center shadow-card transition-transform duration-200 hover:scale-105 active:scale-95"
        style={{ background: 'linear-gradient(135deg,#25D366,#128C7E)' }}>
        <MessageCircle />
      </a>
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-3 text-center text-xs font-semibold border-t" style={{ background: 'rgb(var(--elevated))', borderColor: 'rgb(var(--line))', paddingBottom: 'env(safe-area-inset-bottom)' }}>
        <a href={`tel:${SITE.ukPhoneHref}`} className="py-3.5 flex items-center justify-center gap-1.5"><Phone size={14} /> Call</a>
        <a href={waLink()} target="_blank" rel="noreferrer" className="py-3.5 text-white" style={{ background: '#25D366' }}>WhatsApp</a>
        <Link to="/contact" className="py-3.5 text-white" style={{ background: '#0A1F44' }}>Apply Now</Link>
      </div>
    </>
  );
}
