import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

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
		scale: 1.2,
		boxShadow: "5px 5px 0 rgba(255, 192, 173, 0.8)",
	},
};

const MainContact = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
	});
	return (
		<>
			<section className="w-full xl:h-2/5">
				<motion.div
					ref={ref}
					variants={contactVariant}
					initial="initial"
					animate={inView ? "animate" : "initial"}
					className="w-full h-full"
				>
					<div className="container mx-auto mb-24 lg:max-w-3xl xl:max-w-4xl  p-8 lg:p-16 xl:p-0 text-center flex flex-col items-center justify-center">
						<h1 className="font-playFair font-normal text-5xl lg:text-5xl xl:text-6xl">
							Let's Work Together
						</h1>

						<p className="font-poppins font-light leading-7 md:leading-9 lg:leading-10 text-xl lg:text-2xl xl:text-3xl my-10 lg:my-14 text-gray-600 lg:tracking-wide">
							Need a Website Designed? Want to Colaborate? or just
							want to say hi, please don't hesitate to contact me
							using the link Below.. I look Forward to hearing
							from you.
						</p>

						<Link to="/Contact">
							<motion.button
								variants={buttonVarant}
								whileHover="hover"
								className="py-1 px-8 font-poppins text-md xl:text-2xl xl:w-30 border-2 border-gray-500 lg:py-3 lg:px-8 rounded-full"
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
