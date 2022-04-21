import React from "react";
// import Footer from "./Footer";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const page2Variant = {
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

function Portfolio() {
	const { ref, inView } = useInView({
		triggerOnce: true,
	});
	return (
			<div className="md:h-screen">
				<motion.div
					ref={ref}
					variants={page2Variant}
					initial="initial"
					animate={inView ? "animate" : "initial"}
					className="container mx-auto md:max-w-2xl lg:max-w-screen-2xl py-10 px-8 xl:p-0 md:my-12 xl:my-32"
				>
					<h3 className="text-center font-bebas text-5xl mb-6 md:text-6xl xl:text-7xl md:mb-10">
						<span className="text-mainOrange">
							Portfolio
						</span>
					</h3>

					<ul className="hidden md:visible md:flex justify-evenly md:mx-auto lg: max-w-2xl xl:max-w-none md:my-12 lg:my-20 font-poppins lg:text-xl">
						<li>
							<motion.button
								whileHover="hover"
								className="px-6 py-2 hover:underline underline-offset-4  decoration-4 decoration-mainColor"
							>
								All Projects
							</motion.button>
						</li>
						<li>
							<motion.button
								whileHover="hover"
								className="px-6 py-2  hover:underline underline-offset-4 decoration-4 decoration-mainColor"
							>
								Design
							</motion.button>
						</li>
						<li>
							<motion.button
								whileHover="hover"
								className="px-6 py-2  hover:underline underline-offset-4 decoration-4 decoration-mainColor"
							>
								Development
							</motion.button>
						</li>
						<li>
							<motion.button
								whileHover="hover"
								className="px-6 py-2  hover:underline underline-offset-4 decoration-4 decoration-mainColor"
							>
								For Fun
							</motion.button>
						</li>
					</ul>
					<div className="flex flex-col items-center mt-24 md:mt-0 md:text-center">
						<div className="w-full xl:w-3/4 h-60">
							<a
								href="https://rolypolie.github.io/skystanoyevitch/"
								target="_blank"
								rel="noreferrer"
								className=""
							>
								<div className="bg-this-is-sky bg-cover bg-center bg-no-repeat w-full h-full shadow-mainBoxShadow hover:shadow-shadowOrange"></div>
							</a>
						</div>
					</div>
				</motion.div>
			</div>
	);
}

export default Portfolio;
