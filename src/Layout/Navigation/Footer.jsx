// Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import Emoji from "./Assests/heart-emoji";

const Footer = () => {
  return (
    <footer className="relative border-t border-border dark:border-dark-border bg-surface/50 dark:bg-dark-surface/50 backdrop-blur-md">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent-secondary/5"></div>

      <div className="relative container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left side - Update info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <div className="flex items-center gap-2 px-3 py-1 bg-surface-elevated dark:bg-dark-surface-elevated rounded-full border border-border dark:border-dark-border">
              <div className="w-2 h-2 bg-accent-secondary rounded-full animate-pulse"></div>
              <span className="text-text-muted dark:text-dark-text-muted text-xs font-medium">
                LAST UPDATE: 2025.07.24
              </span>
            </div>
          </motion.div>

          {/* Center - Main footer text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <p className="text-text-secondary dark:text-dark-text-secondary text-sm">
              Crafted with{" "}
              <Emoji symbol="❤️" label="heart" className="text-accent mx-1" />{" "}
              by{" "}
              <span className="text-text-primary dark:text-dark-text-primary font-semibold">
                Sky
              </span>
              {" • "}
              <span className="text-accent font-semibold">2025</span>
            </p>
          </motion.div>

          {/* Right side - Social links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-4"
          >
            {/* GitHub */}
            <motion.a
              href="https://github.com/skystanoyevitch"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-surface-elevated dark:bg-dark-surface-elevated border border-border dark:border-dark-border rounded-full flex items-center justify-center text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary hover:border-accent hover:bg-accent/10 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="GitHub Profile"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:skystanoyevitch@proton.me"
              className="w-10 h-10 bg-surface-elevated dark:bg-dark-surface-elevated border border-border dark:border-dark-border rounded-full flex items-center justify-center text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary hover:border-accent hover:bg-accent/10 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Email Contact"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom copyright line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 pt-6 border-t border-border/50 text-center"
        >
          <p className="text-text-muted text-xs">
            © {new Date().getFullYear()} Sky Stanoyevitch. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
