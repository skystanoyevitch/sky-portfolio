import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { VscGithub, VscTwitter } from "react-icons/vsc";

//third party imports
import { FaXTwitter } from "react-icons/fa6";


function Hero() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/", { replace: true });
  }, [navigate]);

  return (
    <div className="w-screen h-120 flex flex-col justify-center md:h-screen">
      <div className="lg:h-full">
        <div className="container mx-auto flex flex-col lg:justify-center lg:flex-row p-8 lg:p-8 xl:p-0 lg:h-full">
          <div className="flex flex-col justify-center space-y-4 container mx-auto max-w-sm md:max-w-lg lg:max-w-6xl">
            <div className="">
              <p className="text-4xl md:text-5xl xl:text-8xl font-sriracha text-neutral-300">
                Heyo!
              </p>
              <div className="text-4xl md:text-5xl xl:text-8xl font-sriracha text-neutral-300">
                i'm{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-indigo-500 to-[#e75d48]">
                  Sky
                </span>
                , Software engineer and Designer
              </div>
            </div>
            <div className="text-white font-mono flex space-x-4">
              <button type="button" className="border rounded-xl py-1 px-2">
                Projects
              </button>
              <a href="dfasdf" type="button" className="border rounded-xl py-1 px-2 flex place-items-center space-x-2">
                <FaXTwitter />
                <div>Contact Me</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
