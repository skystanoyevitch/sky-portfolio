import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Terminal from "../../../Layout/Navigation/Components/Terminal/Terminal";

const Features = () => {
  const featuresRef = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".feature-item",
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.4,
          ease: "power2.out",
        }
      );
    }, featuresRef);

    return () => ctx.revert();
  }, []);

  const featuresList = [
    {
      title: "HABIT TRACKING",
      description:
        "Create, track, and monitor habits with daily, weekly, and monthly views.",
    },
    {
      title: "STREAKS & ANALYTICS",
      description:
        "Visualize your progress with detailed streak tracking and performance analytics.",
    },
    {
      title: "CUSTOMIZABLE REMINDERS",
      description:
        "Never miss a habit with customizable push notifications and reminders.",
    },
    {
      title: "HABIT TEMPLATES",
      description:
        "Choose from pre-built habit templates or create your own custom habits.",
    },
    {
      title: "PROGRESS INSIGHTS",
      description:
        "Get personalized insights about your performance and habit-building journey.",
    },
    {
      title: "OFFLINE SUPPORT",
      description:
        "Track your habits even when you're offline with seamless syncing.",
    },
  ];

  return (
    <div ref={featuresRef} className="font-vt text-terminal-green">
      <Terminal title="FEATURES MODULE" className="mb-6">
        <div className="mb-4">
          <p className="text-terminal-green-dark">
            LISTING PRIMARY FEATURES OF STRONG HABIT APPLICATION...
          </p>
        </div>
      </Terminal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {featuresList.map((feature, index) => (
          <div
            key={index}
            className="feature-item border border-terminal-green p-4 hover:bg-terminal-green hover:bg-opacity-5 transition-colors"
          >
            <h3 className="text-xl mb-2">{feature.title}</h3>
            <p className="text-terminal-green-dark">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 border border-terminal-green border-opacity-50">
        <h3 className="text-xl mb-3">DOWNLOAD OPTIONS</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-3 border border-terminal-green hover:bg-terminal-green hover:bg-opacity-10 transition-colors cursor-pointer text-center">
            <span className="block mb-1">iOS APP STORE</span>
            <span className="text-sm text-terminal-green-dark">
              VERSION 1.2.1
            </span>
          </div>
          <div className="p-3 border border-terminal-green hover:bg-terminal-green hover:bg-opacity-10 transition-colors cursor-pointer text-center">
            <span className="block mb-1">ANDROID PLAY STORE</span>
            <span className="text-sm text-terminal-green-dark">
              VERSION 1.2.0
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
