/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Aquí mapeamos tus tokens de Figma
        'pds-purple': {
          50: '#E7DDF8',
          300: '#AB88E7',
          500: '#6429CD',
          700: '#330072',
          900: '#1F0D3F',
        },
        // Cuando agregues más en el JSON, los sumas aquí
      },
    },
  },
  plugins: [],
}
