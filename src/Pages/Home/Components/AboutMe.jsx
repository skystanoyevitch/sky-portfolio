import React from "react";

function AboutMe() {
  return (
    <>
      <section className="container mx-auto w-4/5 lg:w-2/3 md:flex md:flex-col md:items-center mb-20">
        <div className="md:flex md:flex-col md:justify-center md:w-2/3 text-center mb-8 md:mb-16">
          <h2 className="text-xl md:text-4xl font-poppins font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-indigo-500 to-[#e75d48]">
            About Me
          </h2>
          <p className="text-sm md:text-lg text-[#e75d48] font-light font-poppins">
            - San Diego, CA -
          </p>
          <p className="text-md font-light pt-4 lg:text-2xl tracking-wide text-[#9CCDE9]">
            I am a Software engineer in the field of technology specializing in
            the Front-End programming as well as UI/UX Design.
          </p>
        </div>
        <div className="flex flex-col space-y-8 md:space-y-6 lg:space-y-0 lg:flex-row lg:space-x-8 font-poppins">
          <div className="text-white text-center bg-gray-800 p-8 rounded-md">
            <h2 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-indigo-500 to-[#e75d48]">
              UI | UX Design
            </h2>
            <ul className="pt-4">
              <li>User Interface Design</li>
              <li>UX Principles</li>
              <li>Prototyping | wireframing</li>
            </ul>
          </div>
          <div className="text-white text-center bg-gray-800 p-8 rounded-md">
            <h2 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-indigo-500 to-[#e75d48]">
              Frontend Development
            </h2>
            <ul className="pt-4">
              <li>HTML | CSS</li>
              <li>JavaScript</li>
              <li>React | NodeJS</li>
            </ul>
          </div>
          <div className="text-white text-center bg-gray-800 p-8 rounded-md">
            <h2 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-indigo-500 to-[#e75d48]">
              CMS Design | Development
            </h2>
            <ul className="pt-4">
              <li>WordPress develpment</li>
              <li>Elementor Design</li>
              <li>Content Creation</li>
            </ul>
          </div>

          {/* <div className="rounded-md bg-profileImg h-40 w-40 mt-4 md:mt-0 md:h-60 md:w-60 bg-cover bg-center bg-no-repeat md:ml-6"></div> */}
        </div>
      </section>
    </>
  );
}

export default AboutMe;
