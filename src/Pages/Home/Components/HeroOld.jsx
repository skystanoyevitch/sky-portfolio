// Hero.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Portfolio from "./Portfolio";

function Hero() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("about");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { ref: inViewRef, inView: isInView } = useInView({ 
    threshold: 0.2,
    triggerOnce: true 
  });
  const controls = useAnimation();

  useEffect(() => {
    navigate("/", { replace: true });
  }, [navigate]);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleSwipe = (event, info) => {
    if (info.offset.x > 100) {
      setActiveTab("about");
    } else if (info.offset.x < -100) {
      setActiveTab("work");
    }
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

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <motion.div
      ref={inViewRef}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="w-full py-12 px-6 relative"
    >
      {/* Mouse follower effect */}
      <div
        className="fixed pointer-events-none z-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
        }}
      />

      <div className="container mx-auto flex flex-col max-w-7xl relative z-10">
        {/* Main Hero Section */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="text-center mb-12">
            {/* Animated greeting */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block"
            >
              <span className="inline-block px-4 py-2 bg-surface-elevated border border-border rounded-full text-text-secondary text-sm font-medium mb-6">
                <span className="inline-block w-2 h-2 bg-accent-secondary rounded-full mr-2 animate-pulse"></span>
                Available for work
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              variants={itemVariants}
              className="heading-primary gradient-text mb-6"
            >
              Sky Stanoyevitch
            </motion.h1>

            {/* Subtitle with typewriter effect */}
            <motion.div
              variants={itemVariants}
              className="heading-secondary text-text-secondary mb-8"
            >
              <div className="flex items-center justify-center gap-2 flex-wrap">
                <span>App Developer</span>
                <span className="text-accent">•</span>
                <span>Designer</span>
                <span className="text-accent">•</span>
                <span>Creator</span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="body-large max-w-3xl mx-auto mb-8 leading-relaxed"
            >
              I create digital experiences that blend beautiful design with
              clean, efficient code. Passionate about technology and the power
              it holds to transform ideas into reality.
            </motion.p>

            {/* Location and CTA */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
            >
              <div className="flex items-center gap-2 text-text-secondary">
                <svg
                  className="w-5 h-5 text-accent"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium">San Diego, CA</span>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
                onClick={() => setActiveTab("work")}
              >
                View My Work
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="tab-navigation max-w-md mx-auto">
            <button
              onClick={() => setActiveTab("about")}
              className={`tab-button ${activeTab === "about" ? "active" : ""}`}
            >
              About Me
            </button>
            <button
              onClick={() => setActiveTab("work")}
              className={`tab-button ${activeTab === "work" ? "active" : ""}`}
            >
              My Work
            </button>
          </div>

          {/* Mobile swipe indicator */}
          <div className="flex justify-center mt-4 md:hidden">
            <div className="flex items-center gap-2 text-text-muted text-sm">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16l4-4m0 0l4-4m-4 4H3m18 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Swipe to navigate</span>
            </div>
          </div>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          className="min-h-[60vh]"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleSwipe}
          dragElastic={0.2}
        >
          {activeTab === "about" && (
            <motion.div
              key="about"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="glass p-8 rounded-3xl"
            >
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Content */}
                  <div>
                    <h2 className="heading-secondary text-text-primary mb-6">
                      Building Digital Experiences
                    </h2>

                    <div className="space-y-6 text-text-secondary">
                      <p className="body-large">
                        With a passion for both design and development, I create
                        applications that not only look great but perform
                        exceptionally. My focus is on user experience, clean
                        code, and innovative solutions.
                      </p>

                      <p className="body-large">
                        I believe that great software comes from understanding
                        both the technical requirements and the human needs
                        behind every project.
                      </p>
                    </div>

                    {/* Skills */}
                    <div className="mt-8">
                      <h3 className="text-lg font-semibold text-text-primary mb-4">
                        Technologies I work with
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "React",
                          "Node.js",
                          "TypeScript",
                          "Tailwind CSS",
                          "Firebase",
                          "MongoDB",
                          "React Native",
                        ].map((tech) => (
                          <span key={tech} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Visual Element */}
                  <div className="relative">
                    <div className="relative z-10 glass-subtle p-8 rounded-2xl">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-light rounded-xl flex items-center justify-center">
                            <svg
                              className="w-6 h-6 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-text-primary">
                              Quality Focus
                            </h4>
                            <p className="text-text-secondary text-sm">
                              Clean, maintainable code
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-accent-secondary to-accent-tertiary rounded-xl flex items-center justify-center">
                            <svg
                              className="w-6 h-6 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                              />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-text-primary">
                              Performance
                            </h4>
                            <p className="text-text-secondary text-sm">
                              Optimized user experiences
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-accent-tertiary to-accent rounded-xl flex items-center justify-center">
                            <svg
                              className="w-6 h-6 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                              />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-text-primary">
                              User-Centered
                            </h4>
                            <p className="text-text-secondary text-sm">
                              Intuitive, accessible design
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Background decoration */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-secondary/20 rounded-full blur-xl"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "work" && (
            <motion.div
              key="work"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              <Portfolio />
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Hero;
