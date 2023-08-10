/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cyan-blue': '#7AC2CC',
        teal: '#4D7A80',
        pink: '#FF00FB',
        aqua: '#E5FCFF',
        'light-brown': '#C99871',
        turquoise: '#72bfca',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        'source-code': ['Source Code Pro', 'monospace'],
      },
    },
  },
  plugins: [],
};
