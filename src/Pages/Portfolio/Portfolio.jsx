import React from "react";
// import Footer from "./Footer";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { allProjects } from "./allProjects";
console.log(allProjects[0]);

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
					<span className="text-mainOrange">Projects</span>
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
				<div className="space-y-4">
					<div className="flex flex-col items-center mt-24 md:mt-0">
						<div className="w-full xl:w-3/4">
							<ul>
								{allProjects.map((name, i) => (
									<a
										href={name.to}
										target="_blank"
										rel="noreferrer"
									>
										<li
											key={i}
											className="m-4 md:my-10 border-gray-700 border-t-2 border-b-2 hover:border-t-btnOrange hover:border-b-btnOrange w-full h-28 lg:h-full lg:p-16 lg:text-5xl font-poppins font-bold text-gray-700 flex items-center"
										>
											{name.name}
										</li>
									</a>
								))}
							</ul>
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
}

export default Portfolio;
