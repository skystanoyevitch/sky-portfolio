// Portfolio.jsx - Modern 2025 Bento Grid Design
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { allProjects } from "../../Portfolio/allProjects";

function Portfolio() {
  const { ref: portfolioRef, inView: isInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Enhanced technology mapping with modern tech stack
  const projectTechnologies = {
    1: [
      { name: "React", color: "#61DAFB", icon: "⚛️" },
      { name: "Tailwind", color: "#06B6D4", icon: "🎨" },
      { name: "Framer Motion", color: "#0055FF", icon: "✨" },
    ],
    2: [
      { name: "React", color: "#61DAFB", icon: "⚛️" },
      { name: "Next.js", color: "#000000", icon: "▲" },
      { name: "Firebase", color: "#FFCA28", icon: "🔥" },
    ],
    3: [
      { name: "JavaScript", color: "#F7DF1E", icon: "⚡" },
      { name: "CSS3", color: "#1572B6", icon: "🎨" },
      { name: "HTML5", color: "#E34F26", icon: "📄" },
    ],
    4: [
      { name: "React", color: "#61DAFB", icon: "⚛️" },
      { name: "Node.js", color: "#339933", icon: "🟢" },
      { name: "MongoDB", color: "#47A248", icon: "🍃" },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.01, -0.05, 0.95],
      },
    },
  };

  const projectLayouts = [
    { gridClass: "lg:col-span-2 lg:row-span-2", size: "large" }, // Strong Habit - Hero project
    { gridClass: "lg:col-span-1 lg:row-span-1", size: "medium" }, // Developer Job Board
    { gridClass: "lg:col-span-1 lg:row-span-1", size: "medium" }, // Get It Done
    { gridClass: "lg:col-span-1 lg:row-span-1", size: "medium" }, // Workout Logger
  ];

  return (
    <motion.div
      ref={portfolioRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="w-full"
    >
      {/* Section Header */}
      <motion.div variants={cardVariants} className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-glass border border-border-glass rounded-full backdrop-blur-xl mb-6">
          <div className="w-2 h-2 bg-accent-secondary rounded-full animate-pulse" />
          <span className="text-text-muted text-sm font-medium">
            Featured Work
          </span>
        </div>

        <h2 className="text-5xl md:text-6xl font-black font-display text-text-primary mb-6">
          Selected{" "}
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
          A curated selection of projects that showcase my expertise in modern
          web development, mobile applications, and user experience design.
        </p>
      </motion.div>

      {/* Bento Grid Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
        {allProjects.map((project, index) => {
          const technologies = projectTechnologies[project.id] || [];
          const layout = projectLayouts[index] || {
            gridClass: "lg:col-span-1",
            size: "medium",
          };

          return (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className={`group ${layout.gridClass}`}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="bg-surface-glass border border-border-glass rounded-3xl backdrop-blur-xl overflow-hidden h-full hover:shadow-bento-hover hover:border-accent/30 transition-all duration-500">
                <a
                  href={project.link}
                  rel="noopener noreferrer"
                  className="flex flex-col h-full p-8"
                  aria-label={`View ${project.name} project`}
                >
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      {/* Project Status Badge */}
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent text-xs font-bold rounded-full mb-4 border border-accent/20">
                        {project.id === 1 && (
                          <>
                            <div className="w-2 h-2 bg-accent-secondary rounded-full animate-pulse" />
                            LIVE PROJECT
                          </>
                        )}
                        {project.id !== 1 && (
                          <>
                            <div className="w-2 h-2 bg-accent-tertiary rounded-full" />
                            DEMO AVAILABLE
                          </>
                        )}
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                        {project.name}
                      </h3>
                    </div>

                    {/* Project Icon */}
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent-secondary/20 rounded-2xl flex items-center justify-center ml-6"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <svg
                        className="w-8 h-8 text-accent"
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
                    </motion.div>
                  </div>

                  {/* Project Image Placeholder */}
                  {layout.size === "large" && (
                    <div className="relative mb-6 h-48 bg-gradient-to-br from-surface-elevated to-surface-hover rounded-2xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
                      <div className="absolute inset-0 bg-gradient-primary opacity-10" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          className="text-6xl"
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          {project.id === 1 ? "💪" : "🚀"}
                        </motion.div>
                      </div>
                    </div>
                  )}

                  {/* Project Description */}
                  <div className="flex-grow">
                    {project.description && (
                      <p className="text-text-secondary leading-relaxed mb-6 text-lg">
                        {project.description}
                      </p>
                    )}

                    {/* Technology Stack */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, techIndex) => (
                          <motion.span
                            key={`${project.id}-${tech.name}`}
                            className="inline-flex items-center gap-2 px-3 py-2 bg-surface-elevated border border-border rounded-xl text-sm font-medium text-text-primary hover:scale-105 transition-transform duration-200"
                            style={{
                              borderColor: `${tech.color}30`,
                              backgroundColor: `${tech.color}10`,
                            }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                              delay: index * 0.1 + techIndex * 0.05,
                            }}
                            whileHover={{
                              backgroundColor: `${tech.color}20`,
                              borderColor: tech.color,
                              y: -2,
                            }}
                          >
                            <span>{tech.icon}</span>
                            {tech.name}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Project Footer */}
                  <div className="pt-6 mt-auto border-t border-border group-hover:border-accent/30 transition-colors duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-text-muted text-sm">
                        <div className="w-2 h-2 bg-accent-secondary rounded-full" />
                        <span>
                          {project.language} • {new Date().getFullYear()}
                        </span>
                      </div>

                      <div className="flex items-center text-accent group-hover:text-accent-light transition-colors duration-300">
                        <span className="text-sm font-semibold mr-2">
                          View Project
                        </span>
                        <motion.svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          initial={{ x: 0 }}
                          whileHover={{ x: 6 }}
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

      {/* Stats Section */}
      <motion.div variants={cardVariants} className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { number: "4+", label: "Projects Completed", icon: "🚀" },
            { number: "100%", label: "Client Satisfaction", icon: "⭐" },
            { number: "24/7", label: "Passionate Developer", icon: "💻" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-surface-glass border border-border-glass rounded-2xl p-6 backdrop-blur-xl text-center hover:shadow-bento-hover transition-all duration-300"
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-text-primary mb-1">
                {stat.number}
              </div>
              <div className="text-text-secondary text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div variants={cardVariants} className="text-center">
        <div className="bg-surface-glass border border-border-glass rounded-3xl p-12 backdrop-blur-xl hover:shadow-bento-hover transition-all duration-500">
          <motion.div
            className="text-4xl mb-6"
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            🤝
          </motion.div>

          <h3 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Let's Build Something{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Amazing
            </span>
          </h3>

          <p className="text-text-secondary mb-8 text-lg max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'm always excited to take on new
            challenges and create exceptional digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="group relative px-8 py-4 bg-gradient-primary text-white font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-glow-primary"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() =>
                (window.location.href = "mailto:skystanoyevitch@proton.me")
              }
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>Get In Touch</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent-purple to-accent-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.05 }}
              />
            </motion.button>

            <motion.button
              className="px-8 py-4 border-2 border-border-glass bg-surface-glass backdrop-blur-xl text-text-primary font-semibold rounded-2xl hover:border-accent hover:bg-accent/10 transition-all duration-300"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() =>
                window.open("https://github.com/skystanoyevitch", "_blank")
              }
            >
              View GitHub
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Portfolio;
