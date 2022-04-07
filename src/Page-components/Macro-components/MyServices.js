import React from "react";
import { MdAddBusiness, MdOutlineDesignServices } from "react-icons/md";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const textVariant = {
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

const MyServices = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
	});
	// const scrollYProgress = useViewportScroll();
	return (
		<>
			<section className="relative w-full xl:h-2/4 bg-primary">
				<motion.div
					ref={ref}
					variants={textVariant}
					initial="initial"
					animate={inView ? "animate" : "initial"}
					className="text-secondary p-8 md:px-16 lg:p-0"
				>
				</motion.div>
			</section>
		</>
	);
};

export default MyServices;
