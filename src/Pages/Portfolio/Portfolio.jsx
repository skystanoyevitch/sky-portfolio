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
											? "h-60 md:h-120"
											: "h-20 md:h-40"
									} rounded-lg transition-all w-80 z-0 md:w-full md:max-w-3xl hover:scale-105 shadow-md bg-gray-800`}
								>
									<button
										type="button"
										className="h-20 md:h-40 w-full pl-4 md:pl-8 flex justify-between items-center"
										onClick={() => handleClick(project.id)}
									>
										<div className="font-poppins text-lg md:text-2xl lg:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-indigo-500 to-[#e75d48]">
											{project.name}
										</div>
										<div className="flex mr-8 w-12 h-12 relative ">
											<div
												className={`w-4 h-1 md:w-5 md:h-[3px] rounded-full bg-[#9CCDE9] shadow absolute transition-all ${
													buttonOpen[project.id]
														? "-rotate-45 left-2 top-5"
														: "rotate-45 left-2 top-5"
												}`}
											></div>
											<div
												className={`w-4 h-1 md:w-5 md:h-[3px] rounded-full bg-[#9CCDE9] shadow absolute transition-all ${
													buttonOpen[project.id]
														? "rotate-45 left-4 top-5 md:left-5 md:top-5"
														: "-rotate-45 left-4 top-5 md:left-5 md:top-5"
												}`}
											></div>
										</div>
									</button>

									{/* {buttonOpen[project.id] && (
										<div className="h-1/2 md:h-1/2 m-8 bg-techJobs bg-cover bg-no-repeat rounded-md"></div>
									)} */}

									{/* <a href={project.to} target="blank">
										<div
											className={`${
												buttonOpen[project.id]
													? "h-1/2 md:h-1/2 m-8"
													: "h-0"
											} ${
												project.thumbnail
											}md:bg-top rounded-md transition-all`}
										></div>
									</a> */}
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
