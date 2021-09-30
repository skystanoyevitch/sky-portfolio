import React from "react";

const MainShowcase = () => {
	return (
		<>
			<section className="w-full xl:h-3/5 bg-secondary">
				<div className="mx-auto">
					<h1 className="text-center font-anton text-4xl md:text-5xl p-8 tracking-widest text-primary">
						SHOWCASE
					</h1>

					<div className="flex flex-col space-y-16 xl:space-y-0 w-full px-8 md:px-16 lg:p-24 xl:px-0 py-20 xl:py-14 xl:flex xl:flex-row xl:justify-evenly xl:place-items-center">
						<a
							href="https://rolypolie.github.io/skystanoyevitch/"
							target="_blank"
							rel="noreferrer"
						>
							<div className="w-full xl:w-144 h-36 md:h-80 xl:h-96 bg-this-is-sky bg-cover bg-no-repeat bg-center rounded-lg"></div>
						</a>

						<a
							href="https://rolypolie.github.io/SkysCafe/index.html#"
							target="_blank"
							rel="noreferrer"
						>
							<div className="w-full xl:w-144 h-36 md:h-80 xl:h-96 bg-skyCafe bg-cover bg-no-repeat bg-center rounded-lg"></div>
						</a>

						<div className="w-full xl:w-144 h-36 md:h-80 xl:h-96 bg-comingSoon bg-cover bg-no-repeat bg-center rounded-lg"></div>
					</div>
				</div>
			</section>
		</>
	);
};

export default MainShowcase;
