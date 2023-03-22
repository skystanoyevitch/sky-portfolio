import React from "react";
import { Link } from "react-router-dom";
import { motion, useCycle } from "framer-motion";
// import logo from "../../images/mwd-logo.png";

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
    <div className="md:flex md:flex-col p-4">
      <div className="rounded-xl shadow-xl shadow-gray-300 bg-white">
        <nav className="container mx-auto hidden md:visible md:flex md:justify-center md:place-items-center md:p-2 lg:p-4">
          <div className="text-xl lg:text-2xl font-poppins font-bold flex-1">
            {" "}
            <span className="text-[#e75d48]">Modern</span>{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-[#e75d48] bg-clip-text text-transparent">
              Web Design
            </span>
          </div>
          {/* <img src={logo} alt="logo" className=" object-cover" /> */}
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
        className={`md:hidden container mx-auto flex flex-col items-start bg-white z-40 shadow-xl shadow-gray-300 rounded-lg`}
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
          <h3 className=" text-center ml-4 flex items-center font-poppins text-mainOrange text-md font-bold">
            M{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-[#e75d48] bg-clip-text text-transparent">
              WD
            </span>
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
