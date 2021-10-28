import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import ShowcaseHero from "./Micro-components/ShowcaseHero";
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
		<div className="w-screen h-screen">
			<Nav />
			<ShowcaseHero />
			<div className="w-full xl:h-full bg-secondary">
				<motion.div
					ref={ref}
					variants={page2Variant}
					initial="initial"
					animate={inView ? "animate" : "initial"}
					className="container mx-auto md:max-w-2xl lg:max-w-screen-2xl p-8 md:p-16 lg:p-24 xl:py-20 md:space-y-20"
				>
					<div className="w-full grid grid-rows-2 lg:grid-rows-none lg:grid lg:grid-cols-2 lg:gap-10 lg:justify-center lg:items-center">
						<div>
							<h3 className="font-anton text-3xl xl:text-5xl mb-6">
								Project One
							</h3>
							<p className="text-md xl:text-2xl font-robotoThin tracking-wide leading-relaxed">
								This was my Original Design for a Portfolio
								styled app that was Designed using the Bulma CSS
								framework and JavaScript, this concept was to
								create a mobile friendly website that was fast
								and simple. <br />
								This Webapp has:
							</p>
							<ul className="text-xl xl:text-2xl italic tracking-wider py-4">
								<li className="pb-4">Smooth Animations</li>
								<li className="pb-4">Responsive</li>
								<li className="pb-4">Mobile First</li>
								<li className="">Minimalistic Design</li>
							</ul>
						</div>
						<a
							href="https://rolypolie.github.io/skystanoyevitch/"
							target="_blank"
							rel="noreferrer"
							className="w-full h-1/2 md:h-full transform transition duration-300 hover:scale-110"
						>
							<div className="bg-this-is-sky bg-cover bg-center bg-no-repeat h-full rounded-lg"></div>
						</a>
					</div>

					<div className="grid grid-rows-2 lg:grid-rows-none lg:grid-cols-2 lg:gap-10 pt-10 lg:pt-24 xl:pt-40 lg:justify-center lg:items-center">
						<div>
							<h3 className="font-anton text-3xl xl:text-5xl mb-6">
								Cafe Lounge
							</h3>
							<p className="text-md xl:text-2xl font-robotoThin tracking-wide leading-relaxed overflow-ellipsis">
								This Concept was Designed from the Ground up,
								Inspired by my Love for all things coffee and
								coffe culture. I wanted to bring the Cafe shope
								Vibes to the digital world while keeping
								functionality and usability as vibrant as the
								flavors of the beans are. <br />
								This website was built on these Concepts:
							</p>
							<ul className="text-xl xl:text-2xl font-Open-Sans italic tracking-wider py-4">
								<li className="pb-4">Aesthetic Design</li>
								<li className="pb-4">Mobile Resposiveness</li>
								<li className="pb-4">Clean feel</li>
								<li className="">User Friendly</li>
							</ul>
						</div>
						<a
							href="https://rolypolie.github.io/SkysCafe/index.html#"
							target="_blank"
							rel="noreferrer"
							className="w-full h-1/2 md:h-full transform transition duration-300 hover:scale-110"
						>
							<div className="bg-skyCafe bg-cover bg-left bg-no-repeat h-full rounded-lg"></div>
						</a>
					</div>
				</motion.div>
			</div>
			<Footer />
		</div>
	);
}

export default Showcase;
