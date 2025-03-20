module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
        bebas: ['"Bebas Neue"', "cursive"],
        caveat: ['"Caveat"', "cursive"],
        cutiveMono: ['"Cutive Mono"', "monospace"],
        vt: ["VT323", "monospace"],
        j15: ['"Jersey 15"', "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"],
        spaceGrotesk: ['"Space Grotesk"', "sans-serif"],
      },
      colors: {
        terminal: {
          black: "#0C0C0C",
          green: {
            DEFAULT: "#00FF00",
            dark: "#00AA00",
            light: "#CCFFCC",
          },
          blue: {
            DEFAULT: "#0066FF",
            dark: "#003399",
          },
          amber: {
            DEFAULT: "#FFBF00",
            dark: "#CC9900",
          },
        },
      },
      // Animation keyframes for terminal effects
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        scan: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100%)" },
        },
        glitch: {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        scan: "scan 2s linear infinite",
        glitch: "glitch 0.5s ease-in-out infinite",
      },
      backgroundImage: (theme) => ({
        "terminal-grid":
          "linear-gradient(rgba(0, 255, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 0, 0.05) 1px, transparent 1px)",
      }),
      boxShadow: {
        terminal:
          "0 0 10px rgba(0, 255, 0, 0.5), 0 0 20px rgba(0, 255, 0, 0.3), 0 0 30px rgba(0, 255, 0, 0.1)",
        "terminal-amber":
          "0 0 10px rgba(255, 191, 0, 0.5), 0 0 20px rgba(255, 191, 0, 0.3), 0 0 30px rgba(255, 191, 0, 0.1)",
      },
      textShadow: {
        terminal: "0 0 5px rgba(0, 255, 0, 0.7)",
        "terminal-amber": "0 0 5px rgba(255, 191, 0, 0.7)",
      },
    },
    // Keep your existing theme extensions...
  },
  plugins: [],
};
