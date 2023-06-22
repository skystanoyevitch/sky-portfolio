import React from "react";

function AboutMe() {
  return (
    <>
      <section className="container mx-auto w-4/5 lg:w-2/3 md:flex md:flex-row md:justify-center mb-20 divide-x-2 ">
        <div className="md:flex md:flex-col md:justify-center md:w-1/2">
          <h2 className="text-2xl md:text-4xl font-poppins font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-indigo-500 to-[#e75d48]">
            Some Info about me...
          </h2>
          <p className="md:text-lg text-[#e75d48] font-light font-poppins">
            San Diego, CA
          </p>
          <p className="text-md font-light pt-4 pr-5 lg:text-2xl tracking-wide text-[#9CCDE9]">
            Software engineer in the field of technology specializing in the
            Front-End programming as well as UI/UX Design.
          </p>
        </div>
        <div className="">
          <div className="bg-profileImg h-60 w-60 mt-4 md:mt-0 md:h-60 md:w-60 bg-cover bg-center bg-no-repeat md:ml-6"></div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
