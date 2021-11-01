import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

const showcaseVariant = {
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

const MainShowcase = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
	});
	return (
		<>
			<section className="w-full xl:h-3/5 bg-secondary">
				<motion.div
					ref={ref}
					variants={showcaseVariant}
					initial="initial"
					animate={inView ? "animate" : "initial"}
					className="mx-auto"
				>
					<h1 className="text-center font-anton text-4xl md:text-5xl p-8 tracking-widest text-primary">
						SHOWCASE
					</h1>

					<div className="container mx-auto flex flex-col pb-10 space-y-16 md:max-w-l lg:max-w-none xl:space-y-0 w-full px-8 md:px-0 lg:p-24 xl:px-0 xl:py-14 xl:flex xl:flex-row xl:justify-evenly xl:place-items-center">
						<a
							href="https://rolypolie.github.io/skystanoyevitch/"
							target="_blank"
							rel="noreferrer"
						>
							<div className="w-full xl:w-144 h-36 md:h-80 xl:h-96 bg-this-is-sky bg-cover bg-no-repeat shadow-md rounded-xl"></div>
						</a>

						<a
							href="https://rolypolie.github.io/SkysCafe/"
							target="_blank"
							rel="noreferrer"
						>
							<div className="w-full xl:w-144 h-36 md:h-80 xl:h-96 bg-skyCafe bg-cover bg-no-repeat shadow-md rounded-xl"></div>
						</a>

						<div className="w-full xl:w-144 h-36 md:h-80 xl:h-96 bg-comingSoon bg-cover bg-no-repeat shadow-md rounded-xl"></div>
					</div>
				</motion.div>
			</section>
		</>
	);
};

export default MainShowcase;
