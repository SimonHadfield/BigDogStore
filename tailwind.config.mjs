/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        canvas: {
          butter: '#F8D26A', // Vibrant Retro Butter/Marigold canvas
          periwinkle: '#D8E6FA', // Soft Periwinkle Blue alternative
        },
        card: {
          vanilla: '#FFFDF7', // Crisp Off-White/Vanilla product cards
        },
        ink: {
          DEFAULT: '#1A1614', // Deep Ink 2px borders & typography
          light: '#36302C',
        },
        rust: {
          DEFAULT: '#E06D3B', // Doberman Rust primary buttons
          dark: '#C45727',
          light: '#F48E60',
        },
        mint: {
          DEFAULT: '#52B788', // Mint/Sage sticker badges
          dark: '#3A966A',
          light: '#74C69D',
          faint: '#EAF7EE',
        },
        bubblegum: '#F28482',
        sky: '#84D2F6',
        creamsicle: '#F6BD60',
      },
      boxShadow: {
        brutal: '4px 4px 0px #1A1614',
        'brutal-sm': '2px 2px 0px #1A1614',
        'brutal-lg': '6px 6px 0px #1A1614',
        'brutal-xl': '8px 8px 0px #1A1614',
        'brutal-hover': '1px 1px 0px #1A1614',
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
