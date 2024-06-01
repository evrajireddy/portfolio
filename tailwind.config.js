/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/App.jsx','./src/main.jsx','./index.html',"./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    logs: false,
    themes: [
     
    ],
  },
}

