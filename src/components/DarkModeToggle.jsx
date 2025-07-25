import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme");
    const systemPreference = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && systemPreference)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <motion.button
      onClick={toggleDarkMode}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-surface dark:bg-dark-surface-elevated border border-border dark:border-dark-border hover:bg-surface-hover dark:hover:bg-dark-surface-hover transition-all duration-300 shadow-card hover:shadow-hover"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: isDark ? 180 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="w-5 h-5"
      >
        {isDark ? (
          // Moon icon
          <svg fill="currentColor" viewBox="0 0 24 24" className="text-accent">
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        ) : (
          // Sun icon
          <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            className="text-sandiego-sunset"
          >
            <path d="M12,18.5A6.5,6.5,0,1,1,18.5,12,6.51,6.51,0,0,1,12,18.5ZM12,7A5,5,0,1,0,17,12,5,5,0,0,0,12,7Z" />
            <path d="M12,1a1,1,0,0,0-1,1V4a1,1,0,0,0,2,0V2A1,1,0,0,0,12,1Z" />
            <path d="M12,20a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V21A1,1,0,0,0,12,20Z" />
            <path d="M4.22,4.22a1,1,0,0,0-1.41,1.41L4.64,7.46A1,1,0,1,0,6.05,6.05L4.22,4.22Z" />
            <path d="M18.36,16.95a1,1,0,0,0-1.41,1.41l1.83,1.83a1,1,0,0,0,1.41-1.41Z" />
            <path d="M1,13H4a1,1,0,0,0,0-2H1a1,1,0,0,0,0,2Z" />
            <path d="M20,13h3a1,1,0,0,0,0-2H20a1,1,0,0,0,0,2Z" />
            <path d="M4.22,19.78A1,1,0,0,0,5.63,21.2l1.83-1.83a1,1,0,0,0-1.41-1.41Z" />
            <path d="M18.36,7.05a1,1,0,0,0,1.41-1.41L18.95,4.22a1,1,0,0,0-1.41,1.41Z" />
          </svg>
        )}
      </motion.div>
    </motion.button>
  );
};

export default DarkModeToggle;
