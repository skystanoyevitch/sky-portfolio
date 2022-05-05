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
		<div className="">
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
							className="px-6 py-2 decoration-mainColor"
						>
							All Projects
						</motion.button>
					</li>
					<li>
						<motion.button
							whileHover="hover"
							className="px-6 py-2 decoration-mainColor"
						>
							Design
						</motion.button>
					</li>
					<li>
						<motion.button
							whileHover="hover"
							className="px-6 py-2 decoration-mainColor"
						>
							Development
						</motion.button>
					</li>
					<li>
						<motion.button
							whileHover="hover"
							className="px-6 py-2 decoration-mainColor"
						>
							For Fun
						</motion.button>
					</li>
				</ul>
				<div className="space-y-4">
					<div className="mt-24 md:mt-0">
						<div className="w-full">
							<ul>
								{allProjects.map((project, i) => (
									<div className="group">
										<li
											key={i}
											className="hover:transition-all hover:duration-300 my-4 md:my-10 w-full h-64 border-b-2 lg:hover:h-156 flex items-center lg:items-start lg:flex-col"
										>
											<a
												href={project.to}
												target="_blank"
												rel="noreferrer"
												className=""
											>
												<h1 className="font-poppins font-bold text-gray-700 lg:text-4xl p-8 lg:p-16 hover:scale-200 hover:underline hover:underline-offset-4  decoration-4 hover:decoration-mainColor">
													{project.name}
												</h1>
											</a>
											<div
												className={`${project.thumbnail} lg:h-full lg:w-full shadow-mainBoxShadow opacity-0 group-hover:opacity-100 group-hover:transition-all`}
											></div>
										</li>
									</div>
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
