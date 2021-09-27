import react from "react";

const MainShowcase = () => {
	return (
		<>
			<section className="w-full h-3/4 bg-secondary">
				<div className="mx-auto h-full">
					<h1 className="text-center font-robotoThin font-bold text-6xl p-8 tracking-widest text-primary">
						SHOWCASE
					</h1>

					<div className="w-full h-3/4 flex flex-row justify-evenly place-items-center">
						<div
							className="relative h-96"
							style={{ width: "40rem" }}
						>
							<div className="absolute w-full h-full bg-this-is-sky bg-cover bg-no-repeat bg-center rounded-lg"></div>
						</div>
						<div
							className="relative h-96 shadow-xl"
							style={{ width: "40rem" }}
						>
							<div className="absolute w-full h-full bg-skyCafe bg-cover bg-no-repeat bg-center rounded-lg"></div>
						</div>
						<div
							className="relative h-96"
							style={{ width: "40rem" }}
						>
							<div className="absolute w-full h-full bg-aboutDesign bg-cover bg-no-repeat bg-center rounded-lg"></div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default MainShowcase;
