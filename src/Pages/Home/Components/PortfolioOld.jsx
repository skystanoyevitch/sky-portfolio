// Portfolio.jsx
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { allProjects } from "../../Portfolio/allProjects";

function Portfolio() {
  const { ref: portfolioRef, inView: isInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Enhanced technology mapping with colors
  const projectTechnologies = {
    1: [
      { name: "React", color: "#61DAFB" },
      { name: "Tailwind", color: "#06B6D4" },
      { name: "GSAP", color: "#88CE02" },
    ],
    2: [
      { name: "React", color: "#61DAFB" },
      { name: "Next.js", color: "#000000" },
      { name: "Firebase", color: "#FFCA28" },
    ],
    3: [
      { name: "JavaScript", color: "#F7DF1E" },
      { name: "CSS3", color: "#1572B6" },
      { name: "HTML5", color: "#E34F26" },
    ],
    4: [
      { name: "React", color: "#61DAFB" },
      { name: "Node.js", color: "#339933" },
      { name: "MongoDB", color: "#47A248" },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <motion.div
      ref={portfolioRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="w-full"
    >
      {/* Section Header */}
      <motion.div variants={cardVariants} className="text-center mb-12">
        <h2 className="heading-secondary text-text-primary mb-4">
          Featured Projects
        </h2>
        <p className="body-large text-text-secondary max-w-2xl mx-auto">
          A selection of projects that showcase my skills in development,
          design, and problem-solving.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="project-grid">
        {allProjects.map((project, index) => {
          const technologies = projectTechnologies[project.id] || [];

          return (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="modern-card floating-card h-full">
                <a
                  href={project.link}
                  rel="noopener noreferrer"
                  className="flex flex-col p-8 h-full"
                  aria-label={`View ${project.name} project`}
                >
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                        {project.name}
                      </h3>

                      {/* Project Status/Type Indicator */}
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full mb-4">
                        {project.id === 1 && (
                          <>
                            <div className="w-2 h-2 bg-accent-secondary rounded-full animate-pulse"></div>
                            Live Project
                          </>
                        )}
                        {project.id !== 1 && (
                          <>
                            <div className="w-2 h-2 bg-accent-tertiary rounded-full"></div>
                            Demo Available
                          </>
                        )}
                      </div>
                    </div>

                    {/* Project Icon/Logo placeholder */}
                    <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent-secondary/20 rounded-lg flex items-center justify-center ml-4">
                      <svg
                        className="w-6 h-6 text-accent"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Project Description */}
                  {project.description && (
                    <p className="text-text-secondary leading-relaxed mb-6 flex-grow">
                      {project.description}
                    </p>
                  )}

                  {/* Technology Stack */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech, techIndex) => (
                        <motion.span
                          key={`${project.id}-${tech.name}`}
                          className="tech-tag"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {tech.name}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Project Footer */}
                  <div className="pt-4 mt-auto border-t border-border group-hover:border-accent/30 transition-colors duration-300">
                    <div className="flex items-center justify-between">
                      <span className="text-text-muted text-sm">
                        {project.language} • {new Date().getFullYear()}
                      </span>

                      <div className="flex items-center text-accent group-hover:text-accent-light transition-colors duration-300">
                        <span className="text-sm font-medium mr-2">
                          View Project
                        </span>
                        <motion.svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          initial={{ x: 0 }}
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </motion.svg>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Call to Action */}
      <motion.div variants={cardVariants} className="text-center mt-16">
        <div className="glass-subtle p-8 rounded-2xl inline-block">
          <h3 className="text-xl font-semibold text-text-primary mb-4">
            Interested in working together?
          </h3>
          <p className="text-text-secondary mb-6">
            I'm always excited to take on new challenges and create something
            amazing.
          </p>
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              (window.location.href = "mailto:skystanoyevitch@proton.me")
            }
          >
            Get in Touch
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Portfolio;
