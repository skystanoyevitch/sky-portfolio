import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import { SiDevDotTo } from "react-icons/si";
import { FaTwitterSquare } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import Emoji from "../assets/heart-emoji";
import { FooterNav } from "./Micro-components/FooterNav";

const Footer = () => {
	return (
		<>
			<footer className="h-96">
				<div
					className="flex p-4 w-full justify-center h-1/2"
					style={{ background: "#E8F1F2" }}
				>
					<div className="flex space-x-9 text-white items-center">
						<a
							href="https://dev.to/rolypolie"
							target="_blank"
							rel="noreferrer"
						>
							<SiDevDotTo size={50} />
						</a>
						<a
							href="https://www.instagram.com/spacebars_and_tabs/"
							rel="noreferrer"
							target="_blank"
						>
							<RiInstagramFill size={50} />
						</a>
						<a
							href="https://twitter.com/SStanoyevitch"
							rel="noreferrer"
							target="_blank"
						>
							<FaTwitterSquare size={50} />{" "}
						</a>
						<a
							href="mailto:sky.stanoyevitch@gmail.com"
							rel="noreferrer"
							target="_blank"
						>
							<AiTwotoneMail size={50} />
						</a>
					</div>
				</div>
				<div className="flex flex-row justify-center">
					<FooterNav />
				</div>
			</footer>
			<p className="text-center text-sm font-">
				Made With <Emoji symbol="❤" label="sheep" /> by Sky - 2021
			</p>
		</>
	);
};

export default Footer;
