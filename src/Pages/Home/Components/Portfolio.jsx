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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 -mx-2">
      {/* Adjusted gap and negative margin to accommodate floating card margins */}
      {allProjects.map((project) => {
        const technologies = projectTechnologies[project.id] || [];

        return (
          <div
            key={project.id}
            className={`floating-card bg-primary transition-all duration-500 
              overflow-hidden rounded-lg cursor-pointer group
              hover:border hover:border-accent hover:bg-accent hover:bg-opacity-10
              hover:shadow-2xl active:border-accent active:bg-accent active:bg-opacity-15`}
          >
            <a
              href={project.link}
              rel="noopener noreferrer"
              className="block p-6"
              aria-label={`View ${project.name} project`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-secondary-dark relative group-hover:text-accent transition-colors duration-300">
                  {project.name}
                </h3>
              </div>

              {project.description && (
                <p className="text-text-secondary text-base mb-5 leading-relaxed group-hover:text-text transition-colors duration-300">
                  {project.description}
                </p>
              )}

              {/* Technology tags with improved styling */}
              <div className="flex flex-wrap gap-2 mb-5">
                {technologies.map((tech) => (
                  <span
                    key={`${project.id}-${tech}`}
                    className="text-xs px-3 py-1 rounded-full bg-secondary bg-opacity-5 
                      text-secondary-dark border border-secondary border-opacity-10
                      group-hover:bg-accent group-hover:bg-opacity-10 group-hover:border-accent group-hover:text-accent
                      transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-end pt-3 mt-3 border-t border-border group-hover:border-accent transition-colors duration-300">
                <span className="text-accent text-base flex items-center group">
                  View Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform duration-200"
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
