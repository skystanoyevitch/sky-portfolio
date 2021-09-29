// React Imports //
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
	return (
		<div
			className={`md:w-screen md:flex md:items-center absolute ${
				window.location.pathname === "/"
					? "text-secondary"
					: "text-primary"
			}`}
		>
			<nav className="md:flex md:justify-center flex-1">
				<ul className="flex text-2xl p-x tracking-widest font-extrabold">
					<li className={"m-10 p-3  font-robotoThin"}>
						<Link to="/">HOME</Link>
					</li>
					<li className={"m-10 p-3  font-robotoThin"}>
						<NavLink
							to="/Showcase"
							activeStyle={{ color: "orange" }}
						>
							SHOWCASE
						</NavLink>
					</li>
					<li className={"m-10 p-3  font-robotoThin"}>
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
