import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, NavLink, useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import Terminal from "../../Layout/Navigation/Components/Terminal/Terminal";
import initProject3DEffects from "../../Layout/Navigation/Components/ThreeD/ProjectsHoverEffect";

// Import components for each tab
import Features from "./Components/Features";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import Terms from "./Components/Terms";

const StrongHabit = () => {
  const navigate = useNavigate();
  const componentRef = useRef();
  const [activeTab, setActiveTab] = useState("features");

  // Initialize 3D effects on tab change
  useEffect(() => {
    // Small delay to ensure DOM is updated
    const timer = setTimeout(() => {
      initProject3DEffects();
    }, 100);

    return () => clearTimeout(timer);
  }, [activeTab]);

  // Handle tab changes
  useEffect(() => {
    // If on the main strong-habit page, redirect to features
    if (window.location.pathname === "/strong-habit") {
      navigate("/strong-habit/features");
    }
  }, [navigate]);

  // Terminal initial commands - Adding more text to demonstrate scrolling
  const bootSequence = [
    "LOADING STRONG HABIT APPLICATION...",
    "ACCESSING DATA STORAGE API...",
    "INITIALIZING USER INTERFACE COMPONENTS...",
    "LOADING HABIT TRACKING MODULES...",
    "CONNECTING TO SYNCHRONIZATION SERVICES...",
    "RUNNING SYSTEM DIAGNOSTICS...",
    "ALL SYSTEMS OPERATIONAL",
    "STRONG HABIT v1.2.1 READY",
  ];

  return (
    <div
      ref={componentRef}
      className="min-h-screen bg-terminal-black bg-terminal-grid py-8 px-4"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="mb-8">
          <NavLink
            to="/"
            className="text-terminal-green hover:underline inline-flex items-center"
          >
            <span className="mr-2">←</span> RETURN TO MAIN TERMINAL
          </NavLink>
        </div>

        <Terminal
          title="STRONG HABIT OS v1.2.1"
          initialCommands={bootSequence}
          className="mb-6"
        >
          <div className="mb-4">
            <h1 className="text-3xl text-terminal-green mb-2 font-vt">
              STRONG HABIT
            </h1>
            <p className="text-terminal-green-dark">
              A powerful habit tracking application designed to build
              consistency and track progress.
            </p>
          </div>
        </Terminal>

        {/* Navigation Tabs */}
        <div className="flex border-b border-terminal-green mb-6">
          <TabLink
            to="/strong-habit/features"
            active={activeTab === "features"}
            onClick={() => setActiveTab("features")}
          >
            FEATURES
          </TabLink>
          <TabLink
            to="/strong-habit/privacy"
            active={activeTab === "privacy"}
            onClick={() => setActiveTab("privacy")}
          >
            PRIVACY POLICY
          </TabLink>
          <TabLink
            to="/strong-habit/terms"
            active={activeTab === "terms"}
            onClick={() => setActiveTab("terms")}
          >
            TERMS
          </TabLink>
        </div>

        {/* Page Content */}
        <div className="page-content">
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/strong-habit/features" />}
            />
            <Route path="/features" element={<Features />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

// TabLink component
const TabLink = ({ children, to, active, onClick }) => (
  <NavLink
    to={to}
    className={`px-4 py-2 font-vt ${
      active
        ? "text-terminal-green border-b-2 border-terminal-green"
        : "text-terminal-green-dark hover:text-terminal-green"
    }`}
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
