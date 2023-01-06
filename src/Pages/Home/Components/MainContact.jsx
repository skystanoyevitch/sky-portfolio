// import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
// import { Link } from "react-router-dom";
// import HandShake from "../../../icons/HandShake";

// const contactVariant = {
// 	initial: {
// 		opacity: 0,
// 	},
// 	animate: {
// 		opacity: 1,
// 		transition: {
// 			duration: 1,
// 		},
// 	},
// };

// const buttonVarant = {
// 	hover: {
// 		scale: 1.03,
// 	},
// };

const MainContact = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
	});
	return (
		<>
			<section className="w-full xl:h-2/5 md:mb-24"></section>
		</>
	);
};

export default MainContact;
