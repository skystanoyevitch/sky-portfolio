import Hero from "./Components/Hero";
import Footer from "../../Layout/Navigation/Footer";

const Homepage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Hero />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
