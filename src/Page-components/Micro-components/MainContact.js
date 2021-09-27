import react from "react";

const MainContact = () => {
	return (
		<>
			<section className="w-full h-2/3 bg-oceanBg bg-fixed bg-center bg-no-repeat">
				<div className="w-full h-full bg-primary bg-opacity-90">
					<div className="container mx-auto h-full text-center text-secondary flex flex-col items-center justify-center">
						<h1 className="font-semibold text-7xl pb-12">
							Let's Work Together
						</h1>

						<p className="font-robotoThin tracking-wider text-3xl">
							Need a Website Built? Want to Colaborate? or just
							want to say hi... I love talking to people, and
							value communication with my Clients, so please don't
							hesitate to contact me using the link Below.
						</p>

						<button
							className="rounded-lg w-48 md:px-4 md:py-2 md:mt-14 font-bold text-white"
							style={{ background: "#AA3614" }}
						>
							LETS DO THIS!
						</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default MainContact;
