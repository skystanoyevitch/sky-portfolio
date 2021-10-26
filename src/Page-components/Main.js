import React, { useEffect } from "react";
import { useState } from "react";
import Hero from "./Micro-components/Hero";
import About from "./Micro-components/About";
import Footer from "./Footer";
import MyServices from "./Micro-components/MyServices";
import MainShowcase from "./Micro-components/MainShowcase";
import MainContact from "./Micro-components/MainContact";

const MainContent = () => {
	// const [animate, setAnimate] = useState(false);

	// useEffect(() => {
	// 	window.addEventListener("load", (event) => {
	// 		const loadTarget = document.getElementById("main-page");
	// 		loadTarget.classList.remove("scale-0", "opacity-0");
	// 		loadTarget.classList.add("scale-110", "opacity-100");
	// 		console.log("page is fully loaded");
	// 	});
	// });

	return (
		<div
			id="main-page"
			className="h-screen w-screen"
		>
			<Hero />
			<About />
			<MyServices />
			<MainShowcase />
			<MainContact />
			<Footer />
		</div>
	);
};

export default MainContent;
