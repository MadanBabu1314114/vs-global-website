/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#0A1F44', light: '#1a3a6b', dark: '#061230' },
        brand: { DEFAULT: '#C8102E', dark: '#a00d26' },
        mist: '#F5F7FA',
        ink: '#0B1220',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        elevated: 'rgb(var(--elevated) / <alpha-value>)',
        base: 'rgb(var(--base) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        success: 'rgb(var(--success) / <alpha-value>)',
        warning: 'rgb(var(--warning) / <alpha-value>)',
        error: 'rgb(var(--error) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(10,31,68,.18)',
        soft: '0 4px 16px -6px rgba(10,31,68,.12)',
        glow: '0 0 0 1px rgba(255,255,255,.08), 0 20px 60px -20px rgba(10,31,68,.5)',
      },
      borderRadius: { xl2: '1.25rem', xl3: '1.75rem' },
    },
  },
  plugins: [],
}
