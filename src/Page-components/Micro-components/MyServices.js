import react from "react";

const MyServices = () => {
	return (
		<>
			<section className="w-full h-2/3 border-primary bg-oceanBg bg-cover bg-center bg-no-repeat">
				<div className="w-full h-full bg-primary bg-opacity-90 text-secondary">
					<div className="container mx-auto h-full">
						<h1 className="text-center font-robotoThin font-bold text-5xl p-6 tracking-widest">
							MY SERVICES
						</h1>
						<div className="flex content-center text-center md:h-2/3 flex-wrap justify-between">
							<div className="flex-1 md:max-w-xl">
								<h2 className="font-rockSalt text-3xl p-6">
									Design
								</h2>
								<p className="text-xl font-robotoThin">
									When Designing and Developing Websites for
									my Clients.. My goals are simple
								</p>
							</div>
							<div className="flex-1 md:max-w-xl">
								<h2 className="font-rockSalt text-3xl p-6">
									E-Commerce
								</h2>
								<p className="text-xl font-robotoThin">
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
