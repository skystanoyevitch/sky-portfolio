// Portfolio.jsx
import React from "react";
import { allProjects } from "../../Portfolio/allProjects";

function Portfolio() {
  // Define technology tags for each project
  const projectTechnologies = {
    1: ["React", "Tailwind", "GSAP"],
    2: ["React", "Next.js", "Firebase"],
    3: ["JavaScript", "CSS3", "HTML5"],
    4: ["React", "Node.js", "MongoDB"],
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Adjusted to md:grid-cols-2 for a more standard grid */}
      {allProjects.map((project) => {
        const technologies = projectTechnologies[project.id] || [];

        // Removed colSpan and rowSpan definitions for a regular grid layout

        return (
          <div
            key={project.id}
            // Removed colSpan and rowSpan from className
            className={`bg-primary-dark hover:bg-primary-light transition-all duration-300 overflow-hidden transform hover:-translate-y-1`}
          >
            <a
              href={project.link}
              rel="noopener noreferrer"
              className="block p-6" // Increased padding
              aria-label={`View ${project.name} project`}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-secondary">
                  {" "}
                  {/* Increased font size */}
                  {project.name}
                </h3>
                {/* Removed status indicator */}
              </div>

              {project.description && (
                <p className="text-text-secondary text-base mb-4">
                  {" "}
                  {/* Increased font size */}
                  {project.description}
                </p>
              )}

              {/* Technology tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {" "}
                {/* Increased margin bottom */}
                {technologies.map((tech) => (
                  <span
                    key={`${project.id}-${tech}`}
                    className="text-sm px-3 py-1 rounded-md bg-secondary bg-opacity-10 text-secondary" // Simplified tag styling
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-end pt-3 mt-3">
                {" "}
                {/* Adjusted padding and margin */}
                <span className="text-accent text-base flex items-center hover:underline">
                  {" "}
                  {/* Increased font size */}
                  View Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1" // Increased icon size
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
