/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mainFont: ['novaMono'],
        secondaryFont : ['poppins-regular'],
        thirdFont : ['poppins-bold'],

      },
      colors:{
        primary : '#001A57',
        secondary : '#a9b3c8'
      }
    },
  },
  plugins: [],
}

