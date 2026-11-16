/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        atelier: {
          950: '#0a0a0a',
          900: '#121212',
          850: '#181818',
          800: '#222222',
          700: '#333333',
          400: '#8c8c8c',
          200: '#d1d1d1',
          100: '#ebebeb',
          50: '#f8f8f8',
        },
        doberman: {
          rust: '#993d20',
          tan: '#c47343',
          onyx: '#0d0d0f',
          bone: '#f3ede2',
        }
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
        editorial: [
          'ui-serif',
          'Georgia',
          'Cambria',
          '"Times New Roman"',
          'Times',
          'serif',
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      letterSpacing: {
        widest: '.2em',
        ultra: '.3em',
      }
    },
  },
  plugins: [],
};
