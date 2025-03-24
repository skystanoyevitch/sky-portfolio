// StrongHabit.jsx
import React, { useState, useEffect } from "react";
import { Routes, Route, NavLink, useNavigate } from "react-router-dom";
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
    <div className="min-h-screen bg-primary bg-gradient-autumn py-8 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-8">
          <NavLink
            to="/"
            className="text-secondary hover:text-accent inline-flex items-center transition-colors"
          >
            <span className="mr-2">←</span> RETURN TO MAIN PAGE
          </NavLink>
        </div>

        {/* Header Card - Replaces Terminal */}
        <div className="bg-primary-light rounded-lg border border-border shadow-autumn mb-6 overflow-hidden">
          <div className="p-6 border-b border-border">
            <h1 className="text-3xl text-secondary mb-2 font-bold">
              STRONG HABIT
            </h1>
            <p className="text-text-secondary">
              A powerful habit tracking application designed to build
              consistency and track progress.
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-border mb-6">
          <TabLink
            to="/strong-habit/features"
            active={activeTab === "features"}
            onClick={() => setActiveTab("features")}
          >
            FEATURES
          </TabLink>
          <TabLink
            to="/strong-habit/support"
            active={activeTab === "support"}
            onClick={() => setActiveTab("support")}
          >
            SUPPORT
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
        <div className="page-content bg-primary-light rounded-lg border border-border p-6 shadow-autumn">
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
        </div>
      </div>
    </div>
  );
};

// TabLink component
const TabLink = ({ children, to, active, onClick }) => (
  <NavLink
    to={to}
    className={`px-4 py-2 font-medium ${
      active
        ? "text-accent border-b-2 border-accent"
        : "text-text-secondary hover:text-secondary"
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
