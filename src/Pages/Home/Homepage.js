import Hero from "./Components/Hero";
import FeaturedProjects from "./Components/FeaturedProjects";
import OurWork from "./Components/OurWork";
import ContactComponent from "./Components/ContactComponent";

const Homepage = () => {
	return (
		<div className="bg-shapesBg">
			<Hero />
			<FeaturedProjects />
			<OurWork />
			<ContactComponent />
		</div>
	);
};

export default Homepage;
