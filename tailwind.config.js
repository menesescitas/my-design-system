// Importamos el archivo JS que genera Style Dictionary
const tokens = require('./build/js/tailwind-tokens.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      // Esto mapea automáticamente TODO lo que esté bajo "global" en tu JSON
      colors: tokens.global, 
    },
  },
  plugins: [],
}
