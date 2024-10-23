import { allProjects } from "../../Portfolio/allProjects";

function Portfolio() {
  return (
    <>
      <div className="">
        {allProjects.map((project) => {
          return (
            <ul className="text-slate-300">
              <li
                key={project.id}
                className={` transition-transform w-60 z-0 md:w-full md:max-w-3xl hover:scale-105 hover:underline hover:underline-offset-1 hover:decoration-green-400 hover:decoration-4`}
              >
                <a
                  href={project.link}
                  target="blank_"
                  className="w-full flex justify-between items-center"
                >
                  <div className="text-3xl md:text-3xl">{project.name}</div>
                </a>
              </li>
            </ul>
          );
        })}
      </div>
    </>
  );
}

export default Portfolio;
