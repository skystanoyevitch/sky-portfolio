import react from "react";

const MainShowcase = () => {
	return (
		<>
			<section className="w-full h-2/3 bg-secondary">
				<div className="container mx-auto h-full">
					<h1 className="text-center font-robotoThin font-bold text-5xl p-6 tracking-widest text-primary">
						SHOWCASE
					</h1>

					<div className="w-full h-full flex justify-between content-center">
						<div className="border-2 border-primary w-24 h-24"></div>
						<div className="border-2 border-primary w-24 h-24"></div>
						<div className="border-2 border-primary w-24 h-24"></div>
					</div>
				</div>
			</section>
		</>
	);
};

export default MainShowcase;
