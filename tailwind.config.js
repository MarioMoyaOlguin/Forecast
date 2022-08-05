/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'weath': '886px', // => @media (min-width: 886px) { ... }
      'sm': '640px'
    }
  },
  plugins: [],
}
