import React, { useEffect, useRef } from "react";
import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

// Other Imports
import { gsap } from "gsap";

function Hero() {
	const navigate = useNavigate();
	const comp = useRef();
	const tl = useRef();

	useEffect(() => {
		navigate("/", { replace: true });
	}, [navigate]);

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			tl.current = gsap
				.timeline()
				.fromTo(
					".heyo",
					{ opacity: 0, ease: 0.2, duration: 1 },
					{ opacity: 1, ease: 0.2, duration: 1 }
				)
				.fromTo(
					".box",
					{ opacity: 0, ease: 0.2, duration: 1 },
					{ opacity: 1, ease: 0.2, duration: 1 }
				);
		}, comp);

		return () => {
			ctx.revert();
		};
	}, []);

	return (
		<div className="w-screen h-screen flex flex-col justify-center md:h-screen">
			<div className="lg:h-full">
				<div className="container mx-auto flex flex-col lg:justify-center lg:flex-row p-8 lg:p-8 xl:p-0 lg:h-full">
					<div
						ref={comp}
						className=" flex flex-col justify-center space-y-4 container mx-auto max-w-sm md:max-w-lg lg:max-w-6xl"
					>
						<div className="box">
							<div className="font-bold pb-4 bg-clip-text text-transparent bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-amber-300 via-red-400 to-slate-700">
								<span className="text-4xl md:text-5xl xl:text-6xl">
									Welcome, i'm Sky,
								</span>
								<br />{" "}
								<span className="text-4xl md:text-5xl xl:text-6xl lg:text-7xl font-sans font-bold">
									Software Engineer and Designer.{" "}
								</span>
							</div>
							<div className="text-white text-sm md:text-base font-sans font-semibold flex space-x-4 pt-2">
								<a
									href="/portfolio"
									className="bg-none border-2 border-cyan-500 rounded-full py-2 px-4 flex place-items-center"
								>
									<div>My Projects</div>
								</a>
								<a
									href="https://twitter.com/Sky_webdev"
									target="blank_"
									className="bg-none border-2 border-cyan-500 rounded-full py-2 px-4 flex place-items-center"
								>
									<div>Contact Me</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
