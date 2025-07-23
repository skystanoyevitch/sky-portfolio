// Support.jsx with email contact only
import React, { useState } from "react";

const Support = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("skystanoyevitch@proton.me");
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <div className="text-text">
      <div className="mb-6">
        <h2 className="text-xl text-secondary font-bold mb-4">
          SUPPORT & CONTACT
        </h2>
        <p className="text-text-secondary mb-4">
          We're here to help you with any questions or issues you might have
          with StrongHabit.
        </p>
      </div>

      {/* Email Support Section */}
      <div className="bg-primary-dark rounded-lg p-6 hover:bg-primary-light transition-all duration-300 mb-6">
        <h3 className="text-xl mb-4 text-secondary">EMAIL SUPPORT</h3>
        <p className="text-text-secondary mb-4">
          For the fastest response, please email us at:
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 bg-primary p-4 rounded-lg border border-border">
          <span className="text-secondary">skystanoyevitch@proton.me</span>
          <button
            onClick={copyToClipboard}
            className="px-4 py-2 bg-secondary bg-opacity-10 hover:bg-opacity-20 text-secondary rounded-lg transition-colors"
          >
            {copySuccess ? "Copied!" : "Copy Email"}
          </button>
        </div>
        <p className="text-text-secondary mt-4 text-sm">
          We typically respond to all inquiries within 24-48 hours.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="bg-primary-dark rounded-lg p-6 hover:bg-primary-light transition-all duration-300 mb-6">
        <h3 className="text-xl mb-4 text-secondary">
          FREQUENTLY ASKED QUESTIONS
        </h3>

        <div className="space-y-4">
          <FaqItem
            question="How do I reset my streak?"
            answer="To reset a streak, go to the habit details page, tap the options menu (three dots), and select 'Reset Streak'."
          />

          <FaqItem
            question="Can I export my habit data?"
            answer="Yes! Go to Settings > Data Management > Export Data to save your habit history as a CSV file."
          />

          <FaqItem
            question="How do I set up reminders?"
            answer="When creating or editing a habit, tap on 'Reminders' to set specific times for notifications."
          />

          <FaqItem
            question="Is my data backed up to the cloud?"
            answer="All data is stored locally on your device. We recommend using your device's built-in backup feature to ensure you don't lose your habit data."
          />
        </div>
      </div>

      {/* Support Hours */}
      <div className="bg-primary-dark rounded-lg p-6 hover:bg-primary-light transition-all duration-300">
        <h3 className="text-xl mb-4 text-secondary">SUPPORT HOURS</h3>
        <p className="text-text-secondary mb-2">
          Our support team is available Monday through Friday:
        </p>
        <p className="text-secondary font-medium mb-4">
          9:00 AM - 5:00 PM Pacific Time
        </p>
        <p className="text-text-secondary text-sm">
          Response times may be longer on weekends and holidays.
        </p>
      </div>
    </div>
  );
};

// Helper component for FAQ items
const FaqItem = ({ question, answer }) => (
  <div className="border-l-2 border-accent pl-4 py-2">
    <h4 className="text-secondary font-medium mb-2">{question}</h4>
    <p className="text-text-secondary">{answer}</p>
  </div>
);

export default Support;
