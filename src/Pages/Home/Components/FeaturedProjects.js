import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import Arrows from "../../../icons/Arrows";

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

function FeaturedProjects() {
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
				<h1 className="relative text-gray-700 md:text-center font-poppins font-bold text-3xl md:text-4xl mb-12 xl:mb-32">
					Featured Projects
					<div className="absolute xl:right-40 xl:top-6 md:rotate-45 xl:h-10 xl:w-40 lg:right-28 lg:top-6 lg:h-10 lg:w-28 md:right-6 md:top-6 md:h-10 md:w-16 right-6 top-10 rotate-90 h-10 w-12">
						<Arrows />
					</div>
					
				</h1>

				<div className="grid grid-rows-2 gap-y-20">
					<motion.div className="relative">
						<a
							href="https://traveling-pal.netlify.app/"
							target="_blank"
							rel="noreferrer"
						>
							<h2 className="font-poppins lg:text-3xl font-semibold text-gray-700 pb-2 md:pb-4">
								Travel Pal
							</h2>
							<div className="relative rounded-lg overflow-hidden h-60 lg:h-96 z-20 shadow-mainBoxShadow">
								<div className="absolute hover:scale-110 transition-all duration-500 ease-in-out transform w-full bg-travelpal bg-cover bg-center bg-no-repeat h-60 lg:h-96"></div>
							</div>
						</a>
					</motion.div>

					<motion.div className="relative group">
						<a
							href="https://teknipak.com/"
							target="_blank"
							rel="noreferrer"
							className=""
						>
							<h2 className="font-poppins lg:text-3xl font-semibold text-gray-700 pb-2 md:pb-4">
								Teknipak
							</h2>
							<div className="relative rounded-lg overflow-hidden h-60 lg:h-96 z-20 shadow-mainBoxShadow">
								<div className="absolute hover:scale-110 transition-all duration-500 ease-in-out transform h-full w-full bg-teknipak bg-center bg-cover bg-no-repeat"></div>
							</div>
						</a>
					</motion.div>
				</div>
			</div>
		</motion.section>
	);
}

export default FeaturedProjects;
