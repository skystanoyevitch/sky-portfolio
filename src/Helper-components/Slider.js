import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { wrap } from "@popmotion/popcorn";
import { quotes } from "./Quotes";

const quoteVariants = {
	enter: (direction) => {
		return {
			x: direction > 0 ? 1000 : -1000,
			opacity: 0,
		};
	},
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1,
	},
	exit: (direction) => {
		return {
			zIndex: 0,
			x: direction < 0 ? 1000 : -1000,
			opacity: 0,
		};
	},
};

const Slider = () => {
	const [[page, direction], setPage] = useState([0, 0]);

	const quotesIndex = wrap(0, quotes.length, page);

	useEffect(() => {
		const paginate = (newDirection) => {
			setPage([page + newDirection, newDirection]);
		};
		setInterval(() => {
			console.log(paginate);
			return paginate(1);
		}, 8000);
		return () => {
			clearInterval();
		};
	}, [page, direction]);

	return (
		<>
			<AnimatePresence>
				<section className="w-screen h-2/4 bg-primary">
					<div className="container mx-auto h-full text-center flex flex-col justify-center lg:flex lg:place-items-center lg:justify-center text-secondary">
						<motion.h1
							key={page}
							custom={direction}
							variants={quoteVariants}
							initial="enter"
							animate="center"
							exit="exit"
							transition={{
								x: {
									type: "spring",
									stiffness: 300,
									damping: 30,
								},
								opacity: { duration: 0.2 },
							}}
							className="text-center italic text-xl lg:text-2xl xl:text-3xl mx-6"
						>
							{quotes[quotesIndex]}
						</motion.h1>
					</div>
				</section>
			</AnimatePresence>
		</>
	);
};

export default Slider;
