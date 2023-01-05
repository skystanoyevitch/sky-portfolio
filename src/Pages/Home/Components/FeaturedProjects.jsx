import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import Arrows from "../../../icons/Arrows";

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
			className="container mx-auto"
		>
			<div className="flex justify-between">
				<div className="border-2 border-orange-500 lg:h-80 lg:w-80 bg-gray-200 rounded-lg lg:p-4">
					<h1 className="text-center">Web Design</h1>
					<p>
						Stand out from the growded market with a design
						taiolored to your business, custom built using the
						latest UI and UX design principles that results in an
						engaging website that you and your visitors will love.
					</p>
				</div>
				<div className="border-2 border-orange-500 lg:h-80 lg:w-80 bg-gray-200 rounded-lg lg:p-4">
					<h1 className="text-center">Web Development</h1>
					<p>
						Enjoy a Custom Built website using the latest
						technoligies with an emphasis on performance and
						security to get your business up and running on the web.
					</p>
				</div>
				<div className="border-2 border-orange-500 lg:h-80 lg:w-80 bg-gray-200 rounded-lg lg:p-4">
					<h1 className="text-center">WordPress</h1>
					<p>
						From custom designs that are mobile responsive to
						maintanence and repairs to get your site back like new
						again, wory free.
					</p>
				</div>
			</div>
		</section>
	);
}

export default FeaturedProjects;
