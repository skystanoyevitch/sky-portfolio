// Homepage.jsx
import Hero from "./Components/Hero";
import Footer from "../../Layout/Navigation/Footer";

const Homepage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-primary">
      <div className="flex-grow container mx-auto px-4 py-8">
        <Hero />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
