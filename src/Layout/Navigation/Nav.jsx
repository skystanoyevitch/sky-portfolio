import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useCycle } from "framer-motion";

const menuVar = {
	open: {
		height: "100%",
		visibility: "visible",
		opacity: "1",
	},
	closed: {
		height: "0",
		visibility: "hidden",
		display: "block",
		opacity: "0",
	},
};

const ham1 = {
	closed: { rotate: 0 },
	open: { rotate: 45, translateY: 11 },
};
const ham3 = {
	closed: { rotate: 0 },
	open: { rotate: -45, translateY: -13 },
};

const hamClosed = {
	closed: { display: "block" },
	open: { visibility: "hidden", duration: 0.2 },
};
export const Nav = ({ navLinks }) => {
	console.log(navLinks);
	const [open, setOpen] = useCycle(false, true);
	// const [navFixed, setNavFixed] = useState(false);

	useEffect(() => {
		window.onscroll = () => {
			if (window.scrollY > 100) {
				// console.log(window.scrollY);
				document.getElementById("fixed-nav").classList.add("fixed");
			} else
				document.getElementById("fixed-nav").classList.remove("fixed");
		};
	}, []);

	return (
		// Desktop Navigation Top Menu
		<div className={"bg-primaryNav md:flex md:flex-col"}>
			<nav className="container mx-auto hidden md:visible md:flex md:justify-center flex-1">
				{navLinks.map((link) => (
					<ul className="md:p-10 md:space-x-16 lg:space-x-24 flex p-x font-poppins lg:text-xl xl:text-2xl text-black place-items-center">
						<li>
							<Link key={link.id} to={link.to}>
								<button className=" hover:text-mainOrange">
									{link.name}
								</button>
							</Link>
						</li>
					</ul>
				))}
			</nav>

			{/* Moible Navigation Hamburger Menu */}
			<div
				id="fixed-nav"
				className={`md:hidden container mx-auto flex flex-col items-start shadow-lg bg-body z-40`}
			>
				<div className="px-5 py-5 rounded-lg">
					<div className=" p-2 rounded-lg">
						<motion.button
							initial={false}
							onClick={setOpen}
							open={open}
							className="md:hidden space-y-2"
						>
							<motion.div
								animate={open ? "open" : "closed"}
								variants={ham1}
								className="w-8 h-1 bg-gray-700 rounded-full"
							></motion.div>
							<motion.div
								animate={open ? "open" : "closed"}
								variants={hamClosed}
								className="w-8 h-1 bg-gray-700 rounded-full"
							></motion.div>
							<motion.div
								animate={open ? "open" : "closed"}
								variants={ham3}
								className="w-8 h-1 bg-gray-700 rounded-full"
							></motion.div>
						</motion.button>
					</div>
				</div>

				<motion.nav
					initial={false}
					animate={open ? "open" : "closed"}
					variants={menuVar}
				>
					<ul className="font-poppins text-3xl space-y-6 p-10">
						{navLinks?.map((link) => (
							<motion.li onClick={setOpen} open={open}>
								<Link key={link.id} to={link.to}>
									{link.name}
								</Link>
							</motion.li>
						))}
					</ul>
				</motion.nav>
			</div>
		</div>
	);
};
