import React from "react";

const MainShowcase = () => {
	return (
		<>
			<section className="w-full xl:h-3/5 bg-secondary">
				<div className="mx-auto">
					<h1 className="text-center font-anton text-4xl md:text-5xl p-8 tracking-widest text-primary">
						SHOWCASE
					</h1>

					<div className="container mx-auto flex flex-col pb-10 space-y-16 md:max-w-l lg:max-w-none xl:space-y-0 w-full px-8 md:px-0 lg:p-24 xl:px-0 xl:py-14 xl:flex xl:flex-row xl:justify-evenly xl:place-items-center">
						<a
							href="https://rolypolie.github.io/skystanoyevitch/"
							target="_blank"
							rel="noreferrer"
						>
							<div className="w-full xl:w-144 h-36 md:h-80 xl:h-96 bg-this-is-sky bg-contain bg-no-repeat bg-center"></div>
						</a>

						<a
							href="https://rolypolie.github.io/SkysCafe/"
							target="_blank"
							rel="noreferrer"
						>
							<div className="w-full xl:w-144 h-36 md:h-80 xl:h-96 bg-skyCafe bg-contain bg-no-repeat bg-center"></div>
						</a>

						<div className="w-full xl:w-144 h-36 md:h-80 xl:h-96 bg-comingSoon bg-contain bg-no-repeat bg-center"></div>
					</div>
				</div>
			</section>
		</>
	);
};

export default MainShowcase;
