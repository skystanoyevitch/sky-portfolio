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
			<div className="bg-body">
				<motion.div
					ref={ref}
					variants={page2Variant}
					initial="initial"
					animate={inView ? "animate" : "initial"}
					className="container mx-auto md:max-w-2xl lg:max-w-screen-2xl p-8 md:p-16 lg:p-24 xl:my-24"
				>
					<h3 className=" text-center font-playFair text-3xl xl:text-7xl xl:mb-6">
						Project{" "}
						<span className="text-mainOrange font-bold">One</span>
					</h3>
					<p className="text-center font-poppins font-light text-gray-600 xl:text-2xl xl:tracking-wide leading-loose md:pb-16 xl:pb-32 xl:px-40">
						This was my Original Design for a Portfolio styled app
						that was Designed using the Bulma CSS framework and
						JavaScript, this concept was to create a mobile friendly
						website that was fast and simple.
					</p>
					<div className="xl:flex xl:flex-col xl:items-center text-center">
						<div>
							<h2 className="font-poppins font-bold text-2xl xl:pb-8">
								Minimal Design
							</h2>
						</div>
						<div className="w-3/4 h-120">
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
							<h2 className="font-poppins font-bold text-2xl xl:pb-8 xl:mt-24">
								Smooth Animations
							</h2>
						</div>
						<div className="w-3/4 h-120">
							<a
								href="https://rolypolie.github.io/skystanoyevitch/"
								target="_blank"
								rel="noreferrer"
								className=""
							>
								<div className="bg-this-is-sky bg-cover bg-center bg-no-repeat w-full h-full">
								</div>
							</a>
						</div>
						<div>
							<h2 className="font-poppins font-bold text-2xl xl:pb-8 xl:mt-24">
								Responsive
							</h2>
						</div>
						<div className="w-3/4 h-120">
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

{
	/* <li className="pb-4">Responsive</li>
								<li className="pb-4">Mobile First</li>
								<li className="">Minimalistic Design</li> */
}
