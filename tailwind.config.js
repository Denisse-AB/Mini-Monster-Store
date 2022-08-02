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
      }
    },
  },
  plugins: [],
}
