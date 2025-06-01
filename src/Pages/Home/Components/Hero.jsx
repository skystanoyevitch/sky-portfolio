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
    <div className="w-full py-8 px-4">
      {" "}
      {/* Removed min-h-screen and bg-primary */}
      <div className="container mx-auto flex flex-col max-w-5xl">
        {" "}
        {/* Removed h-full */}
        <div className="overflow-hidden">
          {/* Header section - UPDATED */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-audiowide leading-tight mb-4">
              Sky Stanoyevitch
            </h1>
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-6">
              <p className="text-xl md:text-2xl font-medium text-text mb-2 md:mb-0">
                APP DEVELOPER • DESIGNER
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className="text-text-secondary text-lg">
                  Available for work
                </span>
              </div>
            </div>
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed mb-4">
              I strive to create digital experiences that blend beautiful design
              with clean, efficient code. Passionate about technology and what
              makes it so powerful.
            </p>
            {/* Location with icon */}
            <div className="flex items-center space-x-2">
              <svg
                className="w-4 h-4 text-accent"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-text text-lg font-medium">
                San Diego, CA
              </span>
            </div>
          </div>
          {/* Keep the rest of your existing code the same */}
          <div className="">
            {/* Projects Section */}
            <div className="rounded-lg">
              <h2 className="text-xl font-sans text-secondary mt-12 mb-6 sm:mt-16">
                Work ⎯
              </h2>
              <Portfolio />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
