import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#17202A',
        mint: '#1F9D7A',
        sun: '#F5B84B',
        sky: '#EAF6FF',
        line: '#DCE6EA',
      },
      boxShadow: {
        soft: '0 16px 48px rgba(23, 32, 42, 0.08)',
      },
    },
  },
  plugins: [],
};

export default config;
