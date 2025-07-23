module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        serif: ["Georgia", "Cambria", "Times New Roman", "Times", "serif"],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
      colors: {
        primary: {
          DEFAULT: "#FFFFFF", // White background
          light: "#F9FAFB", // Off-white for cards, hover states
          dark: "#F3F4F6", // Light gray for borders, subtle shades
        },
        secondary: {
          DEFAULT: "#4B5563", // Dark gray for primary text (good contrast on white)
          light: "#6B7280", // Medium gray for secondary text
          dark: "#1F2937", // Very dark gray for headings (good contrast on white)
        },
        accent: {
          DEFAULT: "#3B82F6", // A calm blue for accents
          light: "#60A5FA", // Lighter blue
          dark: "#2563EB", // Darker blue
        },
        text: {
          DEFAULT: "#111827", // Near black for body text (strong contrast)
          secondary: "#374151", // Dark gray for less important text
          muted: "rgba(107, 114, 128, 0.8)", // Muted gray
        },
        terminal: {
          black: "#0c0c0c", // Terminal black background
          green: {
            DEFAULT: "#00ff00", // Bright terminal green
            dark: "#00cc00", // Darker terminal green
          },
        },
        border: "rgba(209, 213, 219, 0.7)", // Softer border color
      },
      boxShadow: {
        autumn: "0 4px 6px rgba(0, 0, 0, 0.1)",
        "autumn-lg": "0 10px 15px rgba(0, 0, 0, 0.1)",
      },
      borderRadius: {
        autumn: "10px",
      },
    },
  },
  plugins: [],
};
