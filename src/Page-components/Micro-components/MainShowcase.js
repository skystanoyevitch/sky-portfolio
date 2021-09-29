import react from "react";

const MainShowcase = () => {
	return (
		<>
			<section className="w-full h-3/4 bg-secondary">
				<div className="mx-auto h-full">
					<h1 className="text-center font-robotoThin text-5xl p-8 tracking-widest text-primary">
						SHOWCASE
					</h1>

					<div className="w-full h-3/4 flex flex-row justify-evenly place-items-center">
						<div
							className="relative h-96"
							style={{ width: "40rem" }}
						>
							<a
								href="https://rolypolie.github.io/skystanoyevitch/"
								target="_blank"
								rel="noreferrer"
							>
								<div className="absolute w-full h-full bg-this-is-sky bg-cover bg-no-repeat bg-center rounded-lg"></div>
							</a>
						</div>
						<div
							className="relative h-96 shadow-xl"
							style={{ width: "40rem" }}
						>
							<a
								href="https://rolypolie.github.io/SkysCafe/index.html#"
								target="_blank"
								rel="noreferrer"
							>
								<div className="absolute w-full h-full bg-skyCafe bg-cover bg-no-repeat bg-center rounded-lg"></div>
							</a>
						</div>
						<div
							className="relative h-96"
							style={{ width: "40rem" }}
						>
							<div className="absolute w-full h-full bg-comingSoon bg-cover bg-no-repeat bg-center rounded-lg"></div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default MainShowcase;
