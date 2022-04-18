import React from "react";
// import { RiInstagramFill } from "react-icons/ri";
// import { FaTwitterSquare } from "react-icons/fa";
// import { AiTwotoneMail } from "react-icons/ai";
import Emoji from "./Assests/heart-emoji";
import { FooterNav } from "./Components/FooterNav";

const Footer = () => {
	return (
		<>
			<footer
				className="bg-primaryNav p-4 md:p-6 lg:p-8"
			>
				<div className="flex flex-col p-4 w-full h-full justify-center">
					{/* <div className="flex space-x-4 lg:space-x-9 items-center justify-center">
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
					</div> */}
					<div className="flex flex-row justify-center">
						<FooterNav />
					</div>
				</div>
				<p className="bottom-0 text-center text-sm inset-x-1/4">
					Made With <Emoji symbol="❤" label="sheep" /> by Sky - 2021
				</p>
			</footer>
		</>
	);
};

export default Footer;
