import React, { useEffect, useRef } from "react";
import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

// Other Imports
import { gsap } from "gsap";
import Portfolio from "./Portfolio";

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
    <div className="w-full h-screen flex flex-col justify-center md:h-screen">
      <div className="lg:h-full">
        <div className="container mx-auto flex flex-col lg:justify-center lg:flex-row p-8 lg:p-8 xl:p-0 lg:h-full">
          <div
            ref={comp}
            className=" flex flex-col justify-center space-y-4 container mx-auto max-w-sm md:max-w-lg lg:max-w-6xl"
          >
            <div className="box font-j15">
              <div className="pb-4 font-j15">
                <span className="text-3xl md:text-5xl xl:text-6xl lg:text-7xl text-slate-300">
                  SKY STANOJEVIC
                </span>
                <Portfolio />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
