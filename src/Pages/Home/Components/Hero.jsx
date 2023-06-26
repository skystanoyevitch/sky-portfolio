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
        <div className="container mx-auto flex flex-col lg:justify-center md:text-center lg:flex-row p-8 lg:p-8 xl:p-0 lg:h-full">
          <div className="flex flex-col justify-center container mx-auto max-w-sm md:max-w-lg lg:min-w-full">
            <div>
              <h1 className="text-4xl md:text-7xl xl:text-9xl font-caveat xl:h-36 font-bold animate-text bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-indigo-500 to-[#e75d48]">
                Sky Stanojevic
              </h1>
              <p className="text-md md:text-xl font-light py-4 my-4 lg:text-2xl tracking-wide text-[#9CCDE9]">
                Frontend Developer{" "}
                <span className="text-[#e75d48] font-normal"> | </span> Designer
              </p>
            </div>

            <div className="md:flex md:justify-center">
              <a href="#section-contact" onClick={(e) => e.preventDefault}>
                <button className="rounded-md flex py-1 px-2 md:p-2 lg:px-6 lg:py-2 text-sm md:text-base bg-gradient-to-r from-cyan-500 via-indigo-500 to-[#e75d48] transition ease-in-out hover:scale-125 duration-300 text-white">
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
