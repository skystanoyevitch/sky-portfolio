import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

const aboutSectionVariant = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			duration: 1,
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
							className="md:py-1 md:px-4 lg:py-2 lg:px-6 xl:py-3 xl:px-8 rounded-full bg-primaryBtn text-white "
						>
							All Projects
						</motion.button>
					</li>
					<li>
						<motion.button
							variants={buttonVarant}
							whileHover="hover"
							className="md:py-1 md:px-4 lg:py-2 lg:px-6 rounded-full bg-secondaryBtn"
						>
							Design
						</motion.button>
					</li>
					<li>
						<motion.button
							variants={buttonVarant}
							whileHover="hover"
							className="md:py-1 md:px-4 lg:py-2 lg:px-6 rounded-full bg-secondaryBtn"
						>
							Development
						</motion.button>
					</li>
					<li>
						<motion.button
							variants={buttonVarant}
							whileHover="hover"
							className="md:py-1 md:px-4 lg:py-2 lg:px-6 rounded-full bg-secondaryBtn"
						>
							For Fun
						</motion.button>
					</li>
				</ul>

				<div className="grid grid-cols-1 grid-rows-2 gap-y-2 lg:grid lg:grid-cols-3 lg:grid-row-2 lg:gap-x-2 lg:gap-y-3">
					<div className="lg:col-span-2 h-96 bg-skyCafe bg-cover bg-no-repeat"></div>
					<div className="bg-this-is-sky bg-cover bg-center bg-no-repeat h-full"></div>
					<div className="border-2 border-black h-96"></div>
					<div className="border-2 border-black h-96"></div>
					<div className="border-2 border-black h-96"></div>
					<div className="border-2 border-black h-96"></div>
					<div className="border-2 border-black h-96"></div>
					<div className="border-2 border-black h-96"></div>
				</div>
			</div>
		</motion.section>
	);
}

export default About;
