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
				<div className="border-4 border-gray-700 right-2 bottom-2 xl:mt-32 mx-auto w-48 h-64 md:w-48 md:h-56 lg:w-80 lg:h-80 bg-profileImage rounded-full bg-cover bg-center bg-no-repeat"></div>
				<div className="text-center mt-10 lg:flex lg:flex-col lg:items-center">
					<p className="font-poppins text-lg font-semibold text-primary">
						Web Developer | Designer
					</p>
					<h1 className="text-6xl xl:text-8xl font-bebas text-mainOrange">
						Sky Stanoyevitch
					</h1>
					<p className="mt-4 font-poppins text-primary text-lg md:text-xl xl:text-2xl leading-normal  lg:max-w-3xl xl:max-w-6xl">
						I am an experienced UI/UX Designer living in the sunny
						side of San Diego, CA.
					</p>
				</div>
				<div className="text-center flex flex-col md:flex-row md:justify-center lg:space-x-10">
					<Link to={"/Contact"}>
						<motion.button
							variants={buttonVarant}
							style={{
								boxShadow: "5px 5px 0 rgba(55, 65, 81, 1)",
							}}
							whileHover="hover"
							whileTap={{ scale: 0.9 }}
							className="hover:bg-mainOrange hover:text-white bg-white border-4 border-gray-700 font-bold text-gray-700 py-2 px-6 font-poppins text-md xl:text-xl xl:w-30 mt-8 xl:mt-10 md:mr-4 rounded-full"
						>
							Contact
						</motion.button>
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
							className="hover:bg-mainOrange hover:text-white bg-white border-4 border-gray-700 py-2 px-6 font-poppins font-bold text-gray-700 text-md xl:text-xl xl:w-30 mt-8 xl:mt-10 md:mr-4 rounded-full"
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
