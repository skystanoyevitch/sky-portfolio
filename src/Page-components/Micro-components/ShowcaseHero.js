import React from "react";

const ShowcaseHero = () => {
	//TODO: Add Slider Component to slide between every quote every 3 seconds.
	return (
		<>
			<section className="w-screen h-2/4 bg-primary">
				<div className="container mx-auto h-full text-center flex flex-col justify-center lg:flex lg:place-items-center lg:justify-center text-secondary">
					<h1 className="text-center italic text-xl lg:text-2xl xl:text-3xl mx-6">
						"DESIGN IS INTELLIGENCE MADE VISIBLE."
					</h1>
					<h2>
						<cite className="font-robotThin text-sm">
							- Alina Wheeler
						</cite>
					</h2>
				</div>
			</section>
		</>
	);
};

export default ShowcaseHero;
