import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/", { replace: true });
  }, [navigate]);

  return (
    <div className="w-screen h-96 flex flex-col justify-center md:h-screen">
      <div className="lg:h-full">
        <div className="container mx-auto flex flex-col lg:justify-center text-center lg:flex-row p-8 lg:p-8 xl:p-0 lg:h-full">
          <div className="flex flex-col justify-center container mx-auto max-w-sm md:max-w-md lg:max-w-xl">
            <h1 className="md:h-40 text-6xl md:text-9xl font-poppins font-bold animate-text bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-indigo-500 to-[#e75d48]">
              Sky
            </h1>
            <h3 className="text-4xl md:text-5xl font-poppins font-semibold md:h-20 animate-text bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-indigo-500 to-[#e75d48]">
              Stanojevic
            </h3>
            <p className="text-md font-light py-4 lg:text-2xl font-poppins text-gray-800">
              Frontend Developer{" "}
              <span className="text-[#e75d48] font-normal"> | </span> Designer
            </p>
            <div className="flex justify-center">
              <a href="#section-contact" onClick={(e) => e.preventDefault}>
                <button className="rounded-full flex fill-white hover:fill-orange-500 hover:bg-white hover:text-[#e75d48] hover:border-2 hover:border-[#e75d48] bg-[#e75d48] border-2 border-[#e75d48] py-1 px-2 md:p-2 lg:px-6 lg:py-2 text-white text-sm md:text-base font-poppins font-semibold">
                  Contact
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
