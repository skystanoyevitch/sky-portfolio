import React from "react";

const MainShowcase = () => {
	return (
		<>
			<section className="w-full xl:h-3/4 bg-secondary">
				<div className="mx-auto h-full">
					<h1 className="text-center font-robotoThin text-4xl md:text-5xl p-8 tracking-widest text-primary">
						SHOWCASE
					</h1>

					<div className="flex flex-col space-y-16 xl:space-y-0 w-full px-8 md:px-16 lg:p-24 xl:px-0 py-20 xl:py-0 xl:h-full xl:flex xl:flex-row xl:justify-evenly xl:place-items-center">
						<a
							href="https://rolypolie.github.io/skystanoyevitch/"
							target="_blank"
							rel="noreferrer"
						>
							<div className="w-full h-36 md:h-80 bg-this-is-sky bg-cover bg-no-repeat bg-center rounded-lg"></div>
						</a>

						<a
							href="https://rolypolie.github.io/SkysCafe/index.html#"
							target="_blank"
							rel="noreferrer"
						>
							<div className="w-full h-36 md:h-80 bg-skyCafe bg-cover bg-no-repeat bg-center rounded-lg"></div>
						</a>

						<div className="w-full h-36 md:h-80 bg-comingSoon bg-cover bg-no-repeat bg-center rounded-lg"></div>
					</div>
				</div>
			</section>
		</>
	);
};

export default MainShowcase;
