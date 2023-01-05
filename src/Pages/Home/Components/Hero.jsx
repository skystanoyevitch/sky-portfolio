import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import toast, { Toaster } from "react-hot-toast";
// const notify = () => toast("Oppsies, Coming Soon i promise!");

// const buttonVarant = {
// 	hover: {
// 		scale: 1.03,
// 	},
// };
function Hero() {
	return (
		<div className="w-screen h-[80vh]">
			<div className="lg:h-4/6">
				<div className="container mx-auto flex h-full">
					<div className="flex flex-col flex-1 justify-center">
						<h1 className="text-8xl">Web Designer | Developer</h1>
						<p className="lg:pt-8 lg:pb-4 lg:text-xl">
							helping small businesses grow through digital
							solutions
						</p>
						<button className="rounded-lg bg-[#e75d48] lg:w-1/6 lg:p-2 text-white">
							Contact
						</button>
					</div>
					<div className="flex-1 bg-heroImg bg-no-repeat"></div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
