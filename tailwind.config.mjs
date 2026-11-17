/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#FAF6F0', // Warm Cream primary background
          200: '#F5EFE6',
          300: '#EBDDCC',
        },
        sand: {
          50: '#FAF7F2',
          100: '#F2EAE0', // Soft Sand card background
          200: '#E6D7C7',
          300: '#D5BEA8',
          400: '#C2A388',
        },
        espresso: {
          DEFAULT: '#1E1B18', // Deep Espresso primary text
          900: '#1E1B18',
          800: '#2E2A25',
          700: '#423D35',
          600: '#5C554B',
          500: '#7A7265',
          400: '#9E9484',
          300: '#C4BCB0',
        },
        tan: {
          DEFAULT: '#D97736', // Doberman Tan primary buttons/badges
          dark: '#B85E22',
          light: '#F49E63',
          faint: '#FDF3EB',
        },
        sage: {
          DEFAULT: '#4A7C59', // Sage/Matcha secondary accents
          dark: '#385F44',
          light: '#659C76',
          faint: '#EEF5F0',
        },
        butter: '#FBF3D5',
      },
      fontFamily: {
        display: [
          '"Fraunces"',
          'ui-serif',
          'Georgia',
          'Cambria',
          'serif',
        ],
        sans: [
          '"Plus Jakarta Sans"',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
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
    },
  },
  plugins: [],
}
