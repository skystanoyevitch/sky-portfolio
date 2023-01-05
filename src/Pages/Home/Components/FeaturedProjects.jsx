// import { motion } from "framer-motion";
// import Arrows from "../../../icons/Arrows";
import React from "react";
import { useInView } from "react-intersection-observer";

import WebsiteIcon from "../../../images/website.svg";
import CreativeIcon from "../../../images/creative-team.svg";
import WordPressIcon from "../../../images/wordpress-icon.svg";

const aboutSectionVariant = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			duration: 0.3,
		},
	},
};

function FeaturedProjects() {
	const { ref, inView } = useInView({
		triggerOnce: true,
	});
	return (
		<section
			ref={ref}
			variants={aboutSectionVariant}
			initial="initial"
			animate={inView ? "animate" : "initial"}
			className="container mx-auto h-screen"
		>
			<div className="flex justify-evenly">
				<div className="lg:w-80 border-2 border-orange-500 rounded-lg lg:p-4 shadow-mainBoxShadow">
					<img src={CreativeIcon} alt="" srcset="" />

					<div className="lg:p-6">
						<h1 className="text-center lg:text-3xl lg:pb-4 font-poppins font-bold text-gray-800">
							Web Design
						</h1>
						<p className="text-md font-poppins font-lite text-center">
							Stand out from the growded market with a design
							taiolored to your business, custom built using the
							latest UI and UX design principles that results in
							an engaging website that you and your visitors will
							love.
						</p>
					</div>
				</div>
				<div className="lg:w-80 border-2 border-orange-500 rounded-lg lg:p-4 shadow-mainBoxShadow">
					<img src={WebsiteIcon} alt="" srcset="" />

					<div className="lg:p-6">
						<h1 className="text-center lg:text-3xl lg:pb-4 font-poppins font-bold text-gray-800">
							Web Development
						</h1>
						<p className="text-md font-poppins font-lite text-center">
							Enjoy a Custom Built website using the latest
							technoligies with an emphasis on performance and
							security to get your business up and running on the
							web.
						</p>
					</div>
				</div>
				<div className="lg:w-80 border-2 border-orange-500 rounded-lg lg:p-4 shadow-mainBoxShadow">
					<img src={WordPressIcon} alt="" srcset="" />
					<div className="lg:p-6">
						<h1 className="text-center lg:text-3xl lg:pb-4 font-poppins font-bold text-gray-800">
							WordPress
						</h1>
						<p className="text-md font-poppins font-lite text-center">
							From custom designs that are mobile responsive to
							maintanence and repairs to get your site back like
							new again, wory free.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default FeaturedProjects;
