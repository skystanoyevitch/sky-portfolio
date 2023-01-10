import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Arrows from "../../../icons/Arrows";
// import toast, { Toaster } from "react-hot-toast";
// const notify = () => toast("Oppsies, Coming Soon i promise!");

function Hero() {
	const navigate = useNavigate();

	useEffect(() => {
		navigate("/", { replace: true });
	}, [navigate]);

	return (
		<div className="w-screen h-[70vh] lg:h-[80vh]">
			<div className="lg:h-4/6">
				<div className="container mx-auto flex p-8 lg:p-0 lg:h-full">
					<div className="flex flex-col flex-1 justify-center">
						<h1 className="text-6xl lg:text-8xl font-poppins text-gray-800">
							Web Designer | Developer
						</h1>
						<p className="text-md py-4 lg:py-8 lg:text-xl font-poppins text-gray-600">
							helping small businesses grow through digital
							solutions
						</p>
						<a
							href="#section-contact"
							onClick={(e) => e.preventDefault}
						>
							<button className="flex rounded-lg fill-white hover:fill-orange-500 hover:bg-white hover:text-[#e75d48] hover:border-2 hover:border-[#e75d48] bg-[#e75d48] p-4 text-white font-poppins font-semibold">
								Work with me <Arrows />
							</button>
						</a>
					</div>
					<div className="flex-1 bg-heroImg bg-no-repeat"></div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
