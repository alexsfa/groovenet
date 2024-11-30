/** @type {import('tailwindcss').Config} */



export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme:
     {
      colors: {
        'gray': {
          800: '#3A3A3A'
        },
        'orange': {
          200: '#F8E4AE',
          400: '#FBC12A',
          750: '#997000'
        },
        'black': '#000000'
      },
      fontFamily: {
        geologica: ["Geologica"]
      }
      
    },
    plugins: [require('tailwind-scrollbar-hide')]
}


