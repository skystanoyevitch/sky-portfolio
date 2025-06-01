// Hero.jsx
import React, { useEffect } from "react"; // Removed useState
import { useNavigate } from "react-router-dom";
import Portfolio from "./Portfolio";

function Hero() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/", { replace: true });
  }, [navigate]);

  return (
    <div className="w-full min-h-screen bg-primary py-8 px-4">
      <div className="container mx-auto h-full flex flex-col max-w-5xl">
        <div className="overflow-hidden">
          {/* Header section */}
          <div className="">
            <h1 className="text-6xl md:text-7xl lg:text-9xl font-serif text-text mb-2">
              Sky Stanoyevitch
            </h1>
            <p className="text-md md:text-lg mb-1">APP DEVELOPER • DESIGNER</p>
            {/* Location */}
            <div className="flex space-x-4 mt-2">
              <div className="flex items-center">
                <span className="text-text text-sm font-medium">
                  San Diego, CA
                </span>
              </div>
            </div>
          </div>

          <div className="">
            {/* Projects Section */}
            <div className="rounded-lg">
              <h2 className="text-xl font-sans text-secondary my-6">Work</h2>
              <Portfolio />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
