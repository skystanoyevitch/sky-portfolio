import React, { useEffect, useRef } from "react";
import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

// Other Imports
import { gsap } from "gsap";

function Hero() {
  const navigate = useNavigate();
  const comp = useRef();
  const tl = useRef();

  useEffect(() => {
    navigate("/", { replace: true });
  }, [navigate]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap
        .timeline()
        .fromTo(
          ".heyo",
          { opacity: 0, ease: 0.2, duration: 1 },
          { opacity: 1, ease: 0.2, duration: 1 }
        )
        .fromTo(
          ".box",
          { opacity: 0, ease: 0.2, duration: 1 },
          { opacity: 1, ease: 0.2, duration: 1 }
        );
    }, comp);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col justify-center md:h-screen">
      <div className="lg:h-full">
        <div className="container mx-auto flex flex-col lg:justify-center lg:flex-row p-8 lg:p-8 xl:p-0 lg:h-full">
          <div
            ref={comp}
            className=" flex flex-col justify-center space-y-4 container mx-auto max-w-sm md:max-w-lg lg:max-w-6xl"
          >
            <div className="box">
              <div className="font-bold pb-4 bg-clip-text text-transparent font-cutiveMono text-[#FF6036]">
                <span className="text-4xl md:text-5xl xl:text-6xl lg:text-7xl text-gray-800">
                  Sky Stanojevic
                </span>
                <br />{" "}
                <span className="text-4xl md:text-5xl xl:text-6xl lg:text-7xl font-bold">
                  Doing things with a computer and keyboard.{" "}
                </span>
              </div>
              <div className="text-white transition-all ease-in-out text-sm md:text-base font-sans font-semibold flex space-x-4 pt-2">
                <a
                  href="/portfolio"
                  class="relative inline-block text-lg group"
                >
                  <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                    <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                    <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                    <span class="relative">See My Stuff</span>
                  </span>
                  <span
                    class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                    data-rounded="rounded-lg"
                  ></span>
                </a>

                <a
                  href="https://twitter.com/Sky_webdev"
                  class="relative inline-block text-lg group"
                >
                  <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                    <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                    <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                    <span class="relative">Hit Me Up</span>
                  </span>
                  <span
                    class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                    data-rounded="rounded-lg"
                  ></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
