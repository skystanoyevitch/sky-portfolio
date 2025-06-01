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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Increased gap for better spacing */}
      {allProjects.map((project) => {
        const technologies = projectTechnologies[project.id] || [];

        return (
          <div
            key={project.id}
            className={`bg-primary transition-all duration-300 
              overflow-hidden shadow-am hover:shadow-lg shadow-slate-500 hover:shadow-slate-300
              transform hover:-translate-y-2 border border-slate-600`}
          >
            <a
              href={project.link}
              rel="noopener noreferrer"
              className="block p-6"
              aria-label={`View ${project.name} project`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-audiowide text-secondary-dark relative">
                  {project.name}
                  <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-accent"></span>
                </h3>
              </div>

              {project.description && (
                <p className="text-text-secondary font-mono text-base mb-5 leading-relaxed">
                  {project.description}
                </p>
              )}

              {/* Technology tags with improved styling */}
              <div className="flex flex-wrap gap-2 mb-5">
                {technologies.map((tech) => (
                  <span
                    key={`${project.id}-${tech}`}
                    className="text-xs px-3 py-1 rounded-full bg-secondary bg-opacity-5 
                      text-secondary-dark border border-secondary border-opacity-10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-end pt-3 mt-3 border-t border-border">
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
