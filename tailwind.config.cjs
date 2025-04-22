/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
    './layouts/**/*.astro',
    './components/**/*.astro'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        gold: '#D4AF37',
        indigo: { 900: '#2D3142' },
        parchment: '#FAF7F2',
        slate: { 600: '#6B7280' },
      },

    },

  },
  plugins: [require('@tailwindcss/typography')],

}

