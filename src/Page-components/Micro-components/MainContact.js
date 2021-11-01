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
		boxShadow: "5px 5px 0 rgba(0, 0, 0, 0.2)",
	},
};

const MainContact = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
	});
	return (
		<>
			<section className="w-full xl:h-2/5 bg-primary">
				<motion.div
					ref={ref}
					variants={contactVariant}
					initial="initial"
					animate={inView ? "animate" : "initial"}
					className="w-full h-full"
				>
					<div className="container mx-auto lg:max-w-xl xl:max-w-4xl h-full p-8 lg:p-16 xl:p-0 text-center text-secondary flex flex-col items-center justify-center">
						<h1 className="font-anton text-4xl lg:text-5xl xl:text-7xl">
							Let's Work Together!
						</h1>

						<p className="font-robotoThin tracking-wide text-xl lg:text-2xl xl:text-3xl my-10 lg:my-14">
							Need a Website Built? Want to Colaborate? or just
							want to say hi, please don't hesitate to contact me
							using the link Below.. I look Forward to hearing
							from you.
						</p>

						<Link to="/Contact">
							<motion.button
								variants={buttonVarant}
								whileHover="hover"
								className="py-1 px-2 lg:px-4 lg:py-2 font-semibold text-md xl:text-xl xl:w-30 rounded-lg"
								style={{ background: "#B02E0C" }}
							>
								LETS DO THIS
							</motion.button>
						</Link>
					</div>
				</motion.div>
			</section>
		</>
	);
};

export default MainContact;
