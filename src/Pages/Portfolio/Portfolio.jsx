import React, { useState } from "react";
// import Footer from "./Footer";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { allProjects } from "./allProjects";

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
	const [projectDeets, setProjectDeets] = useState(-1);
	const { ref, inView } = useInView({
		triggerOnce: true,
	});

	function handleClick(id) {
		setProjectDeets((prev) => (prev === -1 ? id : -1));
	}
	return (
		<div>
			<motion.div
				ref={ref}
				variants={page2Variant}
				initial="initial"
				animate={inView ? "animate" : "initial"}
				className="container mx-auto  max-w-xs  md:max-w-2xl lg:max-w-screen-lg py-10 xl:p-0 md:my-12 xl:my-32"
			>
				<h3 className="text-left font-poppins font-bold text-5xl mb-6 md:text-6xl xl:text-7xl md:mb-10">
					<span className="text-mainOrange">Projects Gallery</span>
				</h3>
				<p className="font-poppins text-primary text-lg md:text-xl xl:text-2xl leading-normal  lg:max-w-3xl xl:max-w-6xl">
					From Personal Projects to Professional work, this is a list
					of all that i have done.
				</p>

				<ul className="hidden space-x-8 md:visible md:flex justify-start md:mx-auto lg:max-w-2xl xl:max-w-none md:my-12 lg:my-20 font-poppins font-light lg:text-md">
					<li>
						<motion.button
							whileHover="hover"
							className="px-6 py-2 rounded-lg bg-gray-700 text-white"
						>
							All Projects
						</motion.button>
					</li>
					<li>
						<motion.button whileHover="hover" className="px-6 py-2 bg-gray-300 rounded-lg">
							Design
						</motion.button>
					</li>
					<li>
						<motion.button whileHover="hover" className="px-6 py-2 bg-gray-300 rounded-lg">
							Development
						</motion.button>
					</li>
					<li>
						<motion.button
							whileHover="hover"
							className="px-6 py-2 bg-gray-300 rounded-lg"
						>
							For Fun
						</motion.button>
					</li>
				</ul>
				<div className="space-y-8">
					<div className="mt-24 md:mt-0">
						<div className="w-full">
							<ul>
								{allProjects.map((project) => (
									<div className="group">
										<li
											key={project.id}
											onClick={() =>
												handleClick(project.id)
											}
											className="my-4 md:my-10 w-full items-center lg:items-start rounded-lg"
										>
											<h1
												className={`font-poppins text-gray-700 text-xl lg:text-4xl p-8 lg:p-16 hover:underline hover:underline-offset-4  decoration-4 hover:decoration-mainColor ${
													projectDeets ===
														project.id &&
													"underline underline-offset-4 decoration-4 decoration-mainColor"
												}`}
											>
												{project.name}
											</h1>
											<div
												className={`${
													project.thumbnail
												} w-full h-40 lg:h-96 shadow-mainBoxShadow `}
											></div>

											<div className="p-4">
												<a
													href={project.to}
													target="_blank"
													rel="noreferrer"
												>
													<p
														className={`text-blue-500 font-bold text-sm ${
															projectDeets ===
															project.id
																? "delay-200 opacity-1 "
																: "opacity-0 "
														}`}
													>
														(
														<code>
															Take a look!
														</code>
														)
													</p>
												</a>
											</div>
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

// ${
// 	projectDeets
// 		? "transition-all duration-300 h-156 "
// 		: "h-64 flex"
// }

// ${
// 	projectDeets
// 		? "transition-all duration-300 opacity-100 w-full h-48 "
// 		: "transition-all duration-300 opactiy-0 "
// }
