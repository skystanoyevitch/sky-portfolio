module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'rockSalt': ['"Rock Salt"', 'cursive'],
        'robotoThin': ['"Roboto"', 'sans-serif'],
      },
      backgroundImage: theme => ({
        'coming-soon': "url('./images/coming-soon.jpg')",
        'gradient-BG': "url('./images/cool-background.png')",
        'profile-BG': "url('./images/sky2.png')",
        'skyCafe': "url('./images/skycafe.png')",
        'this-is-sky': "url('./images/This-is-Sky-.png')",
        'hero-image': "url('./images/hero-carlsbad.jpg')",
        'aboutDesign': "url('./images/about-design.jpg')",
      })
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      "secondary": '#838FC7'
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
