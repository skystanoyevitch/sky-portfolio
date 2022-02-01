import React from "react";
import { MdAddBusiness, MdOutlineDesignServices } from "react-icons/md";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const textVariant = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			duration: 1,
		},
	},
};

const MyServices = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
	});
	// const scrollYProgress = useViewportScroll();
	return (
		<>
			<section className="relative w-full xl:h-2/4 bg-primary">
				<motion.div
					ref={ref}
					variants={textVariant}
					initial="initial"
					animate={inView ? "animate" : "initial"}
					className="text-secondary p-8 md:px-16 lg:p-0"
				>
					<div className="mx-auto">
						<h1 className="text-center font-anton tracking-widest text-4xl md:text-5xl xl:p-8 lg:p-6">
							MY SERVICES
						</h1>
						<div className="flex flex-col divide-y-2 divide-secondary xl:divide-y-0 xl:divide-x-2 xl:divide-secondary items-center md:pt-0 xl:p-0 xl:pt-16 md:pb-16 xl:space-y-0 xl:flex xl:flex-row xl:items-center text-center xl:h-2/3 xl:justify-center">
							<div className="xl:max-w-3xl pt-10 xl:pt-0 pb-10 xl:pb-0 xl:pr-24">
								<div className="flex justify-center">
									<MdOutlineDesignServices size={70} />
								</div>
								<h2 className="pb-8 font-robotoThin font-semibold lg:tracking-widest text-3xl lg:text-4xl xl:text-5xl xl:pb-8">
									UI Design
								</h2>
								<p className="md:max-w-lg lg:pt-4 xl:p-0 tracking-wider text-lg md:text-xl xl:text-2xl font-robotoThin leading-relaxed">
									When Designing Websites for my Clients.. My
									goals are simple, make them{" "}
									<span
										className="font-sans font-bold italic"
										style={{ color: "#F8DD74" }}
									>
										Responsive
									</span>
									,{" "}
									<span
										className="font-sans font-bold italic"
										style={{ color: "#85FFC7" }}
									>
										Practical
									</span>{" "}
									and{" "}
									<span
										className="font-sans font-bold italic"
										style={{ color: "#DAC4F7" }}
									>
										Beautiful
									</span>{" "}
									all while making sure that each website is
									Designed to be on all Devices, from Mobile
									Devices to Desktop Computers.
								</p>
							</div>
							<div className="xl:max-w-3xl pt-10 xl:pt-0 pb-0 xl:pb-0 xl:pl-24">
								<div className="flex justify-center">
									<MdAddBusiness size={70} />
								</div>
								<h2 className="pb-8 font-robotoThin font-semibold lg:tracking-widest text-3xl lg:text-4xl xl:text-5xl xl:pb-8">
									UX Design
								</h2>
								<p className="md:max-w-lg lg:pt-4 xl:p-0 tracking-wider text-lg md:text-xl xl:text-2xl font-robotoThin leading-relaxed">
									Using UX Principles i help build{" "}
									<span
										className="font-sans font-bold"
										style={{ color: "#00B899" }}
									>
										Experiences
									</span>{" "}
									and{" "}
									<span
										className="font-sans font-bold"
										style={{ color: "#00A7F5" }}
									>
										Products
									</span>{" "}
									that bring the users to the forefront of my
									goal and your goal so that you can focus on
									what matters most, building a brand and
									business that matters.
								</p>
							</div>
						</div>
					</div>
				</motion.div>
			</section>
		</>
	);
};

export default MyServices;
