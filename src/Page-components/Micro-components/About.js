import React from "react";

function About() {
	return (
		<div className="container mx-auto flex items-center py-44 justify-between h-2/3">
			<div className="flex-1 md:max-w-2xl p-10 border-r-2 border-primary">
				<h2 className="text-5xl font-rockSalt text-primary">
					Who am i?
				</h2>
				<h3 className="pt-6 pb-8 text-3xl">
					I go by the name <span className="font-bold">Sky</span>{" "}
				</h3>
				<p className="text-3xl font-robotoThin tracking-wider leading-normal text-paragraph">
					I am a freelance web developer and Designer living in the
					sunny side of San Diego,CA. Weather it is a Website for
					Personal Branding or a Website for your Company, i aim to
					help build an Experience that you and your customers will
					love.
				</p>
			</div>
			<div
				className="absolute border-2 border-primary"
				style={{ left: "74rem", width: "19rem" }}
			></div>
			<div className="md:max-w-3xl w-full pl-52">
				<div
					className="w-full bg-profileImage bg-cover bg-no-repeat bg-center"
					style={{
						height: "30rem",
						filter: "drop-shadow(18px 18px 0px rgba(17, 75, 95, 0.19))",
					}}
				></div>
			</div>
		</div>
	);
}

export default About;
