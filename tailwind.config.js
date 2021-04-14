module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'gruppo': ['"Gruppo"', 'cursive'],
        'montserrat': ['"Montserrat"', 'sans-serif'],
        'majorMonoDisplay': ['"Major Mono Display"', 'monospace'],
        'Open-Sans': ['"Open Sans"', 'sans-serif'],
        'Ubuntu': ['"Ubuntu"', 'sans-serif'],
        'Zilla-Slab-Highlight': ['"Zilla Slab Highlight"', 'cursive'],
      },
      backgroundImage: theme => ({
        'coming-soon': "url('./images/coming-soon.jpg')",
        'gradient-BG': "url('./images/cool-background.png')",
        'profile-BG': "url('./images/profilephoto.png')",
        'skyCafe': "url('./images/skycafe.png')",
        'this-is-sky': "url('./images/This-is-Sky-.png')",
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
