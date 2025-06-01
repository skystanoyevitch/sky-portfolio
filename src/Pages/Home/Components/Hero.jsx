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
          {/* Header section */}
          <div className="">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-sans text-text mb-2">
              Sky Stanoyevitch
            </h1>
            <p className="text-md md:text-lg my-4">APP DEVELOPER • DESIGNER</p>
            {/* Location */}

            <div className="flex items-center">
              <span className="text-text text-sm font-medium">
                San Diego, CA
              </span>
            </div>
          </div>
          <hr className="my-8 md:my-12 border-gray-300 dark:border-gray-600" />{" "}
          {/* Added hr */}
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
