import Hero from "./Components/Hero";
import FeaturedProjects from "./Components/FeaturedProjects";
import OurWork from "./Components/OurWork";
import ContactComponent from "./Components/ContactComponent";
import Portfolio from "./Components/Portfolio";

const Homepage = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <Hero />
      <FeaturedProjects />
      <OurWork />
      <Portfolio />
      <ContactComponent />
    </div>
  );
};

export default Homepage;
