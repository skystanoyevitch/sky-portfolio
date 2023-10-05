import { allProjects } from "./allProjects";

function Portfolio() {
  return (
    <>
      <div className="h-screen text-white flex flex-col justify-center">
        <div className="h-full py-24 md:pt-0 md:h-1/2 container mx-auto w-80 md:w-full md:max-w-2xl lg:max-w-3xl space-y-8 md:space-y-10">
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
                    href={project.link}
                    target="blank_"
                    className=" w-full flex justify-between items-center"
                  >
                    <div className="font-bold text-2xl md:text-4xl text-neutral-300">
                      {project.name} <span className="text-cyan-500">🡽</span> 
                    </div>
                  </a>
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
