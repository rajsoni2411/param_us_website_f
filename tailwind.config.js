/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '320px',
        sm: '640px',
        miniTablet: '768px',
        tablet: '1024px',
        1280: '1280px',
        1536: '1536px',
        1920: '1920px',
      },
      backgroundImage: {
        "home-bg": "url('./assets/images/bgclients.jpeg')",
        "careers-bg": "url('./assets/careers/carrerbg.png')",
        "aboutus-bg": "url('./assets/images/aboutus.jpg')",
        "hex1-bg": "url('./assets/hexagons/hex1.jpeg')",
        "hex2-bg": "url('./assets/hexagons/hex2.jpeg')",
        "hex3-bg": "url('./assets/hexagons/hex3.jpeg')",
        "hex4-bg": "url('./assets/hexagons/hex4.jpeg')",
        "hex5-bg": "url('./assets/hexagons/hex5.jpeg')",
        "hex6-bg": "url('./assets/hexagons/hex6.jpeg')",
        "service-bg": "url('./assets/images/services.jpg')"
      },
      clipPath: {
        'bottom-inset': 'inset(0% 0% 20% 0%)'
      },
      keyframes: {
        "zoom-in": {
          "0%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3)",
          },
          "80%": {
            opacity: 0.8,
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: 1,
          },
        },

        "fade-in": {
          "0%": {
            opacity: 0
          },
          "100%": {
            opacity: 1
          },
        },
        "fade-out": {
          "0%": {
            opacity: 1
          },
          "100%": {
            opacity: 0
          },
        },
        "slide-out-left": {
          "0%": {
            transform: "translate3d(0, 0, 0)",
          },
          "100%": {
            visibility: "hidden",
            transform: "translate3d(-100%, 0, 0)",
          },
        },
        "slide-out-right": {
          "0%": {
            transform: "translate3d(0, 0, 0)",
          },
          "100%": {
            visibility: "hidden",
            transform: "translate3d(100%, 0, 0)",
          },
        },
      },
      animation: {
        zoomIn: 'zoom-in 1s ease-out 0.25s 1',
        fadein: 'fade-in 1s ease-in-out 0.25s 1',
        fadeout: 'fade-out 1s ease-out 0.25s 1',
        slideoutleft: 'slide-out-left 1s ease-in-out 0.25s 1',
        slideoutright: 'slide-out-right 1s ease-in-out 0.25s 1',
      },
      fontFamily: {
        faustina: ['Faustina'],
        raleway: ['Raleway'],
        poppins: ['Poppins'],
      },
    },
  },
  plugins: [],
}

