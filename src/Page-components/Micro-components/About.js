import React from "react";

function About() {
	return (
		<div className="container mx-auto max-w-xs py-20 md:max-w-lg lg:max-w-none xl:p-0 lg:flex lg:p-24 xl:flex lg:items-center xl:py-44 lg:justify-between xl:h-2/3 space-y-20 xl:space-y-0">
			<div className="xl:max-w-2xl xl:p-10 lg:flex-1">
				<h2 className="text-3xl md:text-4xl lg:text-5xl font-anton text-primary">
					Who Am i?
				</h2>
				<h3 className="pt-4 lg:pt-10 pb-4 text-2xl md:text-3xl font-robotoThin font-extrabold">
					I'm{" "}
					<span className="font-anton tracking-widest"> Sky </span>{" "}
				</h3>
				<p className="text-2xl xl:text-3xl font-robotoThin tracking-wider leading-relaxed text-paragraph">
					A Freelance Web Developer | Designer living in the sunny
					side of San Diego,CA. Weather it is a Website for Personal
					Branding or a Website for your Company, i aim to help build
					an Experience that you and your customers will love.
				</p>
			</div>
			<div className="xl:max-w-3xl w-full xl:pl-52 lg:flex-1">
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
