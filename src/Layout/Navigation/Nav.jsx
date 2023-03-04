import React from "react";
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
	const [open, setOpen] = useCycle(false, true);

	return (
		// Desktop Navigation Top Menu
		<div className="md:flex md:flex-col p-4 bg-[#F5F5F5]">
			<div className="rounded-xl shadow-sm bg-white">
				<nav className="container mx-auto hidden md:visible md:flex md:justify-center md:place-items-center md:p-2 lg:p-4">
					<div className="font-caveat text-orange-500 md:text-4xl lg:text-5xl flex-1">Sky</div>
					<div className="flex">
						{navLinks.map((link) => (
						<ul className="md:p-2 md:space-x-16 lg:space-x-24 text-gray-700">
							<li>
								<Link key={link.id} to={link.to}>
									<button className=" tracking-wide font-lite hover:underline hover:decoration-2 hover:underline-offset-8 hover:decoration-orange-600 font-poppins lg:text-xl">
										{link.name}
									</button>
								</Link>
							</li>
						</ul>
					))}
					</div>
					
				</nav>
			</div>

			{/* Mobile Navigation Hamburger Menu */}
			<div
				className={`md:hidden container mx-auto flex flex-col items-start bg-white z-40 shadow-md rounded-lg`}
			>
				<div className=" rounded-lg flex justify-between">
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
					<h3 className=" text-center ml-4 flex items-center font-caveat text-mainOrange text-xl">
						Menu
					</h3>
				</div>

				<motion.nav
					initial={false}
					animate={open ? "open" : "closed"}
					variants={menuVar}
				>
					<ul className="font-poppins text-2xl space-y-4 p-10 text-gray-700">
						{navLinks.map((link) => (
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
