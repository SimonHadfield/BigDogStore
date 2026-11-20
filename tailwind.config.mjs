/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        canvas: {
          butter: '#EDE3D5', // Warm Oat/Sand canvas
          oat: '#EDE3D5',
          periwinkle: '#D8E6FA',
        },
        card: {
          vanilla: '#F8F4EE', // Warm Cream cards
          cream: '#F8F4EE',
        },
        ink: {
          DEFAULT: '#1C1917', // Deep Charcoal text & borders
          light: '#44403C',
        },
        rust: {
          DEFAULT: '#C87A4B', // Doberman Tan accent
          dark: '#B06538',
          light: '#DE9367',
        },
        olive: {
          DEFAULT: '#4B5842', // Forest Olive accent
          dark: '#3D4735',
          light: '#657659',
        },
        burgundy: {
          DEFAULT: '#5C2B33', // Burgundy accent
          dark: '#452026',
          light: '#793944',
        },
        mint: {
          DEFAULT: '#4B5842', // Forest Olive badge
          dark: '#3D4735',
          light: '#657659',
          faint: '#EEF2EC',
        },
        bubblegum: '#F28482',
        sky: '#84D2F6',
        creamsicle: '#F6BD60',
      },
      boxShadow: {
        brutal: '4px 4px 0px #1C1917',
        'brutal-sm': '2px 2px 0px #1C1917',
        'brutal-lg': '6px 6px 0px #1C1917',
        'brutal-xl': '8px 8px 0px #1C1917',
        'brutal-hover': '1px 1px 0px #1C1917',
      },
      fontFamily: {
        display: [
          '"Fredoka"',
          'system-ui',
          'sans-serif',
        ],
        sans: [
          '"Plus Jakarta Sans"',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
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
