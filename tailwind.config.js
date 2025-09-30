// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // This is crucial!
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#d97757',
          50: '#fdf6f3',
          100: '#fae8e1',
          200: '#f5d1c3',
          300: '#eeae9b',
          400: '#e58568',
          500: '#d97757',
          600: '#c15436',
          700: '#a1422b',
          800: '#863a27',
          900: '#703426',
          950: '#3d1911',
        },
      },
      fontFamily: {
        lato: ['var(--font-lato)', 'sans-serif'],
        josefin: ['var(--font-josefin-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}