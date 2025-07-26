// Hero.jsx - Modern 2025 Portfolio Design
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Portfolio from "./Portfolio";

function Hero() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("hero");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentText, setCurrentText] = useState(0);

  const { ref: inViewRef, inView: isInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const controls = useAnimation();

  // Dynamic text rotation
  const rotatingTexts = [
    "Full-Stack Developer",
    "UI/UX Designer",
    "Mobile App Creator",
    "Problem Solver",
  ];

  useEffect(() => {
    navigate("/", { replace: true });
  }, [navigate]);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Text rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [rotatingTexts.length]);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.01, -0.05, 0.95],
      },
    },
  };

  const textVariants = {
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

  return (
    <motion.div
      ref={inViewRef}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="min-h-screen w-full relative overflow-hidden"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background-secondary to-background-tertiary" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Primary gradient orb */}
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #EC4899 100%)",
            left: `${mousePosition.x * 0.02}%`,
            top: `${mousePosition.y * 0.02}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Secondary gradient orb */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-15 blur-3xl"
          style={{
            background: "linear-gradient(45deg, #10B981 0%, #06B6D4 100%)",
            right: `${mousePosition.x * 0.01}%`,
            bottom: `${mousePosition.y * 0.01}%`,
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100, -20],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Noise overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.015] mix-blend-overlay" />

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-6 py-20 min-h-screen flex flex-col justify-center">
        {/* Navigation Dots */}
        <motion.div
          variants={itemVariants}
          className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4"
        >
          {["hero", "about", "work"].map((section, index) => (
            <motion.button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                activeSection === section
                  ? "bg-accent border-accent scale-125"
                  : "border-border hover:border-accent"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>

        {/* Hero Section */}
        {activeSection === "hero" && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-6xl mx-auto"
          >
            {/* Status Badge */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-surface-glass border border-border-glass rounded-full backdrop-blur-xl">
                <div className="w-2 h-2 bg-accent-secondary rounded-full animate-pulse" />
                <span className="text-text-secondary font-medium">
                  Available for work
                </span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants} className="mb-8">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black font-display mb-4">
                <span className="block bg-gradient-primary bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_auto]">
                  SKY
                </span>
                <span className="block text-text-primary">STANOYEVITCH</span>
              </h1>
            </motion.div>

            {/* Rotating Subtitle */}
            <motion.div
              variants={itemVariants}
              className="mb-12 h-16 flex items-center justify-center"
            >
              <motion.h2
                key={currentText}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="text-2xl md:text-4xl font-semibold text-text-secondary"
              >
                {rotatingTexts[currentText]}
              </motion.h2>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-text-muted max-w-4xl mx-auto mb-16 leading-relaxed"
            >
              Crafting digital experiences that seamlessly blend innovative
              design with cutting-edge technology. Transforming ideas into
              reality, one pixel at a time.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.button
                onClick={() => setActiveSection("work")}
                className="group relative px-8 py-4 bg-gradient-primary text-white font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-glow-primary"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">View My Work</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent-purple to-accent-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.05 }}
                />
              </motion.button>

              <motion.button
                onClick={() => setActiveSection("about")}
                className="group px-8 py-4 border-2 border-border-glass bg-surface-glass backdrop-blur-xl text-text-primary font-semibold rounded-2xl hover:border-accent hover:bg-accent/10 transition-all duration-300"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                About Me
                <motion.span className="inline-block ml-2 transition-transform duration-200 group-hover:translate-x-1">
                  →
                </motion.span>
              </motion.button>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              variants={itemVariants}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex flex-col items-center gap-2 text-text-muted"
              >
                <span className="text-sm font-medium">Scroll</span>
                <div className="w-[1px] h-8 bg-gradient-to-b from-accent to-transparent" />
              </motion.div>
            </motion.div>
          </motion.div>
        )}

        {/* About Section */}
        {activeSection === "about" && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-6xl mx-auto"
          >
            {/* Back Button */}
            <motion.button
              variants={itemVariants}
              onClick={() => setActiveSection("hero")}
              className="mb-8 flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors group"
            >
              <motion.span className="transition-transform duration-200 group-hover:-translate-x-1">
                ←
              </motion.span>
              Back
            </motion.button>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main About Card */}
              <motion.div
                variants={itemVariants}
                className="lg:col-span-2 bg-surface-glass border border-border-glass rounded-xl p-8 backdrop-blur-xl hover:shadow-bento-hover transition-all duration-300"
              >
                <h2 className="text-4xl font-bold text-text-primary mb-6">
                  Building Digital Dreams
                </h2>
                <div className="space-y-4 text-text-secondary text-lg leading-relaxed">
                  <p>
                    With a passion for both design and development, I create
                    applications that not only look stunning but perform
                    exceptionally. My journey spans across full-stack
                    development, UI/UX design, and mobile app creation.
                  </p>
                  <p>
                    I believe great software comes from understanding both
                    technical requirements and human needs behind every project.
                    Every line of code and every design decision is made with
                    the user in mind.
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-text-primary mb-4">
                    Technologies I Love
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { name: "React", color: "#61DAFB" },
                      { name: "Node.js", color: "#339933" },
                      { name: "TypeScript", color: "#3178C6" },
                      { name: "Tailwind", color: "#06B6D4" },
                      { name: "Firebase", color: "#FFCA28" },
                      { name: "MongoDB", color: "#47A248" },
                      { name: "React Native", color: "#61DAFB" },
                    ].map((tech) => (
                      <motion.span
                        key={tech.name}
                        className="px-4 py-2 bg-surface-elevated border border-border rounded-xl text-sm font-medium text-text-primary hover:scale-105 transition-transform duration-200"
                        style={{ borderColor: `${tech.color}30` }}
                        whileHover={{
                          backgroundColor: `${tech.color}20`,
                          borderColor: tech.color,
                        }}
                      >
                        {tech.name}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Location Card */}
              <motion.div
                variants={itemVariants}
                className="bg-surface-glass border border-border-glass rounded-3xl p-6 backdrop-blur-xl hover:shadow-bento-hover transition-all duration-300 flex flex-col justify-center items-center text-center"
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  Based in
                </h3>
                <p className="text-text-secondary">San Diego, CA</p>
                <p className="text-text-muted text-sm mt-1">UTC-8</p>
              </motion.div>

              {/* Experience Card */}
              <motion.div
                variants={itemVariants}
                className="bg-surface-glass border border-border-glass rounded-3xl p-6 backdrop-blur-xl hover:shadow-bento-hover transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
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
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary">
                      Performance
                    </h3>
                    <p className="text-text-muted text-sm">
                      Optimized experiences
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Quality Card */}
              <motion.div
                variants={itemVariants}
                className="lg:col-span-2 bg-surface-glass border border-border-glass rounded-3xl p-6 backdrop-blur-xl hover:shadow-bento-hover transition-all duration-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center"
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    >
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
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary">
                        Quality Focus
                      </h3>
                      <p className="text-text-muted text-sm">
                        Clean, maintainable code
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <motion.div
                      className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                    >
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
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary">
                        User-Centered
                      </h3>
                      <p className="text-text-muted text-sm">
                        Intuitive, accessible design
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Work Section */}
        {activeSection === "work" && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.button
              variants={itemVariants}
              onClick={() => setActiveSection("hero")}
              className="mb-8 flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors group"
            >
              <motion.span className="transition-transform duration-200 group-hover:-translate-x-1">
                ←
              </motion.span>
              Back
            </motion.button>
            <Portfolio />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default Hero;
