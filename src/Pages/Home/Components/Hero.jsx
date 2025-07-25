// Hero.jsx - Minimalist One-Page Portfolio
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { allProjects } from "../../Portfolio/allProjects";

function Hero() {
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { ref: projectsRef, inView: projectsInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const projectVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen w-full bg-background text-text-primary">
      {/* Hero Section */}
      <motion.div
        ref={heroRef}
        variants={containerVariants}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        className="container mx-auto px-6 sm:px-8 pt-20 pb-24"
      >
        <div className="max-w-3xl mx-auto text-center">
          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 tracking-tight leading-tight"
          >
            <span className="block text-text-primary">SKY</span>
            <span className="block text-text-secondary">STANOYEVITCH</span>
          </motion.h1>

          {/* Role */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-text-muted mb-8 font-medium"
          >
            Full-Stack Developer & Designer
          </motion.p>

          {/* Brief Description */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed"
          >
            I create digital experiences that blend clean design with robust
            functionality. Focused on building applications that are both
            beautiful and performant.
          </motion.p>
        </div>
      </motion.div>

      {/* Projects Section */}
      <motion.div
        ref={projectsRef}
        variants={containerVariants}
        initial="hidden"
        animate={projectsInView ? "visible" : "hidden"}
        className="container mx-auto px-6 sm:px-8 pb-20"
      >
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl font-semibold mb-12 text-text-primary text-center"
          >
            Selected Work
          </motion.h2>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {allProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={projectVariants}
                className="group"
              >
                <div className="bg-surface rounded-xl p-5 hover:bg-surface-hover transition-all duration-300 h-full flex flex-col">
                  {/* Project Image Placeholder */}
                  <div className="aspect-square bg-surface-elevated rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                    {project.thumbnail ? (
                      <img
                        src={project.thumbnail}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-10 h-10 bg-text-dim rounded-lg flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-background"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-sm font-semibold text-text-primary mb-3 group-hover:text-accent transition-colors duration-300 line-clamp-2 leading-snug">
                      {project.name}
                    </h3>

                    <p className="text-xs text-text-secondary mb-4 leading-relaxed flex-1 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technology */}
                    {project.language && (
                      <div className="mb-3">
                        <span className="px-2 py-1 bg-surface-elevated text-text-muted text-xs rounded-md">
                          {project.language}
                        </span>
                      </div>
                    )}

                    {/* Links */}
                    <div className="flex gap-3 text-xs mt-auto">
                      {project.link && project.link !== "/" && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-primary hover:text-accent transition-colors duration-300 font-medium"
                        >
                          View →
                        </a>
                      )}
                      {project.to && project.to !== "/" && (
                        <a
                          href={project.to}
                          className="text-text-secondary hover:text-text-primary transition-colors duration-300 font-medium"
                        >
                          More →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
