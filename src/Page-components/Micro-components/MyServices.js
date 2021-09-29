import react from "react";

const MyServices = () => {
	return (
		<>
			<section className="w-full h-3/4 bg-oceanBg bg-fixed bg-cover bg-center bg-no-repeat">
				<div className="w-full h-full bg-primary bg-opacity-90 text-secondary">
					<div className="mx-auto h-full overflow-auto">
						<h1 className="text-center font-robotoThin text-5xl p-6">
							MY SERVICES
						</h1>
						<div className="flex content-center text-center md:h-2/3 flex-wrap justify-evenly">
							<div className="flex-1 md:max-w-lg">
								<h2 className="font-anton text-5xl mb-10">
									Design
								</h2>
								<p className="tracking-wider text-2xl font-robotoThin leading-relaxed">
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

							<div
								className="absolute border-l-2 border-secondary"
								style={{
									left: "50%",
									height: "40rem",
									top: "149%",
								}}
							></div>
							<div className="flex-1 md:max-w-lg">
								<h2 className="font-anton text-5xl mb-10">
									E-Commerce
								</h2>
								<p className="tracking-wider text-2xl font-robotoThin leading-relaxed">
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
