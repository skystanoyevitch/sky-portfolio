module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				poppins: ['"Poppins"', "sans-serif"],
				playFair: ['"Playfair Display"', "serif"],
			},
			backgroundImage: (theme) => ({
				profileImage: "url('./images/mainpicsky.jpg')",
				skyCafe: "url('./images/project2snap(1).png')",
				"this-is-sky": "url('./images/project1snap(1).png')",
				comingSoon: "url('./images/comingsoonsnap.jpg')",
			}),
			spacing: {
				72: "18rem",
				84: "21rem",
				96: "24rem",
				108: "27rem",
				120: "30rem",
				132: "33rem",
				144: "36rem",
			},
			width: {
				108: "27rem",
				120: "30rem",
				132: "33rem",
				144: "36rem",
				156: "39rem",
			},
		},
		divideColor: (theme) => ({
			...theme("borderColors"),
			primary: "#114B5F",
			secondary: "#E8F1F2",
			danger: "#e3342f",
		}),
		backgroundColor: (theme) => ({
			...theme("colors"),
			mainOrange: "#FF5722",
			secondaryBtn: "#E8F1F2",
			primaryBtn: "#233D4D",
			body: "#FFFBFC",
			primaryNav: "#E8F1F2",
		}),
		textColor: (theme) => ({
			...theme("colors"),
			mainOrange: "#FF5722",
			primary: "#114B5F",
			secondary: "#E8F1F2",
			paragraph: "#4A5255",
		}),
		borderColor: (theme) => ({
			...theme("colors"),
			buttonBG: "#FFC0AD",
			DEFAULT: theme("colors.gray.300", "currentColor"),
			primary: "#114B5F",
		}),
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
