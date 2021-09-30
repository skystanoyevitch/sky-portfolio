import React from "react";
import Hero from "./Micro-components/Hero";
import About from "./Micro-components/About";
import Footer from "./Footer";
import MyServices from "./Micro-components/MyServices";
import MainShowcase from "./Micro-components/MainShowcase";
import MainContact from "./Micro-components/MainContact";

const MainContent = () => {
	return (
		<div className="h-screen w-screen">
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
