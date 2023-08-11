import Hero from "./Components/Hero";
import ContactComponent from "./Components/ContactComponent";
import Portfolio from "./Components/Portfolio";
import AboutMe from "./Components/AboutMe";

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
