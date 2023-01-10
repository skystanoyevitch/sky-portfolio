// import React, { useState } from "react";
import { allProjects } from "./allProjects";

function Portfolio() {
	return (
		<div className="pb-10 lg:pb-20 bg-shapesBg py-12">
			{allProjects.map((project, key) => {
				return (
					<ul className="container mx-auto px-8 lg:px-0">
						<h1 className="font-poppins mb-6 text-xl lg:text-3xl">
							{project.name}
						</h1>
						<li
							key={key.id}
							className={`${project.thumbnail} h-80 lg:h-[33rem] shadow-shadowNeo mb-12 lg:mb-32`}
						></li>
					</ul>
				);
			})}
		</div>
	);
}

export default Portfolio;
