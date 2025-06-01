// Features.jsx
import React from "react";
import { Link } from "react-router-dom";

const Features = () => {
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
    <div className="text-text">
      <div className="mb-6">
        <h2 className="text-xl text-secondary font-bold mb-4">
          FEATURES OVERVIEW
        </h2>
        <p className="text-text-secondary mb-4">
          Discover the powerful features that make Strong Habit the perfect
          companion for your habit building journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {featuresList.map((feature, index) => (
          <div
            key={index}
            className="bg-primary-dark rounded-lg p-4 hover:bg-primary-light transition-all duration-300"
          >
            <h3 className="text-xl mb-2 text-secondary">{feature.title}</h3>
            <p className="text-text-secondary">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 rounded-lg bg-primary-dark">
        <h3 className="text-xl mb-3 text-secondary">DOWNLOAD OPTIONS</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-3 border border-border hover:border-accent hover:bg-accent hover:bg-opacity-10 transition-all duration-300 rounded-lg cursor-pointer text-center">
            <span className="block mb-1 text-text">iOS APP STORE</span>
            <span className="text-sm text-text-secondary">VERSION 1.2.1</span>
          </div>
          <div className="p-3 border border-border hover:border-accent hover:bg-accent hover:bg-opacity-10 transition-all duration-300 rounded-lg cursor-pointer text-center">
            <span className="block mb-1 text-text">ANDROID PLAY STORE</span>
            <span className="text-sm text-text-secondary">VERSION 1.2.0</span>
          </div>
        </div>
      </div>

      {/* Support Section */}
      <div className="mt-8 p-4 rounded-lg bg-primary-dark">
        <h3 className="text-xl mb-3 text-secondary">NEED HELP?</h3>
        <p className="text-text-secondary mb-4">
          Having trouble with Strong Habit? Our support team is ready to assist
          you.
        </p>
        <Link
          to="/strong-habit/support"
          className="inline-block px-4 py-2 bg-secondary bg-opacity-10 hover:bg-opacity-20 text-secondary rounded-lg transition-colors"
        >
          VISIT SUPPORT PAGE →
        </Link>
      </div>
    </div>
  );
};

export default Features;
