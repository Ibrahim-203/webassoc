/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./pages/*.{html,js}"],
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

