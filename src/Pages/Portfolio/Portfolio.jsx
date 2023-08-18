import React, { useState } from "react";
import { allProjects } from "./allProjects";

function Portfolio() {
	const [buttonOpen, setButtonOpen] = useState({});

	const handleClick = (id) => {
		setButtonOpen((prev) => ({
			...prev,
			[id]: !prev[id],
		}));
	};

	return (
		<>
			<div className="h-screen text-white flex flex-col justify-center">
				<div className="h-screen py-24 md:pt-0 md:h-1/2 container mx-auto w-80 md:w-full md:max-w-2xl lg:max-w-3xl space-y-12">
					{allProjects.map((project) => {
						return (
							<ul className="">
								<li
									key={project.id}
									className={`${
										buttonOpen[project.id]
											? "h-80 md:h-120"
											: "h-20 md:h-40"
									} rounded-lg transition-all w-80 z-0 md:w-full md:max-w-3xl border border-[#9CCDE9] border-b-8 border-r-8 shadow-md`}
								>
									<button
										type="button"
										className="h-20 md:h-40 z-20 w-full md:pl-4"
										onClick={() => handleClick(project.id)}
									>
										<div className="text-center font-poppins text-lg md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-indigo-500 to-[#e75d48]">
											{project.name}
										</div>
									</button>

									{/* {buttonOpen[project.id] && (
										<div className="h-1/2 md:h-1/2 m-8 bg-techJobs bg-cover bg-no-repeat rounded-md"></div>
									)} */}
									<div
										className={`${
											buttonOpen[project.id]
												? "h-1/2 md:h-1/2 m-8"
												: "h-0"
										} bg-techJobs bg-cover bg-no-repeat bg-center md:bg-top rounded-md transition-all`}
									></div>
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
