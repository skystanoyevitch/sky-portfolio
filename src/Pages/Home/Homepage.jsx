// Homepage.jsx
import Hero from "./Components/Hero";
import Footer from "../../Layout/Navigation/Footer";

const Homepage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-autumn">
      <div className="flex-grow">
        <Hero />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
