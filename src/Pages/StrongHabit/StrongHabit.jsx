// StrongHabit.jsx
import React, { useState, useEffect } from "react";
import { Routes, Route, NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Features from "./Components/Features";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import Terms from "./Components/Terms";
import Support from "./Components/Support";

const StrongHabit = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("features");

  // Handle tab changes
  useEffect(() => {
    // If on the main strong-habit page, redirect to features
    if (window.location.pathname === "/strong-habit") {
      navigate("/strong-habit/features");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background py-12 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background-secondary to-background opacity-90"></div>
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Back Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <NavLink
            to="/"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors duration-300 group"
          >
            <motion.svg
              className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </motion.svg>
            <span className="font-medium">Return to Portfolio</span>
          </NavLink>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-3xl p-8 mb-8"
        >
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-secondary rounded-2xl flex items-center justify-center">
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
              <h1 className="heading-secondary gradient-text">Strong Habit</h1>
            </div>
            <p className="text-text-secondary body-large max-w-2xl mx-auto">
              A powerful habit tracking application designed to build
              consistency and track progress with beautiful, intuitive design.
            </p>
          </div>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <div className="tab-navigation max-w-2xl mx-auto">
            <TabLink
              to="/strong-habit/features"
              active={activeTab === "features"}
              onClick={() => setActiveTab("features")}
            >
              Features
            </TabLink>
            <TabLink
              to="/strong-habit/support"
              active={activeTab === "support"}
              onClick={() => setActiveTab("support")}
            >
              Support
            </TabLink>
            <TabLink
              to="/strong-habit/privacy"
              active={activeTab === "privacy"}
              onClick={() => setActiveTab("privacy")}
            >
              Privacy
            </TabLink>
            <TabLink
              to="/strong-habit/terms"
              active={activeTab === "terms"}
              onClick={() => setActiveTab("terms")}
            >
              Terms
            </TabLink>
          </div>
        </motion.div>

        {/* Page Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass rounded-3xl p-8"
        >
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/strong-habit/features" />}
            />
            <Route path="/features" element={<Features />} />
            <Route path="/support" element={<Support />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </motion.div>
      </div>
    </div>
  );
};

// Enhanced TabLink component
const TabLink = ({ children, to, active, onClick }) => (
  <NavLink
    to={to}
    className={`tab-button ${active ? "active" : ""}`}
    onClick={onClick}
  >
    {children}
  </NavLink>
);

// Navigation helper
const Navigate = ({ to }) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(to);
  }, [navigate, to]);

  return null;
};

export default StrongHabit;
