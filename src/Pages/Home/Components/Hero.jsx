import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import Portfolio from "./Portfolio";
import Terminal from "../../../Layout/Navigation/Components/Terminal/Terminal";
import initProject3DEffects from "../../../Layout/Navigation/Components/ThreeD/ProjectsHoverEffect";

function Hero() {
  const navigate = useNavigate();
  const comp = useRef();
  const tl = useRef();
  const [projectsVisible, setProjectsVisible] = useState(false); // Changed to false by default
  const [showHelp, setShowHelp] = useState(false);
  const projectsSectionRef = useRef();
  const helpSectionRef = useRef();

  useEffect(() => {
    navigate("/", { replace: true });
  }, [navigate]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap
        .timeline()
        .fromTo(
          ".terminal-wrapper",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
        );
    }, comp);

    return () => {
      ctx.revert();
    };
  }, []);

  // Simple toggle for projects section without animation
  useEffect(() => {
    if (projectsSectionRef.current) {
      if (projectsVisible) {
        projectsSectionRef.current.style.display = "block";

        // Small delay to ensure DOM is updated before initializing 3D effects
        const timer = setTimeout(() => {
          initProject3DEffects();
        }, 100);

        return () => clearTimeout(timer);
      } else {
        projectsSectionRef.current.style.display = "none";
      }
    }
  }, [projectsVisible]);

  // Terminal initial commands with more text to demonstrate scrolling
  const bootSequence = [
    "SYSTEM BOOT SEQUENCE INITIATED",
    "RUNNING HARDWARE DIAGNOSTICS...",
    "CPU: OPERATIONAL",
    "MEMORY: 16GB DETECTED",
    "STORAGE: 1TB SSD DETECTED",
    "LOADING KERNEL...",
    "INITIALIZING SYSTEM SERVICES...",
    "LOADING PERSONAL DATABASE...",
    "ACCESSING PROFILE: SKY STANOJEVIC",
    "DEVELOPER STATUS: ACTIVE",
    "PROJECTS DATABASE: CONNECTED",
    "TERMINAL INTERFACE: READY",
    "SYSTEM READY FOR INPUT",
  ];

  const toggleProjects = () => {
    setProjectsVisible(!projectsVisible);
  };

  return (
    <div className="w-full min-h-screen bg-terminal-black bg-terminal-grid bg-opacity-90 flex flex-col justify-center py-8 px-4">
      <div ref={comp} className="container mx-auto h-full flex flex-col">
        <div className="terminal-wrapper max-w-5xl mx-auto w-full flex-grow">
          <Terminal
            initialCommands={bootSequence}
            title="SKY_OS v1.0.3"
            fullHeight={true}
            onCommandExecute={(command) => {
              if (command === "OPEN_PROJECTS" || command === "OPEN PROJECTS") {
                setProjectsVisible(true);
                setShowHelp(false);
              } else if (
                command === "CLOSE_PROJECTS" ||
                command === "CLOSE PROJECTS"
              ) {
                setProjectsVisible(false);
                setShowHelp(false);
              } else if (
                command === "TOGGLE_PROJECTS" ||
                command === "TOGGLE PROJECTS"
              ) {
                setProjectsVisible(!projectsVisible);
                setShowHelp(false);
              } else if (command === "HELP") {
                setShowHelp(true);
              } else if (command === "CLEAR" || command === "CLS") {
                setShowHelp(false);
              }
            }}
          >
            {/* Main header - make it more prominent */}
            <div className="py-6 mb-8 border-b-2 border-terminal-green">
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-terminal-green font-vt text-shadow-terminal mb-2">
                SKY STANOJEVIC
              </h1>
              <p className="text-terminal-green-dark text-lg">
                WEB DEVELOPER | REACT SPECIALIST
              </p>
            </div>

            {/* Profile Section - with better border */}
            <div className="mt-6 mb-8 border border-terminal-green p-4 bg-terminal-green bg-opacity-5">
              <h2 className="text-xl text-terminal-green mb-4 font-vt border-b border-terminal-green pb-2">
                &gt; PROFILE
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ProfileItem label="NAME" value="SKY STANOJEVIC" />
                <ProfileItem label="ROLE" value="WEB DEVELOPER" />
                <ProfileItem label="LOCATION" value="[REDACTED]" />
                <ProfileItem
                  label="STATUS"
                  value={<span className="animate-blink">ONLINE</span>}
                />
              </div>
            </div>

            {/* Projects Section Toggle Button */}
            <div className="mt-6 mb-4 flex items-center">
              <button
                className="flex items-center text-terminal-green border border-terminal-green px-4 py-2 hover:bg-terminal-green hover:bg-opacity-20"
                onClick={toggleProjects}
              >
                <span className="text-terminal-green-dark mr-2">&gt;</span>
                <span>{projectsVisible ? "CLOSE" : "OPEN"} PROJECTS</span>
                <span className="ml-2 text-terminal-green-dark">
                  [{projectsVisible ? "-" : "+"}]
                </span>
              </button>
            </div>

            {/* Help Section */}
            {showHelp && (
              <div className="border border-terminal-green p-4 bg-terminal-green bg-opacity-5 mb-8">
                <h2 className="text-xl text-terminal-green mb-4 font-vt border-b border-terminal-green pb-2">
                  &gt; HELP
                </h2>
                <div className="text-terminal-green">
                  <p className="mb-4">AVAILABLE COMMANDS:</p>
                  <div className="grid grid-cols-1 gap-2 pl-4">
                    <div className="flex">
                      <span className="text-terminal-green-light w-40">
                        OPEN_PROJECTS
                      </span>
                      <span>Show the projects section</span>
                    </div>
                    <div className="flex">
                      <span className="text-terminal-green-light w-40">
                        CLOSE_PROJECTS
                      </span>
                      <span>Hide the projects section</span>
                    </div>
                    <div className="flex">
                      <span className="text-terminal-green-light w-40">
                        TOGGLE_PROJECTS
                      </span>
                      <span>Toggle projects visibility</span>
                    </div>
                    <div className="flex">
                      <span className="text-terminal-green-light w-40">
                        HELP
                      </span>
                      <span>Display this help information</span>
                    </div>
                    <div className="flex">
                      <span className="text-terminal-green-light w-40">
                        CLEAR
                      </span>
                      <span>Clear the help display</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Projects Section - with toggle functionality */}
            <div
              ref={projectsSectionRef}
              style={{ display: "none" }} // Initialize as hidden without transitions
            >
              <div className="border border-terminal-green p-4 bg-terminal-green bg-opacity-5">
                <h2 className="text-xl text-terminal-green mb-4 font-vt border-b border-terminal-green pb-2">
                  &gt; PROJECTS
                </h2>
                <Portfolio terminalStyle={true} />
              </div>
            </div>

            {/* Command prompt - more distinctive */}
            <div className="mt-8 pt-4 border-t-2 border-terminal-green">
              <div className="text-terminal-green mb-2">
                <span className="text-terminal-green-dark">
                  AVAILABLE COMMANDS:
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm mb-4">
                <div className="flex items-center">
                  <span
                    className="text-terminal-green-light mr-2 font-bold cursor-pointer"
                    onClick={() => setProjectsVisible(true)}
                  >
                    OPEN_PROJECTS
                  </span>
                  <span className="text-terminal-green-dark">
                    - Display project list
                  </span>
                </div>
                <div className="flex items-center">
                  <span
                    className="text-terminal-green-light mr-2 font-bold cursor-pointer"
                    onClick={() => setProjectsVisible(false)}
                  >
                    CLOSE_PROJECTS
                  </span>
                  <span className="text-terminal-green-dark">
                    - Hide project list
                  </span>
                </div>
                <div className="flex items-center">
                  <span
                    className="text-terminal-green-light mr-2 font-bold cursor-pointer"
                    onClick={toggleProjects}
                  >
                    TOGGLE_PROJECTS
                  </span>
                  <span className="text-terminal-green-dark">
                    - Toggle project visibility
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-terminal-green-light mr-2 font-bold">
                    HELP
                  </span>
                  <span className="text-terminal-green-dark">
                    - Show available commands
                  </span>
                </div>
              </div>
              <div className="flex items-center mt-2">
                <span className="text-terminal-green-dark mr-2">STATUS:</span>
                <span className="text-terminal-green">
                  PROJECTS SECTION IS CURRENTLY{" "}
                  <span className="text-terminal-green-light">
                    {projectsVisible ? "VISIBLE" : "HIDDEN"}
                  </span>
                </span>
              </div>
            </div>
          </Terminal>
        </div>
      </div>
    </div>
  );
}

// Helper component for profile information
const ProfileItem = ({ label, value }) => (
  <div className="mb-1">
    <span className="text-terminal-green-dark font-vt">{label}: </span>
    <span className="text-terminal-green font-vt">{value}</span>
  </div>
);

export default Hero;
