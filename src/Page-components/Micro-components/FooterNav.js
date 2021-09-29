import React from "react";
import { NavLink } from "react-router-dom";

export const FooterNav = () => {
	return (
		<>
			<nav>
				<ul className="flex tracking-widest font-bold">
					<li className={"m-6 p-3  font-robotoThin"}>
						<NavLink to="/">HOME</NavLink>
					</li>
					<li className={"m-6 p-3  font-robotoThin"}>
						<NavLink
							to="/Showcase"
							activeStyle={{ color: "orange" }}
						>
							SHOWCASE
						</NavLink>
					</li>
					<li className={"m-6 p-3  font-robotoThin"}>
						<NavLink
							to="/Contact"
							activeStyle={{ color: "orange" }}
						>
							CONTACT
						</NavLink>
					</li>
				</ul>
			</nav>
		</>
	);
};
