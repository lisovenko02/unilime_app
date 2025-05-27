import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bg-darker': '#111111',
        'bg-dark': '#141414',
        'text-light': '#F4F4F4',
        'text-gray': '#B3B3B3',
        primary: '#FFDD00',
        'primary-dark': '#FFB800',
        'primary-light': '#FACC15',
        accent: '#FFB347',
        'accent-dark': '#E0962F',
        'accent-light': '#FFD280',
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
