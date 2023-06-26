import Hero from "./Components/Hero";
// import FeaturedProjects from "./Components/FeaturedProjects";
import OurWork from "./Components/OurWork";
import ContactComponent from "./Components/ContactComponent";
import Portfolio from "./Components/Portfolio";
import AboutMe from "./Components/AboutMe";
// import Portfolio from "./Components/Portfolio";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <AboutMe />
      {/* <OurWork /> */}
      <Portfolio />
      <ContactComponent />
    </div>
  );
};

export default Homepage;
