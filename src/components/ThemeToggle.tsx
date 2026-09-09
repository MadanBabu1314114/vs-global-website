import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../theme/ThemeContext';

export default function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const { theme, toggle } = useTheme();
  return (
    <button
      type="button" onClick={toggle} aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
      aria-pressed={theme === 'dark'}
      className={`${compact ? 'w-11 h-11' : 'w-12 h-12'} rounded-full border grid place-items-center transition-all duration-300 hover:-translate-y-px hover:shadow-soft active:scale-95`}
      style={{ borderColor: 'rgb(var(--line))', background: 'rgb(var(--elevated))', color: 'rgb(var(--ink))' }}
    >
      <span className="transition-transform duration-300" key={theme}>
        {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
      </span>
    </button>
  );
}
