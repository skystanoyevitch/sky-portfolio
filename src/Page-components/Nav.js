// React Imports //
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
	return (
		<div className="md:flex">
			<nav className="container mx-auto hidden md:visible md:flex md:justify-center flex-1">
				<ul className="flex p-x font-poppins font-light lg:text-xl xl:text-2xl text-black place-items-center">
					<li className={"mb-10 p-3"}>
						<Link to="/">Home</Link>
					</li>
					<li className={"mb-10 md:mx-12 lg:mx-24 p-3"}>
						<NavLink
							to="/Showcase"
							activeStyle={{
								color: "#FF5722",
								fontWeight: "bold",
							}}
						>
							About
						</NavLink>
					</li>
					<li className={"mb-10 p-3"}>
						<button className="p-3">
							<NavLink
								to="/Contact"
								activeStyle={{
									backgroundColor: "#FF5722",
									color: "white",
								}}
								className="border-solid border-2 border-black md:py-1 md:px-4 lg:py-1 lg:px-8"
							>
								Contact
							</NavLink>
						</button>
					</li>
				</ul>
			</nav>
			<div className="container mx-auto flex flex-col items-end p-6 md:hidden space-y-2">
				<div className="w-8 h-0.5 bg-gray-600"></div>
				<div className="w-8 h-0.5 bg-gray-600"></div>
				<div className="w-8 h-0.5 bg-gray-600"></div>
			</div>
		</div>
	);
};

export default Nav;
