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
			className="container mx-auto max-w-xs py-20 md:max-w-lg lg:max-w-none xl:p-0 lg:flex lg:p-24 xl:flex lg:items-center xl:py-44 lg:justify-evenly xl:h-2/3 space-y-20 xl:space-y-0"
		>
			<div className="xl:max-w-2xl xl:p-10 lg:flex-1">
				<h2 className="text-primary font-anton text-3xl md:text-4xl lg:text-5xl lg:pb-8">
					Who Am i?
				</h2>
				{/* <h3 className="pt-4 lg:pb-10 pb-4 text-2xl md:text-3xl font-robotoThin font-extrabold text-paragraph">
					Name:{" "}
					<span className="font-anton tracking-widest italic text-primary">
						{" "}
						Sky{" "}
					</span>{" "}
				</h3> */}
				{/* <p >
					I'm a Freelance Web Developer | Designer living in the sunny
					side of San Diego,CA. Weather it is a Website for Personal
					Branding or a Website for your Company, i aim to help build
					an Experience that you and your customers will love.
				</p> */}
				<ul className="text-2xl font-normal xl:text-3xl xl:w-max">
					<li>
						Name:{" "}
						<span className="font-anton text-primary">Sky</span>
					</li>
					<li>Occupation: Freelance Web Developer | Designer</li>
					<li>Current Living: San Diego,CA</li>
					<li>
						My Passion: Building Experiences that my Customers will
						Love
					</li>
				</ul>
			</div>
			<div className="xl:max-w-3xl w-full xl:pl-52 lg:flex-1">
				<div
					className="w-full bg-profileImage bg-cover bg-no-repeat bg-center rounded-full shadow-lg border-2"
					style={{
						height: "30rem",
					}}
				></div>
			</div>
		</motion.section>
	);
}

export default About;
