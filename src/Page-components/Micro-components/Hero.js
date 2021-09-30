import React from "react";

function Hero() {
	// TODO: make responsive
	return (
		<div className="h-2/4">
			<div className="bg-heroImage bg-cover bg-no-repeat bg-center h-full z-0">
				<div className="z-10 bg-gradient-to-b from-gray-700 w-full h-full flex place-items-center justify-center xl:justify-start">
					<div className="xl:pl-96 flex flex-col md:max-w-4xl text-secondary">
						<h1 className="text-center text-7xl md:text-9xl font-anton">
							WELCOME
						</h1>
						<p
							className="text-xl md:text-2xl"
							style={{
								textShadow: "-2px 2px 6px rgba(0, 0, 0, 0.31)",
							}}
						>
							to the Beginning of a new Journey.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
