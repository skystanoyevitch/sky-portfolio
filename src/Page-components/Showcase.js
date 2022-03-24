import React from "react";
import Footer from "./Footer";
// import Nav from "./Nav";
// import ShowcaseHero from "./Micro-components/ShowcaseHero";
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

function Showcase() {
	const { ref, inView } = useInView({
		triggerOnce: true,
	});
	return (
		<div className="">
			{/* <ShowcaseHero /> */}
			<div className="bg">
				<motion.div
					ref={ref}
					variants={page2Variant}
					initial="initial"
					animate={inView ? "animate" : "initial"}
					className="container mx-auto md:max-w-2xl lg:max-w-screen-2xl py-10 px-8 xl:p-0 md:my-12 xl:my-24"
				>
					<h3 className="text-center font-playFair text-4xl mb-6 md:text-6xl xl:text-7xl md:mb-10">
						Project{" "}
						<span className="text-mainOrange font-bold">One</span>
					</h3>
					<p className="md:text-center font-poppins text-xl leading-7 text-gray-700 xl:text-3xl xl:tracking-wide xl:leading-snug md:mt-4 md:px-10 md:pb-16 xl:pb-32 xl:px-40">
						This was my Original Design for a Portfolio styled app
						that was Designed using the Bulma CSS framework and
						JavaScript, this concept was to create a mobile friendly
						website that was fast and simple.
					</p>
					<div className="flex flex-col items-center mt-24 md:mt-0 md:text-center">
						<div>
							<h2 className="font-poppins font-light text-2xl pb-4 text-gray-700">
								Minimal Design
							</h2>
						</div>
						<div className="w-full xl:w-3/4 h-120">
							<a
								href="https://rolypolie.github.io/skystanoyevitch/"
								target="_blank"
								rel="noreferrer"
								className=""
							>
								<div className="bg-this-is-sky bg-cover bg-center bg-no-repeat w-full h-full"></div>
							</a>
						</div>
						<div>
							<h2 className="font-poppins font-light text-gray-700 text-2xl pb-4 mt-24">
								Smooth Animations
							</h2>
						</div>
						<div className="w-full xl:w-3/4 h-120">
							<a
								href="https://rolypolie.github.io/skystanoyevitch/"
								target="_blank"
								rel="noreferrer"
								className=""
							>
								<div className="bg-this-is-sky bg-cover bg-center bg-no-repeat w-full h-full"></div>
							</a>
						</div>
						<div>
							<h2 className="font-poppins font-light text-gray-700 text-2xl pb-4 mt-24">
								Responsive
							</h2>
						</div>
						<div className="w-full xl:w-3/4 h-120">
							<a
								href="https://rolypolie.github.io/skystanoyevitch/"
								target="_blank"
								rel="noreferrer"
								className=""
							>
								<div className="bg-this-is-sky bg-cover bg-center bg-no-repeat w-full h-full"></div>
							</a>
						</div>
					</div>
				</motion.div>
			</div>
			<Footer />
		</div>
	);
}

export default Showcase;
