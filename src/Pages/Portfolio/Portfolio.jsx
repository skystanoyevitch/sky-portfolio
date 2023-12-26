import { allProjects } from "./allProjects";

import { BsArrowLeftCircle } from "react-icons/bs";

function Portfolio() {
	return (
		<>
			<div className="h-screen text-white flex flex-col justify-center">
				<div className="h-full py-24 md:pt-0 md:h-1/2 container mx-auto w-80 md:w-full md:max-w-2xl lg:max-w-3xl space-y-8 md:space-y-10">
					<div className="text-5xl text-gray-800 transition-all hover:scale-105 hover:text-[#FF6036]">
						<a href="/">
							<BsArrowLeftCircle />
						</a>
					</div>

					{allProjects.map((project) => {
						return (
							<ul className="">
								<li
									key={project.id}
									className={` transition-transform w-80 z-0 md:w-full md:max-w-3xl hover:scale-105 hover:underline hover:underline-offset-8 hover:decoration-[#FF6036] hover:decoration-4`}
								>
									<a
										href={project.link}
										target="blank_"
										className="w-full flex justify-between items-center"
									>
										<div className="font-cutiveMono text-2xl md:text-4xl text-gray-800">
											{project.name}{" "}
											{/* <span className="text-slate-500"></span> */}
										</div>
									</a>
								</li>
							</ul>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default Portfolio;
