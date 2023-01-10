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
			className="container mx-auto px-8 py-32 lg:py-0 lg:h-screen"
		>
			<h1 className="mb-6 text-2xl text-center lg:text-4xl font-poppins lg:mb-16 font-bold text-gray-700">
				SERVICES
			</h1>
			<div className="flex flex-col space-y-10 lg:space-y-0 lg:flex lg:flex-row lg:justify-evenly bg-white">
				<div className="lg:w-80 px-4 shadow-shadowNeo">
					<img src={CreativeIcon} alt="" srcset="" />

					<div className="pb-8 lg:p-6">
						<h1 className="text-center text-xl pb-6 lg:text-3xl lg:pb-4 font-poppins font-semibold text-gray-800">
							Web Design
						</h1>
						<p className="text-sm lg:text-md font-poppins font-lite text-center">
							Stand out from the growded market with a design
							taiolored to your business, custom built using the
							latest UI and UX design principles that results in
							an engaging website that you and your visitors will
							love.
						</p>
					</div>
				</div>
				<div className="lg:w-80 px-4 shadow-shadowNeo">
					<img src={WebsiteIcon} alt="website" />

					<div className="pb-8 lg:p-6">
						<h1 className="text-center text-xl lg:text-3xl pb-6 lg:pb-4 font-poppins font-semibold text-gray-800">
							Web Development
						</h1>
						<p className="text-sm lg:text-md font-poppins font-lite text-center">
							Enjoy a Custom Built website using the latest
							technoligies with an emphasis on performance and
							security to get your business up and running on the
							web.
						</p>
					</div>
				</div>
				<div className="lg:w-80 px-4 shadow-shadowNeo">
					<img src={WordPressIcon} alt="" srcset="" />
					<div className="pb-8 lg:p-6">
						<h1 className="text-center text-xl lg:text-3xl lg:pb-4 font-poppins font-semibold text-gray-800">
							WordPress
						</h1>
						<p className="text-sm lg:text-md font-poppins font-lite text-center">
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
