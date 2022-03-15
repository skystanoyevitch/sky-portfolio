import React from "react";
import { NavLink } from "react-router-dom";

export const FooterNav = () => {
	return (
		<>
			<nav>
				<ul className="flex font-poppins font-light">
					<li className="m-6 lg:p-3">
						<NavLink to="/">Home</NavLink>
					</li>
					<li className="m-6 lg:p-3">
						<NavLink
							to="/Showcase"
							activeStyle={{ color: "orange" }}
						>
							Showcase
						</NavLink>
					</li>
					<li className="m-6 lg:p-3">
						<NavLink
							to="/Contact"
							activeStyle={{ color: "orange" }}
						>
							Contact
						</NavLink>
					</li>
				</ul>
			</nav>
		</>
	);
};
