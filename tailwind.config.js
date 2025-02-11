/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'move-rotate': 'moveRotate 2.5s  forwards ',
      },
      keyframes: {
        moveRotate: {
          '0%': {transform: 'translateX(0) rotate(40deg) scale(1)'},
          '40%':{transform: 'translateX(88vw) rotate(-15deg) scale(0.4)'},
          '70%':{transform: 'translateX(5vw) rotate(20deg) scale(0.3)  '},
          '90%':{transform: 'translateX(55vw) translateY(-18vw) rotate(-20deg) scale(0.25)'},
          '100%':{transform: 'translateX(42vw) translateY(-18vw) rotate(0deg) scale(0.25)'},
        },
      },
    },
  },
  plugins: [],
}

