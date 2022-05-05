module.exports = {
	content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['"Poppins"', "sans-serif"],
				bebas: ['"Bebas Neue"', "cursive"],
				caveat: ['"Caveat"', "cursive"],
			},
			backgroundImage: (theme) => ({
				profileImage: "url('./images/mainpicsky.jpg')",
				travelpal: "url('./images/travelpal.png')",
				teknipak: "url('./images/teknipak.png')",
				skycafe: "url('./images/skyscoffee.png')",
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
			height: {
				108: "27rem",
				120: "30rem",
				132: "33rem",
				144: "36rem",
				156: "39rem",
			},
			boxShadow: {
				mainBoxShadow:
					"2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),12.5px 12.5px 10px rgba(0, 0, 0, 0.035),22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),100px 100px 80px rgba(0, 0, 0, 0.07)",
				shadowOrange: "7px 7px 0 rgba(255, 87, 34, 1)",
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
			body: "#E8F1F2",
			primaryNav: "#E8F1F2",
		}),
		textColor: (theme) => ({
			...theme("colors"),
			mainOrange: "#FF5722",
			primary: "#222222",
			secondary: "#E8F1F2",
			paragraph: "#4A5255",
		}),
		borderColor: (theme) => ({
			...theme("colors"),
			btnOrange: "#FF5722",
			buttonBG: "#FFC0AD",
			DEFAULT: theme("colors.gray.300", "currentColor"),
			primary: "#114B5F",
		}),
		textDecorationColor: (theme) => ({
			...theme("colors"),
			mainColor: "#FF5722",
		}),
	},
	plugins: [],
};
