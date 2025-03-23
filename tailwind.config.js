module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#2c2b3c',
          light: '#353447',
          dark: '#25242f',
        },
        secondary: {
          DEFAULT: '#e8a87c',
          light: '#fbe8d3',
          dark: '#d3bbab',
        },
        accent: {
          DEFAULT: '#ff8364',
          light: '#ff9d85',
          dark: '#e56b4d',
        },
        text: {
          DEFAULT: '#fbe8d3',
          secondary: '#d3bbab',
          muted: 'rgba(211, 187, 171, 0.7)',
        },
        border: 'rgba(232, 168, 124, 0.2)',
      },
      boxShadow: {
        'autumn': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'autumn-lg': '0 10px 15px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'autumn': '10px',
      },
    },
  },
  plugins: [],
};