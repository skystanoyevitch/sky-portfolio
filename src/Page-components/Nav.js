// React Imports //
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Nav = () => {
	const [navColor, setNavColor] = useState("#E8F1F2");

	// const handleOnClick = () => {
	// 	console.log("clicked");
	// 	setNavColor("#114B5F");
	// };
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
							activeStyle={{ color: "#114B5F" }}
						>
							SHOWCASE
						</NavLink>
					</li>
					<li className={"m-10 p-3  font-robotoThin"}>
						<Link to="/Contact">CONTACT</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Nav;
