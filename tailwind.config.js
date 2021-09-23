module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				rockSalt: ['"Rock Salt"', "cursive"],
				robotoThin: ['"Roboto"', "sans-serif"],
			},
			backgroundImage: (theme) => ({
				"coming-soon": "url('./images/coming-soon.jpg')",
				"gradient-BG": "url('./images/cool-background.png')",
				"profileImage": "url('./images/profilephoto2.jpg')",
				"skyCafe": "url('./images/skycafe.png')",
				"this-is-sky": "url('./images/This-is-Sky-.png')",
				"oceanBg": "url('./images/ocean_sd.jpg')",
				"heroImage": "url('./images/hero-carlsbad.jpg')",
				"aboutDesign": "url('./images/about-design.jpg')",
			}),
		},
		backgroundColor: (theme) => ({
			...theme("colors"),
			"secondary": "#E8F1F2",
      "primary": "#114B5F"
		}),
		textColor: {
			primary: "#114B5F",
			secondary: "#E8F1F2",
			paragraph: "#4A5255",
		},
		borderColor: (theme) => ({
			DEFAULT: theme("colors.gray.300", "currentColor"),
			primary: "#114B5F",
		}),
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
