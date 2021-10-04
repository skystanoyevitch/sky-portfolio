import React from "react";
import { Link } from "react-router-dom";

const MainContact = () => {
	return (
		<>
			<section className="w-full xl:h-2/3 bg-primary">
				<div className="w-full h-full">
					<div className="container mx-auto h-full p-8 lg:p-24 xl:p-0 text-center text-secondary flex flex-col items-center justify-center">
						<h1 className="font-anton text-4xl lg:text-5xl xl:text-7xl">
							Let's Work Together!
						</h1>

						<p className="font-robotoThin tracking-wide text-xl lg:text-2xl xl:text-3xl my-10 lg:my-14">
							Need a Website Built? Want to Colaborate? or just
							want to say hi, please don't hesitate to contact me
							using the link Below.. I look Forward to hearing
							from you.
						</p>

						<Link to="/Contact">
							<button
								className="xl:w-48 px-4 lg:px-4 lg:py-2 font-semibold text-md xl:text-2xl"
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
