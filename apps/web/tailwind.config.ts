import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#17211D',
        mint: '#087A5B',
        leaf: '#DFF4EA',
        sun: '#F4B740',
        sky: '#EDF6F8',
        line: '#DDE5E1',
        canvas: '#F7F9F8',
      },
      boxShadow: {
        soft: '0 18px 50px rgba(23, 33, 29, 0.09)',
        lift: '0 12px 30px rgba(23, 33, 29, 0.12)',
      },
    },
  },
  plugins: [],
};

export default config;
