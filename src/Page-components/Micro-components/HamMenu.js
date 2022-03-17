import react from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
// import { useState } from "react/cjs/react.production.min";
// import { useState } from "react/cjs/react.production.min";

// const menu = {
// 	open: {
// 		opacity: 1,
// 	},
// 	closed: {
// 		opacity: 0,
// 	},
// };

const HamMenu = () => {
	return (
		<nav className="h-96 bg-primaryNav">
			<ul className="font-poppins font-light flex flex-col text-3xl space-y-10 p-10">
				<li className="">
					<Link to="/">Home</Link>
				</li>
				<li id="portfolio">
					<Link to="/">Portfolio</Link>
				</li>
				<li>
					<NavLink to="#" activeStyle={{}}>
						Experimental
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/Contact"
						activeStyle={{
							color: "#FF5722",
							fontWeight: "bold",
						}}
						className=""
					>
						Contact
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default HamMenu;
