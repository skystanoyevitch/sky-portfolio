import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import HandShake from "../../icons/HandShake";

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
		scale: 1.1,
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
					<div className="container mx-auto mb-24 lg:max-w-3xl xl:max-w-4xl  p-8 lg:p-16 xl:p-0 text-center flex flex-col items-center justify-center">
						<h1 className="text-primary font-playFair font-normal text-5xl lg:text-5xl xl:text-6xl">
							Let's Work Together
						</h1>

						<p className="font-poppins leading-7 md:leading-9 lg:leading-snug text-xl lg:text-2xl xl:text-3xl my-10 lg:mt-10 text-gray-700 lg:tracking-wide">
							Need a Website Designed? Want to Colaborate? or just
							want to say hi, please don't hesitate to contact me
							using the link Below.. I look Forward to hearing
							from you.
						</p>

						<HandShake />

						<Link to="/Contact">
							<motion.button
								variants={buttonVarant}
								style={{
									boxShadow:
										"5px 5px 0 rgba(255, 192, 173, 0.8)",
								}}
								whileHover="hover"
								className="py-2 px-6 font-poppins text-md xl:text-xl xl:w-30 border border-black lg:px-8 rounded-full mt-6"
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
