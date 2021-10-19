// React Imports //
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
	return (
		<div
			className={`hidden md:visible md:shadow-md md:h-24 lg:h-16 xl:h-24 w-screen md:flex md:items-center absolute ${
				window.location.pathname === "/Contact"
					? "text-primary"
					: "text-secondary"
			}`}
		>
			<nav className="md:flex md:justify-center flex-1">
				<ul className="flex xl:text-xl p-x tracking-wide">
					<li className={"m-10 p-3"}>
						<Link to="/">HOME</Link>
					</li>
					<li className={"m-10 p-3"}>
						<NavLink
							to="/Showcase"
							activeStyle={{ color: "orange" }}
						>
							SHOWCASE
						</NavLink>
					</li>
					<li className={"m-10 p-3"}>
						<NavLink
							to="/Contact"
							activeStyle={{ color: "orange" }}
						>
							CONTACT
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Nav;
