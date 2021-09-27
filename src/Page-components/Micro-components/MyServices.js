import react from "react";

const MyServices = () => {
	return (
		<>
			<section className="w-full h-3/4 bg-oceanBg bg-fixed bg-cover bg-center bg-no-repeat">
				<div className="w-full h-full bg-primary bg-opacity-90 text-secondary">
					<div className="mx-auto h-full">
						<h1 className="text-center font-robotoThin font-bold text-6xl p-6 tracking-widest">
							MY SERVICES
						</h1>
						<div className="flex content-center text-center md:h-2/3 flex-wrap justify-evenly">
							<div className="flex-1 md:max-w-xl">
								<h2 className="font-bold italic text-5xl p-6">
									Design
								</h2>
								<p className="tracking-wider text-3xl font-robotoThin">
									When Designing and Developing Websites for
									my Clients.. My goals are simple
								</p>
							</div>

							<div
								className="absolute border-l-2 border-secondary"
								style={{ left: "50%", height: "50rem" }}
							></div>
							<div className="flex-1 md:max-w-xl">
								<h2 className="font-bold italic text-5xl p-6">
									E-Commerce
								</h2>
								<p className="tracking-wider text-3xl font-robotoThin">
									If you are looking to expand your business
									into the online world, My Goal is to
									Transform Businesses and Brands into a
									Website that will last and be Realiable. I
									currently Work with the two Biggest
									Ecommerce platforms in the industry:
									Shopify. WordPress.
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
