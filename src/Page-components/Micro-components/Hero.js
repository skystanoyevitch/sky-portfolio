import React from "react";

function Hero() {
	// TODO: make responsive
	return (
		<div className="w-screen h-2/3">
			<div className="bg-heroImage bg-cover bg-no-repeat bg-center h-full z-0">
				<div className="z-10 bg-gradient-to-b from-gray-700 w-full h-full md:flex md:place-items-center">
					<div className="md:pl-96 md:flex md:flex-col md:max-w-4xl max-w-md text-secondary">
						<h1 className="font-rockSalt md:text-7xl font-bold">
							WELCOME
						</h1>
						<p
							className="font-thin text-2xl pt-6"
							style={{
								textShadow: "-2px 2px 6px rgba(0, 0, 0, 0.31)",
							}}
						>
							to the Beginning of a new Journey.
						</p>
						{/* <button
							className="rounded-lg md:w-max md:px-4 md:py-2 md:mt-14 font-bold text-white"
							style={{ background: "#43AA8B" }}
						>
							<span
								style={{
									textShadow:
										"-2px 2px 6px rgba(0, 0, 0, 0.31)",
								}}
							>
								Take Journey
							</span>
						</button> */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
