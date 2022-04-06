// import { toBeVisible } from "@testing-library/jest-dom/dist/matchers";
import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
// import { NavLink } from "react-router-dom";

const aboutSectionVariant = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			duration: 0.3,
		},
	},
};

const buttonVariant = {
	hover: {
		backgroundColor: "#FF5722",
		color: "white",
	},
};
// const divVariant = {
// 	hover: {
// 		scale: 1,
// 		transition: {
// 			duration: 0.3,
// 		},
// 	},
// 	tap: { scale: 0.9 },
// };

const cardVariant = {
	hover: {
		scale: 1.01,
		zIndex: 1,
		boxShadow: "13px 13px 0px 0px rgba(0,0,0,0.2)",
	},
};

function About() {
	const { ref, inView } = useInView({
		triggerOnce: true,
	});
	return (
		<motion.section
			ref={ref}
			variants={aboutSectionVariant}
			initial="initial"
			animate={inView ? "animate" : "initial"}
			className="container mx-auto max-w-xs py-20 md:max-w-lg xl:p-0 xl:flex lg:max-w-5xl lg:flex lg:p-24 lg:items-center xl:py-44 lg:justify-evenly space-y-20 xl:space-y-0"
		>
			<div className="container mx-auto">
				<h1 className="text-primary text-center font-playFair font-regular text-5xl lg:text-6xl xl:text-7xl mb-12 xl:mb-32">
					<span className="font-bold text-mainOrange">P</span>ortfolio
				</h1>
				<ul className="hidden md:visible md:flex justify-evenly md:mx-auto lg: max-w-2xl xl:max-w-none md:my-12 lg:my-20 font-poppins font-light lg:text-xl">
					<li>
						<motion.button
							variants={buttonVariant}
							whileHover="hover"
							className="px-6 py-2 bg-mainOrange text-white"
						>
							All Projects
						</motion.button>
					</li>
					<li>
						<motion.button
							variants={buttonVariant}
							whileHover="hover"
							className="px-6 py-2 bg-white"
						>
							Design
						</motion.button>
					</li>
					<li>
						<motion.button
							variants={buttonVariant}
							whileHover="hover"
							className="px-6 py-2 bg-white"
						>
							Development
						</motion.button>
					</li>
					<li>
						<motion.button
							variants={buttonVariant}
							whileHover="hover"
							className="px-6 py-2 bg-white"
						>
							For Fun
						</motion.button>
					</li>
				</ul>

				<div className="grid grid-rows-2 gap-y-10">
					<motion.div whileHover="hover" variants={cardVariant}>
						<a
							href="https://rolypolie.github.io/SkysCafe/"
							target="_blank"
							rel="noreferrer"
						>
							<div className="h-96 bg-skyCafe bg-cover bg-no-repeat"></div>
						</a>
					</motion.div>

					<motion.div
						whileHover="hover"
						variants={cardVariant}
						className="group"
					>
						<a
							href="https://teknipak.com/"
							target="_blank"
							rel="noreferrer"
						>
							<div className="relative bg-teknipak bg-center bg-cover bg-no-repeat w-full h-full"></div>
						</a>
					</motion.div>

					{/* <div className="bg-cover bg-center bg-no-repeat h-full bg-placeholder1"></div>
					<div className="bg-cover bg-center bg-no-repeat h-full bg-placeholder2"></div>
					<div className="bg-cover bg-center bg-no-repeat h-full bg-placeholder3"></div>
					<div className="bg-cover bg-center bg-no-repeat h-full bg-placeholder4"></div> */}
					{/* <div className="border-2 border-black h-96"></div>
					<div className="border-2 border-black h-96"></div> */}
				</div>
			</div>
		</motion.section>
	);
}

export default About;
