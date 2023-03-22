import React from "react";
import { useInView } from "react-intersection-observer";

import WebsiteIcon from "../../../images/website.svg";
import CreativeIcon from "../../../images/creative-team.svg";
import WordPressIcon from "../../../images/wordpress-icon.svg";

const aboutSectionVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

function FeaturedProjects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <section
      ref={ref}
      variants={aboutSectionVariant}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      className="container mx-auto px-8 py-32 lg:py-0 lg:h-screen"
    >
      <div className="mb-6 lg:mb-16 md:text-center container mx-auto max-w-lg">
        <h1 className="text-2xl lg:text-4xl font-poppins font-bold text-gray-700 pb-4">
          What can we do for you <span className="text-[#e75d48]">?</span>
        </h1>
        <p className="">
          below is the main services we offer that can help bring your idea to
          life on the web, or if you are looking for something specific you can
          contact us and we would love to help you out.
        </p>
      </div>

      <div className="flex flex-col space-y-10 md:space-y-0 md:flex md:flex-row md:space-x-6 xl:space-x-0 xl:justify-evenly">
        <div className="md:w-1/3 lg:w-80 p-8 md:p-6 bg-slate-50 border-[#e75d48] border-2 shadow-shadowNeo rounded-xl text-center">
          <img src={CreativeIcon} alt="" srcset="" className="" />
          <div className="">
            <h1 className="text-xl pb-6 lg:text-2xl lg:pb-4 font-poppins font-semibold text-gray-700">
              Web Design
            </h1>
            <p className="text-sm lg:text-md font-poppins font-lite">
              Stand out from the crowded market with a design tailored to your
              business, custom built using the latest UI and UX design
              principles that results in an engaging website that you and your
              visitors will love.
            </p>
          </div>
        </div>
        <div className="md:w-1/3 lg:w-80 p-8 md:p-6 bg-slate-50 border-[#e75d48] border-2 shadow-shadowNeo rounded-xl text-center">
          <img src={WebsiteIcon} alt="website" />

          <div className="">
            <h1 className=" text-xl lg:text-2xl pb-4 lg:pb-4 font-poppins font-semibold text-gray-700">
              Web Development
            </h1>
            <p className="text-sm lg:text-md font-poppins font-lite">
              Enjoy a Custom Built website using the latest technologies with an
              emphasis on performance and security to get your business up and
              running on the web.
            </p>
          </div>
        </div>
        <div className="md:w-1/3 lg:w-80 p-8 md:p-6 bg-slate-50 border-[#e75d48] border-2 shadow-shadowNeo rounded-xl">
          <img src={WordPressIcon} alt="" srcset="" className="" />
          <div className="">
            <h1 className="text-center text-xl pb-4 lg:text-2xl lg:pb-4 font-poppins font-semibold text-gray-700">
              WordPress
            </h1>
            <p className="text-sm lg:text-md font-poppins font-lite text-center">
              From custom designs that are mobile responsive to maintenance and
              repairs to get your site back like new again, worry free.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;
