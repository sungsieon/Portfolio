/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'move-rotate': 'moveRotate 2s  forwards ',
        'move-left': 'moveleft 2s forwards',
        'move-left-opacity': 'moveLeftOpacity 2s forwards',
        'move-right': 'moveright 2s forwards',  
        'move-right-opacity': 'moveRightOpacity 2s forwards', 
        'move-right-opacity2': 'moveright2 2s forwards',
        'star1-rotate': 'starRotate1 1.3s forwards',
        'star2-rotate': 'starRotate2 1.3s forwards',
        'star3-rotate': 'starRotate3 1.3s forwards',
        'star4-rotate': 'starRotate4 1.3s forwards',
      },
      keyframes: {
        moveRotate: {
          '0%': {transform: 'translateX(0) rotate(40deg) scale(1)'},
          '40%':{transform: 'translateX(88vw) rotate(-15deg) scale(0.4)'},
          '70%':{transform: 'translateX(5vw) rotate(20deg) scale(0.3)  '},
          '90%':{transform: 'translateX(55vw) translateY(-18vw) rotate(-20deg) scale(0.25)'},
          '100%':{transform: 'translateX(42vw) translateY(-18vw) rotate(0deg) scale(0.25)'},
        },

        starRotate1: {
          '0%': {transform: 'scale(1) translateX(0) translateY(0vw) rotate(0deg)'},
          '100%':{transform: 'scale(1.9) translateX(-12vw) translateY(-43vw) rotate(-50deg) '},
        },

        starRotate2: {
          '0%': {transform: 'scale(1) translateY(0vw) translateX(0) rotate(0deg)'},
          '100%':{transform: 'scale(1.4) translateY(45vw) translateX(25vw) rotate(50deg) '},
        },

        starRotate3: {
          '0%': {transform: 'scale(1) translateY(0vw) translateX(0) rotate(0deg)'},
          '100%':{transform: 'scale(1.2) translateY(26vw) translateX(10vw) rotate(50deg) '},
        },

        starRotate4: {
          '0%': {transform: 'scale(1) translateY(0vw) translateX(0) rotate(0deg)'},
          '100%':{transform: 'scale(1) translateY(-20vw) translateX(-43vw) rotate(-50deg) '},
        },

        moveleft: {
          '0%': {transform: 'translateX(0)',opacity:'0'},
          '100%': {transform: 'translateX(-79vw)',opacity:'1'},
        },

        moveLeftOpacity: {
          '0%': {transform: 'translateX(0)',opacity:'1'},
          '100%': {transform: 'translateX(-79vw)',opacity:'0'},
        },

        moveright: {
          '0%': {transform: 'translateX(-33.7vw)', opacity:'1'},
          '100%': {transform: 'translateX(0)',opacity:'0'},
        },

        moveRightOpacity: {
          '0%': {transform: 'translateX(-79vw)',opacity:'0'},
          '100%': {transform: 'translateX(0)',opacity:'1'},
        },

        moveright2: {
          '0%': {transform: 'translateX(-79vw)', opacity:'1'},
          '100%': {transform: 'translateX(0vw)',opacity:'0'},
        },
      },
    },
  },
  plugins: [],
}

