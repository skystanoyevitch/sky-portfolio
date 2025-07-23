// Hero.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Portfolio from "./Portfolio";

function Hero() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("about");

  useEffect(() => {
    navigate("/", { replace: true });
  }, [navigate]);

  const handleSwipe = (event, info) => {
    if (info.offset.x > 100) {
      // Swipe right - go to about tab
      setActiveTab("about");
    } else if (info.offset.x < -100) {
      // Swipe left - go to work tab
      setActiveTab("work");
    }
  };

  return (
    <div className="w-full py-8 px-6">
      <div className="container mx-auto flex flex-col max-w-6xl">
        <div className="overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex border-b border-border mb-8 relative">
            <button
              onClick={() => setActiveTab("about")}
              className={`px-8 py-4 font-semibold text-lg transition-all duration-300 ${
                activeTab === "about"
                  ? "text-accent border-b-2 border-accent"
                  : "text-text-secondary hover:text-text"
              }`}
            >
              Sky Stanoyevitch
            </button>
            <button
              onClick={() => setActiveTab("work")}
              className={`px-8 py-4 font-semibold text-lg transition-all duration-300 ${
                activeTab === "work"
                  ? "text-accent border-b-2 border-accent"
                  : "text-text-secondary hover:text-text"
              }`}
            >
              Work
            </button>
            {/* Swipe indicator for mobile */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 md:hidden">
              <div className="flex items-center space-x-1 text-text-secondary text-sm">
                <span>swipe</span>
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
              </div>
            </div>
          </div>

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
                className="animate-fadeIn"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="max-w-4xl">
                  <div className="mb-8">
                    <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-6">
                      <p className="text-2xl md:text-3xl font-semibold text-text mb-2 md:mb-0">
                        APP DEVELOPER • DESIGNER
                      </p>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                        <span className="text-text-secondary text-lg">
                          Available for work
                        </span>
                      </div>
                    </div>
                    <p className="text-xl md:text-2xl text-text-secondary max-w-3xl leading-relaxed mb-6">
                      I strive to create digital experiences that blend
                      beautiful design with clean, efficient code. Passionate
                      about technology and what makes it so powerful.
                    </p>
                    <div className="flex items-center space-x-2">
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
                      <span className="text-text text-xl font-medium">
                        San Diego, CA
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "work" && (
              <motion.div
                className="animate-fadeIn"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-4">
                  <Portfolio />
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
