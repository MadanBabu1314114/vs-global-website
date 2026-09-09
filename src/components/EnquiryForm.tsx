import { useState } from 'react';
import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { waLink } from '../data/site';

const FIELDS = [
  ['fullName', 'Full Name'], ['email', 'Email Address'], ['phone', 'WhatsApp / Phone Number'],
  ['country', 'Country'], ['qualification', 'Highest Qualification'], ['gradYear', 'Graduation Year'],
  ['score', 'Percentage / CGPA'], ['englishTest', 'English Test'], ['course', 'Preferred Course'],
  ['location', 'Preferred UK Location'], ['intake', 'Preferred Intake'], ['budget', 'Approximate Budget'],
] as const;

export default function EnquiryForm({ compact = false }: { compact?: boolean }) {
  const [done, setDone] = useState(false);
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState('');

  if (done) {
    return (
      <div className="card text-center py-10" role="status">
        <CheckCircle2 className="mx-auto text-success" size={40} />
        <p className="font-heading font-bold text-xl mt-3">Thank you for contacting VS GLOBAL.</p>
        <p className="small mt-2" style={{ color: 'rgb(var(--muted))' }}>Our team will review your enquiry and contact you.</p>
        <a href={waLink()} target="_blank" rel="noreferrer" className="btn-primary text-sm mt-6"><MessageCircle size={16} /> Continue on WhatsApp</a>
      </div>
    );
  }

  return (
    <form className="card grid gap-5 md:p-8" noValidate onSubmit={(e) => {
      e.preventDefault();
      if (!consent) { setError('Please accept the privacy consent so we can contact you about your enquiry.'); return; }
      setError('');
      const d = new FormData(e.currentTarget);
      const summary = [...d.entries()].map(([k, v]) => `${k}: ${v}`).join('\n');
      window.open(waLink(`Hello VS GLOBAL, new enquiry:\n${summary}`), '_blank');
      setDone(true);
    }}>
      <div>
        <p className="font-heading font-extrabold text-xl">Student Enquiry</p>
        <p className="small mt-1" style={{ color: 'rgb(var(--muted))' }}>Share your profile — we reply on WhatsApp.</p>
      </div>
      <div className={`grid gap-4 ${compact ? '' : 'md:grid-cols-2'}`}>
        {FIELDS.map(([name, label]) => (
          <div key={name}>
            <label className="label" htmlFor={`eq-${name}`}>{label}{(name === 'fullName' || name === 'phone') && <span className="text-accent"> *</span>}</label>
            <input id={`eq-${name}`} name={name} required={name === 'fullName' || name === 'phone'} className="input"
              type={name === 'email' ? 'email' : name === 'phone' ? 'tel' : 'text'}
              inputMode={name === 'phone' ? 'tel' : undefined} autoComplete={name === 'phone' ? 'tel' : name === 'email' ? 'email' : 'off'} placeholder={label} />
          </div>
        ))}
      </div>
      <div>
        <label className="label" htmlFor="eq-message">Message</label>
        <textarea id="eq-message" name="message" rows={4} className="input" placeholder="Tell us about your academics, budget and goals" />
      </div>
      <div className="rounded-2xl border p-4 flex items-start gap-3" style={{ borderColor: 'rgb(var(--line))', background: 'rgb(var(--surface))' }}>
        <input id="eq-consent" type="checkbox" checked={consent} onChange={(e) => { setConsent(e.target.checked); if (e.target.checked) setError(''); }} className="mt-1 w-5 h-5 accent-[#C8102E]" aria-describedby="eq-consent-err" />
        <label htmlFor="eq-consent" className="small">I consent to VS GLOBAL contacting me about my enquiry and storing my details for follow-up.</label>
      </div>
      {error && <p id="eq-consent-err" role="alert" className="small font-semibold text-error">{error}</p>}
      <button className="btn-primary w-full link-arrow" type="submit">Submit My Enquiry <ArrowRight size={17} /></button>
      <p className="caption text-center" style={{ color: 'rgb(var(--muted))' }}>Submitting opens WhatsApp with your enquiry summary — no account needed.</p>
    </form>
  );
}
