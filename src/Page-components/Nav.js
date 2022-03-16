// React Imports //
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
	return (
		<div className="bg-primaryNav md:flex md:flex-col md:">
			<nav className="container mx-auto hidden md:visible md:flex md:justify-center flex-1">
				<ul className="md:p-10 md:space-x-16 lg:space-x-32 flex p-x font-poppins font-light lg:text-xl xl:text-2xl text-black place-items-center">
					<li className={"lg:px-4"}>
						<Link to="/">Home</Link>
					</li>
					<li className={""} id="portfolio" >
						<Link to="/">Portfolio</Link>
					</li>
					<li className={""}>
						<NavLink to="#" activeStyle={{}}>
							Experimental
						</NavLink>
					</li>
					<li className={""}>
						<NavLink
							to="/Contact"
							activeStyle={{
								backgroundColor: "#FF5722",
								color: "white",
							}}
							className="border-solid md:py-3 md:px-8 rounded-full bg-body"
						>
							Contact
						</NavLink>
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
