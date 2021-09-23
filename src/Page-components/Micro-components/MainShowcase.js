import react from "react";

const MainShowcase = () => {
	return (
		<>
			<section className="w-full h-3/4 bg-secondary">
				<div className="container mx-auto h-full">
					<h1 className="text-center font-robotoThin font-bold text-6xl p-8 tracking-widest text-primary">
						SHOWCASE
					</h1>

					<div className="w-full h-3/4 flex flex-row justify-between place-items-center">
						<div
							className="relative w-96 h-96 border-primary border-2 "
						>
							<div className="absolute w-full h-full right-3 bottom-3 bg-aboutDesign bg-cover bg-no-repeat bg-center"></div>
						</div>
						<div
							className="relative w-96 h-96 shadow-xl border-primary border-2 "
						>
							<div className="absolute w-full h-full right-3 bottom-3 bg-aboutDesign bg-cover bg-no-repeat bg-center"></div>
						</div>
						<div
							className="relative w-96 h-96 border-primary border-2 "
						>
							<div className="absolute w-full h-full right-3 bottom-3 bg-aboutDesign bg-cover bg-no-repeat bg-center"></div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default MainShowcase;
