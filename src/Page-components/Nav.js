// React Imports //
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
	return (
		<div className="bg-secondary md:flex md:flex-col md:">
			<nav className="container mx-auto hidden md:visible md:flex md:justify-center flex-1">
				<ul className="md:p-10 md:space-x-16 flex p-x font-poppins font-light lg:text-xl xl:text-2xl text-black place-items-center">
					<li className={""}>
						<Link to="/">Home</Link>
					</li>
					<li className={""}>
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
					<li className={""}>
						<button className="">
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
