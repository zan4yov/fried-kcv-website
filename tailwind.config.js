/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    screens: { sm: '640px', md: '820px', lg: '1024px', xl: '1280px' },
    extend: {
      fontFamily: {
        serif: ['"Instrument Serif"', 'serif'],
        sans:  ['"Geist"', 'sans-serif'],
        mono:  ['"Geist Mono"', 'monospace'],
      },
      colors: {
        y:    '#b99a2e',
        bg:   '#0a0a0a',
        surf: '#12100c',
        bd:   '#1e1e1e',
        bdh:  '#2a2a2a',
        tx:   '#e5e5e5',
        mt:   '#666666',
        mt2:  '#3a3a3a',
      },
      maxWidth: { page: '900px' },
    },
  },
  plugins: [],
}
