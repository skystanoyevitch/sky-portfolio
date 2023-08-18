import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { VscGithub, VscTwitter } from "react-icons/vsc";

function Hero() {
	const navigate = useNavigate();

	useEffect(() => {
		navigate("/", { replace: true });
	}, [navigate]);

	return (
		<div className="w-screen h-120 flex flex-col justify-center md:h-screen">
			<div className="lg:h-full">
				<div className="container mx-auto flex flex-col lg:justify-center text-center lg:flex-row p-8 lg:p-8 xl:p-0 lg:h-full">
					<div className="flex flex-col justify-center container mx-auto max-w-sm md:max-w-lg lg:min-w-full">
						<div>
							<h1 className="text-5xl md:text-7xl xl:text-9xl font-sriracha pb-4 md:pb-6 lg:pb-8 font-bold animate-text bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-indigo-500 to-[#e75d48]">
								Sky Stanojevic
							</h1>
							<p className="text-md md:text-xl lg:text-2xl tracking-widest text-[#9CCDE9]">
								Developer{" "}
								<span className="text-[#e75d48] font-normal">
									{" "}
									|{" "}
								</span>{" "}
								Designer
							</p>
						</div>

						<div className="flex justify-center">
							<a
								href="#section-contact"
								onClick={(e) => e.preventDefault}
							>
								<button className="rounded-lg flex py-1 px-4 md:py-1 lg:px-8 lg:py-2 text-md md:text-base lg:text-lg font-bold bg-gradient-to-r from-cyan-500 via-indigo-500 to-[#e75d48] transition-all text-white my-8 md:my-10">
									Contact
								</button>
							</a>
						</div>
						<div className="flex justify-center space-x-4 text-3xl xl:text-4xl">
							<a
								href="https://github.com/skystanoyevitch"
								target="blank"
							>
								<VscGithub
									style={{ color: "#9CCDE9" }}
									onMouseOver={({ target }) =>
										(target.style.color = "#348ec2")
									}
									onMouseOut={({ target }) =>
										(target.style.color = "#9CCDE9")
									}
								/>
							</a>
							<a
								href="https://twitter.com/Sky_webdev"
								target="blank"
							>
								<VscTwitter
									style={{ color: "#9CCDE9" }}
									onMouseOver={({ target }) =>
										(target.style.color = "#348ec2")
									}
									onMouseOut={({ target }) =>
										(target.style.color = "#9CCDE9")
									}
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
