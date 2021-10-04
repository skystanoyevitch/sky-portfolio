import React from "react";
import { MdAddBusiness, MdOutlineDesignServices } from "react-icons/md";

const MyServices = () => {
	return (
		<>
			<section className="relative w-full xl:h-2/4 bg-primary">
				<div className="text-secondary p-8 md:px-16 lg:p-0">
					<div className="mx-auto h-full">
						<h1 className="text-center font-anton text-4xl md:text-5xl pb-16 lg:p-6">
							MY SERVICES
						</h1>
						<div className="flex flex-col divide-y-2 divide-secondary xl:divide-y-0 xl:divide-x-2 xl:divide-secondary items-center md:pt-6 lg:p-24 xl:p-0 xl:pt-16 md:pb-16 xl:space-y-0 xl:flex xl:flex-row xl:items-center text-center xl:h-2/3 xl:justify-center">
							<div className="xl:max-w-3xl pt-10 xl:pt-0 pb-10 xl:pb-0 xl:pr-24">
								<div className="xl:flex xl:justify-center xl:p-4">
									<MdOutlineDesignServices size={70} />
								</div>
								<h2 className="font-robotoThin font-semibold lg:tracking-widest text-3xl lg:text-4xl xl:text-5xl xl:pb-8">
									Design
								</h2>
								<p className="lg:pt-4 xl:p-0 tracking-wider text-lg md:text-xl xl:text-2xl font-robotoThin leading-relaxed">
									When Designing and Developing Websites for
									my Clients.. My goals are simple, make them{" "}
									<span
										className="font-sans font-bold italic"
										style={{ color: "#F8DD74" }}
									>
										Blazing Fast
									</span>
									,{" "}
									<span
										className="font-sans font-bold italic"
										style={{ color: "#85FFC7" }}
									>
										Fluidily Responsive
									</span>{" "}
									and{" "}
									<span
										className="font-sans font-bold italic"
										style={{ color: "#DAC4F7" }}
									>
										Absolutely Beautiful
									</span>{" "}
									all while making sure that each website is
									built and made to be on all Devices, from
									Mobile Devices to Desktop Computers.
								</p>
							</div>
							<div className="xl:max-w-3xl pt-10 xl:pt-0 xl:pl-24">
								<div className="xl:flex xl:justify-center xl:p-4">
									<MdAddBusiness size={70} />
								</div>
								<h2 className="font-robotoThin font-semibold lg:tracking-widest text-3xl lg:text-4xl xl:text-5xl xl:pb-8">
									E-Commerce
								</h2>
								<p className="lg:pt-4 xl:pt-0 tracking-wider text-lg md:text-xl xl:text-2xl font-robotoThin leading-relaxed">
									Using the Two Biggest Ecommerce platforms in
									the industry,{" "}
									<span
										className="font-sans font-bold"
										style={{ color: "#00B899" }}
									>
										Shopify
									</span>{" "}
									and{" "}
									<span
										className="font-sans font-bold"
										style={{ color: "#00A7F5" }}
									>
										WordPress
									</span>
									..I Transform Businesses and Brands into a
									Website that will last and be Realiable
									helping them to focus on what matters most,
									business.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default MyServices;
