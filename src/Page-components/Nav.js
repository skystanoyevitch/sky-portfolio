import React from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, useCycle } from "framer-motion";

const menuVar = {
	open: {
		display: "block",
		y: 0,
	},
	closed: {
		y: -500,
		display: "none",
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
		// Desktop Navigation Top Menu
		<div className={"bg-primaryNav md:flex md:flex-col"}>
			<nav className="container mx-auto hidden md:visible md:flex md:justify-center flex-1">
				<ul className="md:p-10 md:space-x-16 lg:space-x-24 flex p-x font-poppins lg:text-xl xl:text-2xl text-black place-items-center">
					<li>
						<Link to="/">
							<button className=" hover:text-mainOrange">
								Home
							</button>
						</Link>
					</li>
					<li id="portfolio">
						<Link to="/Showcase">
							<button className=" hover:text-mainOrange">
								Portfolio
							</button>
						</Link>
					</li>
					<li>
						<Link to="#">
							<button className=" hover:text-mainOrange">
								Experimental
							</button>
						</Link>
					</li>
					<li>
						<Link to="/Contact">
							<button className=" hover:text-mainOrange">
								Contact
							</button>
						</Link>
					</li>
				</ul>
			</nav>

			{/* Moible Navigation Hamburger Menu */}
			<div className="md:hidden container mx-auto flex flex-col items-start">
				<motion.button
					initial={false}
					onClick={setOpen}
					open={open}
					className="px-10 py-5 md:hidden space-y-2"
				>
					<motion.div
						animate={open ? "open" : "closed"}
						variants={ham1}
						className="w-8 h-1 bg-gray-800 rounded-full"
					></motion.div>
					<motion.div
						animate={open ? "open" : "closed"}
						variants={hamClosed}
						className="w-8 h-1 bg-gray-800 rounded-full"
					></motion.div>
					<motion.div
						animate={open ? "open" : "closed"}
						variants={ham3}
						className="w-8 h-1 bg-gray-800 rounded-full"
					></motion.div>
				</motion.button>

				<motion.nav
					initial={false}
					animate={open ? "open" : "closed"}
					variants={menuVar}
				>
					{/* <div className="bg-primaryNav"></div> */}
					<ul className="font-poppins font-light flex flex-col text-3xl space-y-10 p-10">
						<motion.li onClick={setOpen} open={open} className="">
							<Link to="/">Home</Link>
						</motion.li>
						<motion.li onClick={setOpen} open={open} id="portfolio">
							<Link to="/Showcase">Portfolio</Link>
						</motion.li>
						<motion.li onClick={setOpen} open={open}>
							<NavLink to="#" activeStyle={{}}>
								Experimental
							</NavLink>
						</motion.li>
						<motion.li onClick={setOpen} open={open}>
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
						</motion.li>
					</ul>
				</motion.nav>

				{/* {open && <HamMenu />} */}
			</div>
		</div>
	);
};

export default Nav;
