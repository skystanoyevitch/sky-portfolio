import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

const buttonVarant = {
	hover: {
		scale: 1.1,
	},
};
function Hero() {
	// const { scrollYProgress } = useViewportScroll(0);
	// const { ref, inView, entry } = useInView();
	// const { scrollYProgress } = useViewportScroll();
	return (
		<div className=" p-10 xl:p-0 md:mt-24">
			<div className="container mx-auto">
				<div className="border-8 border-buttonBG right-2 bottom-2 xl:mt-32 mx-auto w-48 h-64 md:w-48 md:h-56 lg:w-80 lg:h-80 bg-profileImage rounded-full bg-cover bg-center bg-no-repeat"></div>
				<div className="md:text-center mt-10 lg:flex lg:flex-col lg:items-center">
					<p className="font-poppins font-light">UI | UX Designer</p>
					<h1
						className={`text-6xl xl:text-8xl font-playFair font-semibold text-mainOrange ${
							window.scrollY > 100 && "text-2xl"
						}`}
					>
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
				<div className="text-left flex flex-col md:flex-row md:justify-center">
					<Link to="/Contact">
						<motion.button
							variants={buttonVarant}
							style={{
								boxShadow: "5px 5px 0 rgba(255, 192, 173, 0.8)",
							}}
							whileHover="hover"
							whileTap={{ scale: 0.9 }}
							className="border border-gray-500 py-2 px-8 font-poppins text-md xl:text-xl xl:w-30 lg:px-8 mt-8 xl:mt-10 rounded-full md:mr-4"
						>
							Resume
						</motion.button>
					</Link>
					<Link to="/Contact">
						<motion.button
							variants={buttonVarant}
							style={{
								boxShadow: "5px 5px 0 rgba(255, 192, 173, 0.8)",
							}}
							whileHover="hover"
							whileTap={{ scale: 0.9 }}
							className="border-2 border-btnOrange bg-mainOrange text-white hover:rotate-3  py-2 px-8 font-poppins text-md xl:text-xl xl:w-30 lg:px-8 mt-8 xl:mt-10 rounded-full md:ml-4"
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
