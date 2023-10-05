import React, { useState } from "react";
import { allProjects } from "./allProjects";

function Portfolio() {
  const [buttonOpen, setButtonOpen] = useState({});

  const handleClick = (id) => {
    setButtonOpen((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      <div className="h-screen text-white flex flex-col justify-center">
        <div className="h-full py-24 md:pt-0 md:h-1/2 container mx-auto w-80 md:w-full md:max-w-2xl lg:max-w-3xl space-y-16">
          <a href="/" className="text-5xl">
            👈
          </a>

          {allProjects.map((project) => {
            return (
              <ul className="">
                <li
                  key={project.id}
                  className={` transition-all w-80 z-0 md:w-full md:max-w-3xl hover:scale-105 hover:underline hover:underline-offset-8`}
                >
                  <a
                    href={project.link} target="blank_"
                    className=" w-full flex justify-between items-center"
                  >
                    <div className="font-caveat text-lg md:text-2xl lg:text-4xl text-neutral-300">
                      {project.name} 🡽
                    </div>
                  </a>

                  {/* {buttonOpen[project.id] && (
                    <div className="md:max-w-lg m-8">
                      <p className="text-sm md:text-lg font-poppins mb-4 md:mb-8">
                        {project.description}
                      </p>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm md:text-md font-poppins bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-indigo-500 to-[#e75d48]"
                      >
                        See more...
                      </a>
                    </div>
                  )} */}

                  {/* <a href={project.to} target="blank">
										<div
											className={`${
												buttonOpen[project.id]
													? "h-1/2 md:h-1/2 m-8"
													: "h-0"
											} ${
												project.thumbnail
											}md:bg-top rounded-md transition-all`}
										></div>
									</a> */}
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Portfolio;
