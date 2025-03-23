// Portfolio.jsx
import React from "react";
import { allProjects } from "../../Portfolio/allProjects";

function Portfolio() {
  const getProjectStatus = (project) => {
    if (project.active === false) {
      return "COMPLETED";
    }
    return "ACTIVE";
  };

  // Define technology tags for each project
  const projectTechnologies = {
    1: ["React", "Tailwind", "GSAP"],
    2: ["React", "Next.js", "Firebase"],
    3: ["JavaScript", "CSS3", "HTML5"],
    4: ["React", "Node.js", "MongoDB"],
  };

  return (
    <div className="space-y-4">
      {allProjects.map((project) => {
        const status = getProjectStatus(project);
        const technologies = projectTechnologies[project.id] || [];

        return (
          <div
            key={project.id}
            className="bg-primary-dark rounded-lg border border-border hover:border-accent transition-all duration-300 overflow-hidden hover:shadow-autumn-lg transform hover:-translate-y-1"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4"
              aria-label={`View ${project.name} project`}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold text-secondary">
                  {project.name}
                </h3>
                <span
                  className={`text-xs px-3 py-1 rounded-full ${
                    status === "ACTIVE"
                      ? "bg-accent bg-opacity-15 text-gray-700"
                      : "bg-text-secondary bg-opacity-15 text-text-secondary-dark"
                  }`}
                  role="status"
                >
                  {status}
                </span>
              </div>

              {project.description && (
                <p className="text-text-secondary text-sm mb-4">
                  {project.description}
                </p>
              )}

              {/* Technology tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {technologies.map((tech, i) => (
                  <span
                    key={`${project.id}-${tech}`}
                    className="text-xs px-3 py-1 rounded-md bg-secondary bg-opacity-10 text-secondary border border-secondary border-opacity-20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-end pt-2 border-t border-border mt-2">
                <span className="text-accent text-sm flex items-center hover:underline">
                  View Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Portfolio;
