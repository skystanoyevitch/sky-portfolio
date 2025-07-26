// Hero.jsx - Minimalist One-Page Portfolio
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { allProjects } from "../../Portfolio/allProjects";
import DarkModeToggle from "../../../components/DarkModeToggle";

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
    <div className="min-h-screen w-full bg-gradient-mist dark:bg-gradient-dark-mist text-text-primary dark:text-dark-text-primary transition-colors duration-300">
      {/* Dark Mode Toggle */}
      <DarkModeToggle />

      {/* Hero Section */}
      <motion.div
        ref={heroRef}
        variants={containerVariants}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        className="container mx-auto px-6 sm:px-8 pt-24 pb-32 relative"
      >
        {/* Subtle background accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-coastal opacity-5 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-display mb-2 tracking-tight leading-loose py-4"
          >
            <span className="block text-text-primary dark:text-dark-text-primary font-title">
              Sky
            </span>
            <span className="block h-28 bg-gradient-ocean bg-clip-text text-transparent font-title">
              Stanoyevitch
            </span>
          </motion.h1>

          {/* Role */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-accent-secondary mb-8 font-medium"
          >
            Full-Stack Developer & Designer
          </motion.p>

          {/* Brief Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto leading-relaxed"
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
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-2xl font-medium mb-12 text-text-primary dark:text-dark-text-primary text-center"
          >
            Work
          </motion.h2>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {allProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={projectVariants}
                className="group"
              >
                <div className="bg-surface dark:bg-dark-surface rounded-2xl p-6 shadow-card hover:shadow-hover transition-all duration-300 h-full flex flex-col border border-border dark:border-dark-border">
                  {/* Project Image Placeholder */}
                  <div className="aspect-square bg-gradient-to-br from-sandiego-mist to-surface-elevated dark:from-dark-surface-elevated dark:to-dark-surface-tertiary rounded-xl mb-4 overflow-hidden flex items-center justify-center">
                    {project.thumbnail ? (
                      <img
                        src={project.thumbnail}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-12 h-12 bg-gradient-ocean rounded-xl flex items-center justify-center shadow-sm">
                        <svg
                          className="w-6 h-6 text-white"
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
                    <h3 className="text-base font-semibold text-text-primary dark:text-dark-text-primary mb-3 group-hover:text-accent transition-colors duration-300 line-clamp-2 leading-snug">
                      {project.name}
                    </h3>

                    {/* Links */}
                    <div className="flex gap-4 text-sm mt-auto">
                      {project.link && project.link !== "/" && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:text-accent-secondary transition-colors duration-300 font-medium flex items-center gap-1"
                        >
                          View
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      )}
                      {project.to && project.to !== "/" && (
                        <a
                          href={project.to}
                          className="text-text-muted hover:text-text-primary transition-colors duration-300 font-medium"
                        >
                          Learn More
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
