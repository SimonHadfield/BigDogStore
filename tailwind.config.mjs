/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#FFFFFF', // Pure crisp white
          butter: '#FFFFFF',
          oat: '#FBF9F5',
          sand: '#F5EFE6',
        },
        card: {
          DEFAULT: '#FFFFFF',
          vanilla: '#FFFFFF',
          cream: '#F4ECE1', // Soft warm rounded card tone (#F4ECE1)
          soft: '#F4ECE1',
        },
        charcoal: {
          DEFAULT: '#1A1816',
          dark: '#121110',
          light: '#2B2724',
        },
        ink: {
          DEFAULT: '#1A1816', // Deep charcoal
          light: '#57534E',
          muted: '#78716C',
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
