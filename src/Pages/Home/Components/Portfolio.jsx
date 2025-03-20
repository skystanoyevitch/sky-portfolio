import React from "react";
import { allProjects } from "../../Portfolio/allProjects";

function Portfolio({ terminalStyle = false }) {
  const getProjectStatus = (project) => {
    if (project.active === false) {
      return "COMPLETED";
    }
    return "ONLINE";
  };

  return (
    <div
      className={
        terminalStyle ? "text-terminal-green font-vt" : "text-slate-300"
      }
    >
      {allProjects.map((project, index) => {
        const status = getProjectStatus(project);

        return (
          <div
            key={project.id}
            className={`project-item ${
              index !== 0
                ? "border-t border-terminal-green border-opacity-30 pt-3 mt-3"
                : ""
            }`}
          >
            {terminalStyle ? (
              // Terminal style project listing with 3D hover effect
              <div className="group hover:bg-terminal-green hover:bg-opacity-10 p-3 transition-colors cursor-pointer border border-terminal-green border-opacity-50 hover:border-opacity-100 project-3d-hover">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-terminal-green-dark mr-3 px-2 py-1 bg-terminal-green bg-opacity-10 border border-terminal-green border-opacity-30 project-status">
                        [{status}]
                      </span>
                      <span className="mr-2 text-lg project-name">
                        {project.name}
                      </span>
                    </div>
                    <span className="text-terminal-green-light group-hover:translate-x-1 transition-transform duration-300 ease-in-out project-arrow">
                      ACCESS &gt;
                    </span>
                  </div>
                  {project.description && (
                    <div className="text-sm text-terminal-green-dark mt-2 pl-4 border-l border-terminal-green border-opacity-30 project-description">
                      {project.description}
                    </div>
                  )}
                  {project.language && (
                    <div className="mt-2 flex justify-end">
                      <span className="text-xs text-terminal-green-dark px-2 py-1 border border-terminal-green border-opacity-20 rounded project-language">
                        {project.language}
                      </span>
                    </div>
                  )}
                </a>
              </div>
            ) : (
              // Original style (fallback)
              <ul>
                <li
                  className={`transition-transform w-60 z-0 md:w-full md:max-w-3xl hover:scale-105 hover:underline hover:underline-offset-1 hover:decoration-green-400 hover:decoration-4`}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex justify-between items-center"
                  >
                    <div className="text-2xl md:text-3xl">{project.name}</div>
                  </a>
                </li>
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Portfolio;
