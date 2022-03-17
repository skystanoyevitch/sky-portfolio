import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

const buttonVarant = {
	hover: {
		scale: 1.2,
		boxShadow: "5px 5px 0 rgba(255, 192, 173, 0.8)",
	},
};
function Hero() {
	// const { ref, inView, entry } = useInView();
	// const { scrollYProgress } = useViewportScroll();
	return (
		<div className=" p-10 xl:p-0 md:mt-24">
			<div className="container mx-auto">
				<div className="border-8 border-buttonBG right-2 bottom-2 xl:mt-32 mx-auto w-48 h-64 md:w-48 md:h-56 lg:w-80 lg:h-80 bg-profileImage rounded-full bg-cover bg-center bg-no-repeat"></div>
				<div className="md:text-center mt-10 lg:flex lg:flex-col lg:items-center">
					<p className="font-poppins font-light">UI | UX Designer</p>
					<h1 className="text-6xl xl:text-8xl font-playFair font-semibold text-mainOrange">
						Sky Stanojevic
					</h1>
					<p className="mt-10 font-poppins font-light text-xl leading-7 lg:text-3xl lg:leading-10 text-gray-500  lg:max-w-3xl xl:max-w-7xl">
						I am an experienced UI/UX Designer living in the sunny
						side of San Diego, CA.
						<br />
						If you are looking for a Website for Personal Branding
						or a Website for your Company, i Build Designs that
						Brings both you and your users together
					</p>
				</div>
				<div className="text-left flex flex-col md:flex-row md:justify-center xl:space-x-10 md:space-x-6 md:space-x-4">
					<Link to="/Contact">
						<motion.button
							variants={buttonVarant}
							whileHover="hover"
							className="text-white py-2 px-8 font-poppins text-md xl:text-2xl xl:w-30 border border-gray-500 lg:py-3 lg:px-8 mt-8 xl:mt-10 rounded-full bg-primaryBtn"
						>
							Resume
						</motion.button>
					</Link>
					<Link to="/Contact">
						<motion.button
							variants={buttonVarant}
							whileHover="hover"
							className="py-2 px-8 font-poppins text-md xl:text-2xl xl:w-30 border border-gray-500 lg:py-3 lg:px-8 mt-8 xl:mt-10 rounded-full"
						>
							Hire Me
						</motion.button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Hero;
