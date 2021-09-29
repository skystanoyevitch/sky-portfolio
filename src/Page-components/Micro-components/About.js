import React from "react";

function About() {
	return (
		<div className="container mx-auto px-8 py-20 lg:px-0 lg:flex lg:items-center lg:py-44 lg:justify-between lg:h-2/3 space-y-20">
			<div className="flex-1 lg:max-w-2xl md:p-10 overflow-scroll">
				<h2 className="text-3xl md:text-4xl lg:text-5xl font-anton text-primary">
					Who Am i?
				</h2>
				<h3 className="pt-4 lg:pt-10 pb-4 text-2xl md:text-3xl font-robotoThin font-extrabold">
					I'm{" "}
					<span className="font-anton tracking-widest"> Sky </span>{" "}
				</h3>
				<p className="text-2xl md:text-3xl font-robotoThin tracking-wide leading-relaxed text-paragraph">
					A Freelance Web Developer | Designer living in the sunny
					side of San Diego,CA.
					<br />
					Weather it is a Website for Personal Branding or a Website
					for your Company, i aim to help build an Experience that you
					and your customers will love.
				</p>
			</div>
			<div className="lg:max-w-3xl w-full lg:pl-52">
				<div
					className="w-full bg-profileImage bg-cover bg-no-repeat bg-center rounded-lg"
					style={{
						height: "30rem",
					}}
				></div>
			</div>
		</div>
	);
}

export default About;
