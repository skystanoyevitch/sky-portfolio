import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import HandShake from "../../../icons/HandShake";

const contactVariant = {
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

const buttonVarant = {
	hover: {
		scale: 1.03,
	},
};

const MainContact = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
	});
	return (
		<>
			<section className="w-full xl:h-2/5 md:mb-24">
				<motion.div
					ref={ref}
					variants={contactVariant}
					initial="initial"
					animate={inView ? "animate" : "initial"}
					className="w-full h-full"
				>
					<div className="container mx-auto mb-24  p-8 lg:p-16 xl:p-0 text-center flex flex-col items-center justify-center">
						<HandShake />
						<h1 className="font-poppins font-bold text-gray-700 text-3xl lg:text-4xl">
							Let's Work Together
						</h1>
						<Link to="/Contact">
							<motion.button
								variants={buttonVarant}
								style={{
									boxShadow: "5px 5px 0 rgba(55, 65, 81, 1)",
								}}
								whileHover="hover"
								className="hover:bg-mainOrange hover:text-white bg-white font-bold border border-gray-700 text-gray-700 py-2 px-8 font-poppins text-md xl:text-xl xl:w-30 lg:px-8 mt-8 rounded-xl"
							>
								Get In Touch
							</motion.button>
						</Link>
					</div>
				</motion.div>
			</section>
		</>
	);
};

export default MainContact;
