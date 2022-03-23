import { toBeVisible } from "@testing-library/jest-dom/dist/matchers";
import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";

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

const buttonVarant = {
	hover: {
		backgroundColor: "#233D4D",
		color: "white",
		transition: {
			duration: 0.1,
		},
	},
};
const divVariant = {
	hover: {
		scale: 1,
		transition: {
			duration: 0.3,
		},
	},
	tap: { scale: 0.9 },
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
				<h1 className="text-center font-playFair font-regular text-5xl lg:text-6xl xl:text-7xl mb-12 xl:mb-32">
					Portfolio
				</h1>
				<ul className="hidden md:visible md:flex justify-evenly md:mx-auto lg: max-w-2xl xl:max-w-none md:my-12 lg:my-20 font-poppins font-light lg:text-xl">
					<li>
						<motion.button
							variants={buttonVarant}
							whileHover="hover"
							className="md:py-1 md:px-4 lg:py-2 lg:px-6 xl:py-2 xl:px-8 rounded-full bg-primaryBtn text-white "
						>
							All Projects
						</motion.button>
					</li>
					<li>
						<motion.button
							variants={buttonVarant}
							whileHover="hover"
							className="md:py-1 md:px-4 lg:py-2 lg:px-6 rounded-full border border-black"
						>
							Design
						</motion.button>
					</li>
					<li>
						<motion.button
							variants={buttonVarant}
							whileHover="hover"
							className="md:py-1 md:px-4 lg:py-2 lg:px-6 rounded-full border border-black"
						>
							Development
						</motion.button>
					</li>
					<li>
						<motion.button
							variants={buttonVarant}
							whileHover="hover"
							className="md:py-1 md:px-4 lg:py-2 lg:px-6 rounded-full border border-black"
						>
							For Fun
						</motion.button>
					</li>
				</ul>

				<div className="grid grid-cols-1 grid-rows-4 gap-y-2 lg:grid lg:grid-cols-3 lg:grid-row-2 lg:gap-x-2 lg:gap-y-3">
					<div className="lg:col-span-2 h-96 bg-skyCafe bg-cover bg-no-repeat rounded-md"></div>
					<NavLink to={"/Showcase"} className="group">
						<div className="group-hover:scale-y-50 relative bg-this-is-sky bg-cover bg-center bg-no-repeat w-full h-full rounded-md">
							<div className="bg-opacity-0 group-hover:bg-opacity-80 bg-black w-full h-full">
								<div className="text-opacity-0 group-hover:text-opacity-100 absolute top-1/2 w-full h-full text-white text-center font-poppins font-extrabold text-4xl">
									Project One
								</div>
							</div>
						</div>
					</NavLink>
					<div className="lg:row-span-2 bg-cover bg-center bg-no-repeat h-full bg-placeholder1 rounded-md"></div>
					<div className="bg-cover bg-center bg-no-repeat h-full bg-placeholder2 rounded-md"></div>
					<div className="bg-cover bg-center bg-no-repeat h-full bg-placeholder3 rounded-md"></div>
					<div className="bg-cover bg-center bg-no-repeat h-full bg-placeholder4 rounded-md"></div>
					{/* <div className="border-2 border-black h-96"></div>
					<div className="border-2 border-black h-96"></div> */}
				</div>
			</div>
		</motion.section>
	);
}

export default About;
