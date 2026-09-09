import { ChevronDown } from 'lucide-react';

export default function FAQItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className="card !p-0 overflow-hidden transition-shadow" style={open ? { borderColor: 'rgb(var(--accent) / .5)' } : undefined}>
      <button type="button" onClick={onToggle} aria-expanded={open} className="w-full flex items-center justify-between gap-4 text-left px-5 py-5 min-h-[60px] font-semibold">
        <span style={{ color: 'rgb(var(--ink))' }}>{q}</span>
        <span className={`shrink-0 w-9 h-9 rounded-full grid place-items-center border transition-transform duration-300 ${open ? 'rotate-180' : ''}`} style={{ borderColor: 'rgb(var(--line))' }}>
          <ChevronDown size={17} />
        </span>
      </button>
      <div className={`acc-body ${open ? 'acc-open' : ''}`}>
        <div className="acc-inner"><p className="small px-5 pb-5" style={{ color: 'rgb(var(--muted))' }}>{a}</p></div>
      </div>
    </div>
  );
}
