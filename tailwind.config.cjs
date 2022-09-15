/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

const colors = require('tailwindcss/colors');

module.exports = {
  purge:['./index.html','./src/**/*/{vue,js,ts,jsx,tsx}'],
  darkMode:'media', // or 'media' or 'class'
  content:  [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  theme: {
    colors:{
      red: colors.rose,
      pink: colors.fuchsia,
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  variants:{
   extend:{
    backgroundColor:['group-focus','checked','odd','even','dark'],
    scale:['focus-within'],
    textDecoration:['focus-visible'],
    animation: ['motion-safe','motion-reduce'],
    opacity: ['disabled'],
    textColor: ['visited'],
    borderColor: ['checked','dark'],
    borderWidth: ['first','last'],
    textOpacity:['dark'],
    gradientColorStops:['dark'],
    placeholderColor:['dark'],
    textColor :['dark']
   }
  },
  plugins: [
    plugin(function({addBase,theme}){
      addBase({
        'h1': { fontSize: theme('fontSize.2xl') },
        'h2': { fontSize: theme('fontSize.xl') },
        'h3': { fontSize: theme('fontSize.lg') },
      })
    })
  ],
}
