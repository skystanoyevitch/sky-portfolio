import react from "react";
import { Link } from "react-router-dom";

const MainContact = () => {
	return (
		<>
			<section className="w-full h-2/3 bg-oceanBg bg-fixed bg-center bg-no-repeat">
				<div className="w-full h-full bg-primary bg-opacity-90">
					<div className="container mx-auto h-full text-center text-secondary flex flex-col items-center justify-center">
						<h1 className="font-anton text-7xl pb-12">
							Let's Work Together!
						</h1>

						<p className="font-robotoThin tracking-wide text-3xl">
							Need a Website Built? Want to Colaborate? or just
							want to say hi, please don't hesitate to contact me
							using the link Below.. I look Forward to hearing
							from you.
						</p>

						<Link to="/Contact">
							<button
								className="rounded-lg w-48 md:px-4 md:py-2 md:mt-14 font-bold text-2xl"
								style={{ background: "#B02E0C" }}
							>
								LETS DO THIS
							</button>
						</Link>
					</div>
				</div>
			</section>
		</>
	);
};

export default MainContact;
