// React Imports //
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, useCycle } from "framer-motion";
import HamMenu from "./Micro-components/HamMenu";
import { useState } from "react";

const menuVar = {
	open: {
		rotateX: 0,
		y: 0,
		transition: {
			duration: 0.3,
			mass: 0.8,
			type: "spring",
		},
		display: "block",
	},
	closed: {
		rotateX: -30,
		y: -320,
		transition: {
			duration: 0.3,
		},
		transitionEnd: {
			display: "none",
		},
	},
};

const ham1 = {
	closed: { rotate: 0 },
	open: { rotate: 45, translateY: 8 },
};
const ham3 = {
	closed: { rotate: 0 },
	open: { rotate: -45, translateY: -12 },
};

const hamClosed = {
	closed: { opacity: 1 },
	open: { opacity: 0, duration: 0.1 },
};

const Nav = () => {
	const [open, setOpen] = useCycle(false, true);
	return (
		// Desktop Navigation Menu //
		<div className="bg-primaryNav md:flex md:flex-col md:">
			<nav className="container mx-auto hidden md:visible md:flex md:justify-center flex-1">
				<ul className="md:p-10 md:space-x-16 lg:space-x-32 flex p-x font-poppins font-light lg:text-xl xl:text-2xl text-black place-items-center">
					<li className={"lg:px-4"}>
						<Link to="/">Home</Link>
					</li>
					<li className={""} id="portfolio">
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
			<div className="container mx-auto flex flex-col items-start">
				<motion.button
					initial={false}
					onClick={setOpen}
					open={open}
					className="p-10 md:hidden space-y-2"
				>
					<motion.div
						animate={open ? "open" : "closed"}
						variants={ham1}
						className="w-8 h-0.5 bg-gray-600"
					></motion.div>
					<motion.div
						animate={open ? "open" : "closed"}
						variants={hamClosed}
						className="w-8 h-0.5 bg-gray-600"
					></motion.div>
					<motion.div
						animate={open ? "open" : "closed"}
						variants={ham3}
						className="w-8 h-0.5 bg-gray-600"
					></motion.div>
				</motion.button>

				{/* {open && } */}
				<motion.div
					initial={false}
					animate={open ? "open" : "closed"}
					variants={menuVar}
				>
					<HamMenu />
				</motion.div>

				{/* {open && <HamMenu />} */}
			</div>
		</div>
	);
};

export default Nav;
