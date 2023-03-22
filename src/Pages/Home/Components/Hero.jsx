import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Arrows from "../../../icons/Arrows";
// import toast, { Toaster } from "react-hot-toast";
// const notify = () => toast("Oppsies, Coming Soon i promise!");

function Hero() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/", { replace: true });
  }, [navigate]);

  return (
    <div className="w-screen lg:h-screen">
      <div className="lg:h-full">
        <div className="container mx-auto flex flex-col lg:flex-row p-8 lg:p-8 xl:p-0 lg:h-full">
          <div className="flex flex-col flex-1 lg:justify-center">
            <h1 className="text-5xl md:text-6xl lg:text-8xl tracking-wide font-poppins font-bold text-gray-900 animate-text bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-indigo-500 to-[#e75d48]">
              Custom Websites built for you
            </h1>
            <p className="text-md py-4 lg:py-8 lg:text-2xl font-poppins text-gray-800">
              Grow your business with a professional and custom website design
              tailored to your business needs, no copy cats here.
            </p>
            <a href="#section-contact" onClick={(e) => e.preventDefault}>
              <button className="flex rounded-lg fill-white hover:fill-orange-500 hover:bg-white hover:text-[#e75d48] hover:border-2 hover:border-[#e75d48] bg-[#e75d48] border-2 border-[#e75d48] p-2 lg:p-4 text-white font-poppins font-semibold">
                Contact <Arrows />
              </button>
            </a>
          </div>
          <div className="h-80 w-full my-8 md:h-96 md:w-full lg:w-full lg:h-full lg:flex-1 lg:mt-20 bg-heroImg bg-no-repeat"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
