/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        press: ["Press Start 2P", "cursive"],
        sono: ["Sono", "sans-serif"]
      }
    },
  },
  plugins: [],
};

module.exports = config;
