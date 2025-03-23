// Hero.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Portfolio from "./Portfolio";

function Hero() {
  const navigate = useNavigate();
  const [projectsVisible, setProjectsVisible] = useState(true);

  useEffect(() => {
    navigate("/", { replace: true });
  }, [navigate]);

  return (
    <div className="w-full min-h-screen bg-primary py-8 px-4">
      <div className="container mx-auto h-full flex flex-col max-w-5xl">
        <div className="bg-primary-light rounded-autumn border border-border shadow-autumn overflow-hidden">
          {/* Header section */}
          <div className="p-6 border-b border-border">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-2">
              SKY STANOJEVIC
            </h1>
            <p className="text-text-secondary text-lg">
              WEB DEVELOPER | REACT SPECIALIST
            </p>
          </div>

          <div className="p-6">
            {/* Profile Section */}
            <div className="mb-8 p-6 bg-primary-light rounded-lg border border-border">
              <h2 className="text-xl text-secondary font-bold mb-4 pb-2 border-b border-border">
                Profile
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ProfileItem label="NAME" value="SKY STANOJEVIC" />
                <ProfileItem label="ROLE" value="WEB DEVELOPER" />
                <ProfileItem label="LOCATION" value="[REDACTED]" />
                <ProfileItem
                  label="STATUS"
                  value="ONLINE"
                  className="text-accent"
                />
              </div>
            </div>

            {/* Projects Section Toggle Button */}
            <div className="mb-6">
              <button
                className="flex items-center bg-primary-dark hover:bg-accent hover:bg-opacity-10 px-4 py-2 rounded-lg border border-border transition-colors text-secondary"
                onClick={() => setProjectsVisible(!projectsVisible)}
              >
                <span className="mr-2">
                  {projectsVisible ? "HIDE" : "SHOW"} PROJECTS
                </span>
                <span className="text-accent">
                  {projectsVisible ? "▼" : "►"}
                </span>
              </button>
            </div>

            {/* Projects Section */}
            {projectsVisible && (
              <div className="bg-primary-light rounded-lg border border-border p-6">
                <h2 className="text-xl text-secondary font-bold mb-4 pb-2 border-b border-border">
                  Projects
                </h2>
                <Portfolio />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper component for profile information
const ProfileItem = ({ label, value, className = "" }) => (
  <div className="mb-3">
    <span className="text-text-secondary text-sm block mb-1 font-medium">
      {label}
    </span>
    <span className={`text-text text-lg font-bold ${className}`}>{value}</span>
  </div>
);

export default Hero;
