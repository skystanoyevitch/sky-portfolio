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
			duration: 0.3,
		},
	},
};
const cardVariant = {
	hover: {
		scale: 1.01,
		// zIndex: 1,
		// boxShadow: "13px 13px 0px 0px rgba(0,0,0,0.2)",
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
				<h1 className="text-gray-700 text-center font-bebas text-5xl lg:text-6xl xl:text-7xl mb-12 xl:mb-32">
					<span className="text-mainOrange">F</span>eatured Projects
				</h1>

				<div className="grid grid-rows-2 gap-y-20">
					<motion.div whileHover="hover" variants={cardVariant}>
						<a
							href="https://rolypolie.github.io/SkysCafe/"
							target="_blank"
							rel="noreferrer"
						>
							<h2 className="font-poppins lg:text-4xl font-bold text-gray-700 pb-2 md:pb-4"> <span className="inline-block h-2 w-2 md:h-6 md:w-6 bg-mainOrange rounded-full mr-4"></span>Coffee Shop</h2>
							<div className="bg-skyCoffee bg-cover bg-center bg-no-repeat font-bold h-60 lg:h-96 border-4 border-gray-700 shadow-mainBoxShadow hover:shadow-shadowOrange"></div>
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
							className=""
						>
							<h2 className="font-poppins lg:text-4xl font-bold text-gray-700 pb-2 md:pb-4"><span className="inline-block h-2 w-2 md:h-6 md:w-6 bg-mainOrange rounded-full mr-4"></span>Teknipak: E-commerce</h2>
							<div className="h-60 lg:h-96 bg-teknipak bg-center bg-cover bg-no-repeat border-4 border-gray-700 shadow-mainBoxShadow hover:shadow-shadowOrange"></div>
						</a>
					</motion.div>
				</div>
			</div>
		</motion.section>
	);
}

export default FeaturedProjects;
