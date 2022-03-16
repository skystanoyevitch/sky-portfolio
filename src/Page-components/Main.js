// import React, { useEffect } from "react";
// import { useState } from "react";
import Hero from "./Micro-components/Hero";
import About from "./Micro-components/About";
import Footer from "./Footer";
// import MyServices from "./Micro-components/MyServices";
// import MainShowcase from "./Micro-components/MainShowcase";
import MainContact from "./Micro-components/MainContact";

const MainContent = () => {
	return (
		<div id="main-page" className="h-screen bg-body">
			<Hero />
			<About />
			{/* <MyServices /> */}
			{/* <MainShowcase /> */}
			<MainContact />
			<Footer />
		</div>
	);
};

export default MainContent;
