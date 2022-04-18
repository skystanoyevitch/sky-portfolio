import React from "react";
import { NavLink } from "react-router-dom";

export const FooterNav = () => {
	return (
		<>
			<nav>
				<ul className="flex font-poppins space-x-8 m-6">
					<li className="">
						<NavLink to="/">Home</NavLink>
					</li>
					<li className="">
						<NavLink
							to="/Portfolio"
							activeStyle={{ color: "orange" }}
						>
							Portfolio
						</NavLink>
					</li>
					<li className="">
						<NavLink
							to="/Contact"
							activeStyle={{
								color: "#FF5722",
								fontWeight: "bold",
							}}
						>
							Contact
						</NavLink>
					</li>
				</ul>
			</nav>
		</>
	);
};
