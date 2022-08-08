/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: { max: '600px' },
        tablet: { min: '601px' },
        laptop: '1024px'
      },
      colors: {
        'card-bg': '#008b8b',
        'button-hv': '#16b1b1'
      },
      fontFamily: {
        'henny-penny': ['Henny Penny', 'cursive']
      }
    },
  },
  plugins: [],
}
