import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import toast, { Toaster } from "react-hot-toast";
// const notify = () => toast("Oppsies, Coming Soon i promise!");

// const buttonVarant = {
// 	hover: {
// 		scale: 1.03,
// 	},
// };
function Hero() {
	return (
		<div className="w-screen h-[60vh] lg:h-[80vh]">
			<div className="lg:h-4/6">
				<div className="container mx-auto flex p-8 lg:p-0 lg:h-full">
					<div className="flex flex-col flex-1 justify-center">
						<h1 className="text-5xl lg:text-8xl font-poppins text-gray-800">
							Web Designer | Developer
						</h1>
						<p className="text-md py-4 lg:py-8 lg:text-xl font-poppins text-gray-600">
							helping small businesses grow through digital
							solutions
						</p>
						<button className="rounded-lg bg-[#e75d48] w-24 p-2 lg:w-1/6 lg:p-2 text-white font-poppins font-semibold">
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
