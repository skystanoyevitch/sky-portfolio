import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/", { replace: true });
  }, [navigate]);

  return (
    <div className="w-screen lg:h-screen">
      <div className="lg:h-full">
        <div className="container mx-auto flex flex-col lg:justify-center text-center lg:flex-row p-8 lg:p-8 xl:p-0 lg:h-full">
          <div className="flex flex-col justify-center">
            <h1 className="lg:h-40 text-5xl md:text-6xl lg:text-9xl font-poppins font-bold animate-text bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-indigo-500 to-[#e75d48]">
              Sky
            </h1>
            <h3 className=" lg:text-6xl font-poppins font-semibold lg:h-20 animate-text bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-indigo-500 to-[#e75d48]">
              Stanojevic
            </h3>
            <p className="text-md font-light py-4 lg:text-2xl font-poppins text-gray-800">
              Frontend Developer | Designer
            </p>
            <div className="flex justify-center">
              <a href="#section-contact" onClick={(e) => e.preventDefault}>
                <button className="rounded-full flex fill-white hover:fill-orange-500 hover:bg-white hover:text-[#e75d48] hover:border-2 hover:border-[#e75d48] bg-[#e75d48] border-2 border-[#e75d48] p-2 lg:px-6 lg:py-2 text-white font-poppins font-semibold">
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
