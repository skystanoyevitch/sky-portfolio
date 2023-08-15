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
				<div className="h-full pt-24 md:pt-0 md:h-1/2 container mx-auto w-80 md:w-full md:max-w-2xl lg:max-w-3xl space-y-12">
					{allProjects.map((project) => {
						return (
							<ul className="">
								<li
									key={project.id}
									className={`${
										buttonOpen[project.id]
											? "h-120"
											: "h-40"
									} rounded-lg transition-all z-0 w-80 md:w-full md:max-w-3xl border border-[#9CCDE9] border-b-8 border-r-8 shadow-md`}
								>
									<button
										type="button"
										className="h-20 w-full z-100"
										onClick={() => handleClick(project.id)}
									>
										<div className="text-left pl-8 font-sriracha">
											{project.name}
										</div>
									</button>
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
