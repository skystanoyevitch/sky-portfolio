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
			<div className="lg:flex-1">
				<h2 className="text-primary font-anton text-4xl md:text-5xl lg:text-6xl pb-8">
					Who Am i?
				</h2>
				<ul className="text-2xl font-normal xl:text-3xl xl:w-max xl:flex xl:flex-col xl:space-y-8">
					<li>
						Name 🧑🏻 -{" "}
						<span className="font-anton text-primary">Sky</span>
					</li>
					<li>Occupation 👨🏻‍💻 - Freelance Web Developer | Designer</li>
					<li>Current Living 🌎 - San Diego,CA</li>
					<li>My Passion 🙂 - Building Experiences</li>
				</ul>
			</div>
			<div className="flex justify-center xl:max-w-3xl xl:pl-52 lg:flex-1">
				<div
					className="bg-profileImage bg-cover bg-no-repeat bg-center rounded-full shadow-lg border-2 w-60 h-60 md:w-80 md:h-80 xl:w-120 xl:h-120"
				></div>
			</div>
		</motion.section>
	);
}

export default About;
