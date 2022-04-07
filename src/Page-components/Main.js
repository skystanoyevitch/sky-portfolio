import Hero from "./Macro-components/Hero";
import About from "./Macro-components/About";
import Footer from "./Footer";
import MainContact from "./Macro-components/MainContact";

const MainContent = () => {
	return (
		<div id="main-page" className="h-screen">
			<Hero />
			<About />
			<MainContact />
			<Footer />
		</div>
	);
};

export default MainContent;
