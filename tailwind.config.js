module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Comfortaa",
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        display: [
          "Pacifico",
          "cursive",
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
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
        // San Diego coastal-inspired minimal palette
        background: {
          DEFAULT: "#FAFBFC", // Soft morning sky
          secondary: "#F8F9FA", // Light cloud
          tertiary: "#F1F3F5", // Subtle variation
        },
        surface: {
          DEFAULT: "#FFFFFF", // Pure white like sand
          elevated: "#F8F9FB", // Elevated surface
          hover: "#F1F4F7", // Gentle hover state
        },
        text: {
          primary: "#1A2332", // Deep ocean blue-grey
          secondary: "#3B4A5C", // Medium ocean tone
          muted: "#6B7785", // Soft grey like morning mist
          dim: "#8B95A3", // Very light grey
        },
        accent: {
          DEFAULT: "#0EA5E9", // San Diego bay blue
          secondary: "#0284C7", // Deeper ocean blue
          muted: "#7DD3FC", // Light sky blue
          warm: "#F59E0B", // Sunset amber
          coral: "#F97316", // Sunset coral
        },
        border: {
          DEFAULT: "rgba(203, 213, 225, 0.3)", // Soft border
          hover: "rgba(148, 163, 184, 0.4)", // Hover border
        },
        // San Diego signature colors
        sandiego: {
          ocean: "#0EA5E9", // Pacific blue
          sand: "#FEF3C7", // Beach sand
          sunset: "#F59E0B", // Golden hour
          coral: "#F97316", // Sunset coral
          sage: "#84CC16", // Coastal sage
          mist: "#E2E8F0", // Morning marine layer
        },
        // Dark mode colors with proper contrast ratios
        dark: {
          background: {
            DEFAULT: "#0F172A", // Deep ocean night
            secondary: "#1E293B", // Darker slate
            tertiary: "#334155", // Medium slate
          },
          surface: {
            DEFAULT: "#1E293B", // Dark surface
            elevated: "#334155", // Elevated dark surface
            hover: "#475569", // Hover dark surface
          },
          text: {
            primary: "#F8FAFC", // High contrast white
            secondary: "#CBD5E1", // Medium contrast
            muted: "#94A3B8", // Lower contrast
            dim: "#64748B", // Dim text
          },
          border: {
            DEFAULT: "rgba(71, 85, 105, 0.3)", // Dark border
            hover: "rgba(100, 116, 139, 0.4)", // Dark hover border
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-ocean": "linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)",
        "gradient-sunset": "linear-gradient(135deg, #F59E0B 0%, #F97316 100%)",
        "gradient-coastal":
          "linear-gradient(135deg, #0EA5E9 0%, #7DD3FC 50%, #FEF3C7 100%)",
        "gradient-mist": "linear-gradient(180deg, #FAFBFC 0%, #F8F9FA 100%)",
        // Dark mode gradients
        "gradient-dark-mist":
          "linear-gradient(180deg, #0F172A 0%, #1E293B 100%)",
        "gradient-dark-coastal":
          "linear-gradient(135deg, #0EA5E9 0%, #334155 100%)",
      },
      boxShadow: {
        subtle:
          "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)",
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
        hover:
          "0 8px 25px -5px rgba(14, 165, 233, 0.08), 0 4px 10px -6px rgba(14, 165, 233, 0.05)",
        ocean: "0 10px 30px -10px rgba(14, 165, 233, 0.2)",
        sunset: "0 10px 30px -10px rgba(245, 158, 11, 0.2)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      backdropBlur: {
        xs: "2px",
        "4xl": "72px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "slide-up": "slideUp 0.4s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      screens: {
        xs: "475px",
        "3xl": "1600px",
        "4xl": "1920px",
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
        144: "36rem",
      },
      transitionDuration: {
        400: "400ms",
        600: "600ms",
        800: "800ms",
        1200: "1200ms",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
        "out-circ": "cubic-bezier(0.08, 0.82, 0.17, 1)",
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "in-out-back": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
    },
  },
  plugins: [],
};
