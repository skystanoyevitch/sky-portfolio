import React from "react";
import { Link } from "react-router-dom";
import { motion, useViewportScroll } from "framer-motion";

function Hero() {
	// const { scrollYProgress } = useViewportScroll();
	return (
		<div className="h-2/4">
			<div className="bg-cover bg-primary h-full">
				<div className="w-full h-full flex place-items-center justify-center">
					<div className="flex flex-col text-secondary text-center">
						<h1 className="text-7xl md:text-7xl xl:text-9xl font-anton xl:tracking-wider">
							WELCOME
						</h1>
						<p
							className="text-xl md:text-xl xl:text-2xl"
							style={{
								textShadow: "-2px 2px 6px rgba(0, 0, 0, 0.31)",
							}}
						>
							to my Personal Website
						</p>
						<Link to="/Showcase">
							<motion.button
								whileHover={{ scale: 1.4 , boxShadow: "5px 5px 0 rgba(0, 0, 0, 0.2)" }}
								className="py-1 px-2 lg:px-4 lg:py-2 font-semibold text-md xl:text-xl xl:w-30 mt-4 xl:mt-6 rounded-lg"
								style={{ background: "#B02E0C" }}
							>
								SEE MY WORK
							</motion.button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
