/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 8s infinite linear"
      },  keyframes: {
        "loop-scroll": {
          from: {
            transform: "translateX(0%)"
          },
          to: {
            transform: "translateX(-109%)"
          },
        },
      
      colors: {
        
      },
      screens: {
        'max-sm': {
          'max': '640px'
        }, // max-width: 640px
        'max-md': {
          'max': '768px'
        }, // max-width: 768px
        'max-800': {
          'max': '800px'
        },
        'max-lg': {
          'max': '1024px'
        }, // max-width: 1024px
        'max-xl': {
          'max': '1100px'
        }, // max-width: 1280px
        'max-xsm': {
          'max': '500px'
        },
        'max-intermedio': {
          'max': '800px'
        }
      },
  },
  plugins: [],
}
}}