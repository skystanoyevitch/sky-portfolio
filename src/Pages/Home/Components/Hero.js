import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
const notify = () => toast("Oppsies, Coming Soon i promise!");

const buttonVarant = {
	hover: {
		scale: 1.03,
	},
};
function Hero() {
	return (
		<div className="xl:h-4/6 p-10 xl:p-0 md:mt-24">
			<div className="container mx-auto">
				<div className="right-2 bottom-2 rounded-full xl:mt-32 mx-auto w-48 h-48 md:w-48 md:h-56 lg:w-80 lg:h-80 bg-profileImage bg-cover bg-center bg-no-repeat"></div>
				<div className="text-left md:text-center mt-10 lg:flex lg:flex-col lg:items-center">
					<p className="font-poppins text-sm font-semibold text-primary">
						Web Developer | Designer
					</p>
					<h1 className="text-6xl xl:text-8xl font-caveat text-mainOrange">
						Sky Stanoyevitch
					</h1>
					<p className="mt-4 font-poppins text-primary text-lg md:text-xl xl:text-2xl leading-normal  lg:max-w-3xl xl:max-w-6xl">
						I am an experienced UI/UX Designer living in the sunny
						side of San Diego, CA.
					</p>
				</div>
				<div className="text-center flex justify-center space-x-4 md:flex-row md:justify-center lg:space-x-10">
					<Link to={"/Contact"}>
						<div className="relative">
							<motion.button
								variants={buttonVarant}
								whileHover="hover"
								style={{
									boxShadow: "5px 5px 0 rgba(55, 65, 81, 1)",
								}}
								whileTap={{ scale: 0.9 }}
								className="relative z-20 hover:bg-mainOrange hover:text-white bg-white font-bold border border-gray-700  text-gray-700 py-2 px-6 font-poppins text-md xl:text-xl xl:w-30 mt-8 xl:mt-10 md:mr-4 rounded-xl"
							>
								Contact
							</motion.button>
							{/* <div className="absolute h-14 w-36 top-12 left-3 bg-white border-4 border-gray-700 z-10"></div> */}
						</div>
					</Link>

					<div>
						<motion.button
							variants={buttonVarant}
							style={{
								boxShadow: "5px 5px 0 rgba(55, 65, 81, 1)",
							}}
							whileHover="hover"
							whileTap={{ scale: 0.9 }}
							onClick={notify}
							className="hover:bg-mainOrange hover:text-white bg-white py-2 px-6 font-poppins font-bold border border-gray-700  text-gray-700 text-md xl:text-xl xl:w-30 mt-8 xl:mt-10 md:mr-4 rounded-xl"
						>
							Resume
						</motion.button>
						<Toaster />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
