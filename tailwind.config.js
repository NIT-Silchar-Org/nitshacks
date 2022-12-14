/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        lemonMilk:['lemonMilk'],
        roadRage:['roadRage'],
        glitch1:['glitch1'],
        glitch2:['glitch2'],
        glitch3:['glitch3'],
        glitch4:['glitch4'],
        glitch5:['glitch5'],
        glitch6:['glitch6'],
        babaPro:['babaPro'],
      },

      colors:{
        'bgDark':'#120118',
        'bgPrimary':'#00132D',
        'fontColor':'#FEFFFF',
        'neon1':'#4EDFFF',
        'neon2':'#D03CAB',
        'offWhite': '#E7E7E7',
      },
      fontFamily:{
        lemonMilk:['lemonMilk'],
        roadRage:['roadRage'],
        mokotoGlitch:['mokotoGlitch'],
        babaPro:['babaPro'],
        mokotoGlitchMark: ['mokotoGlitchMark']
      },
      boxShadow: {
        gradient: ['-3px -3px 8px 4px #D03CAB, 3px 3px 8px 4px #4EDFFF']
      },
      backgroundImage:{
        '404bg':"url('/assests/Error404/404bg.png')"
      },
      backgroundSize: {
        'grow': ['auto 120%']
      }
    },
  },
  plugins: [],
};
