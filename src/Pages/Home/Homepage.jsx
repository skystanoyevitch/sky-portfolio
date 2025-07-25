// Homepage.jsx
import Hero from "./Components/Hero";
import Footer from "../../Layout/Navigation/Footer";

const Homepage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background dark:bg-dark-background relative overflow-hidden">
      {/* Background gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background-secondary to-background dark:from-dark-background dark:via-dark-background-secondary dark:to-dark-background opacity-90"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-secondary/5 rounded-full blur-3xl"></div>

      {/* Main content */}
      <div className="relative z-10 flex-grow container mx-auto px-4 py-8">
        <Hero />
      </div>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
