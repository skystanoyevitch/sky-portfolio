module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'permanentMarker': ['"Permanent Marker"', 'cursive'],
        'gruppo': ['"Gruppo"', 'cursive'],
        'bungeeShade': ['"Bungee Shade"', 'cursive'],
        'lemon': ['"Lemon"', 'cursive'],
        'montserrat': ['"Montserrat"', 'sans-serif'],
        'majorMonoDisplay': ['"Major Mono Display"', 'monospace'],

      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
