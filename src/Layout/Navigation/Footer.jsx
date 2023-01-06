import React from "react";
// import { RiInstagramFill } from "react-icons/ri";
// import { FaTwitterSquare } from "react-icons/fa";
// import { AiTwotoneMail } from "react-icons/ai";
import Emoji from "./Assests/heart-emoji";
import { FooterNav } from "./Components/FooterNav";

const Footer = () => {
	return (
		<>
			<footer className="p-4 md:p-6 lg:p-8">
				<div className="flex flex-col p-4 w-full h-full justify-center">
					<div className="flex flex-row justify-center">
						<FooterNav />
					</div>
				</div>
				<p className="bottom-0 text-center text-xs lg:text-sm inset-x-1/4">
					Made With <Emoji symbol="❤" label="sheep" /> by Sky -
					<span className=" line-through">2021</span>{" "}
					<span className="text-[#e75d48] font-bold">2023</span>
				</p>
			</footer>
		</>
	);
};

export default Footer;
