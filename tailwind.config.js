module.exports = {
	content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['"Poppins"', "sans-serif"],
				bebas: ['"Bebas Neue"', "cursive"],
				caveat: ['"Caveat"', "cursive"],
				sriracha: ['"Sriracha"', "cursive"],
			},
			backgroundImage: (theme) => ({
				logo: "url('./images/mwd-logo.png')",
				ptpImg: "url('./images/ptp-mockup.png')",
				teknipak: "url('./images/teknipak.png')",
				codeImg: "url('./images/codeImg.jpg')",
				relaxedDesign: "url('./images/relaxed-design.jpg')",
				robotShop: "url('./images/robotshop.png')",
				heroImg: "url('./images/webdev.svg')",
				jobBoardBg: "url('./images/jobboard.png')",
				websiteIcon: "url('./images/website.svg')",
				creativeTeamIcon: "url('./images/creative-team.svg')",
				wordpressIcon: "url('./images/wordpress-icon.svg')",
				techJobs: "url('./images/techjobs.png')",
				profileImg: "url('./images/mainpicsky.jpg')",
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
				shadowGray: "5px 5px 0 rgba(55, 65, 81, 1)",
				shadowNeo: "9px 9px 18px #c5c5c5, -1px -1px 18px #0000",
			},
			animation: {
				text: "text 5s ease infinite",
			},
			keyframes: {
				text: {
					"0%, 100%": {
						"background-size": "200% 200%",
						"background-position": "200% right",
					},
					"50%": {
						"background-size": "200% 200%",
						"background-position": "200% center",
					},
				},
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
