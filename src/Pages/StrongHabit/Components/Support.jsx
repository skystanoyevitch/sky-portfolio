// Support.jsx with fixed form action
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Support = () => {
  const location = useLocation();
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Check for success parameter in URL
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get("success") === "true") {
      setFormSubmitted(true);

      // Optionally clear the URL parameter after showing the success message
      window.history.replaceState({}, document.title, location.pathname);
    }
  }, [location]);

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

      {/* Contact Form Section */}
      <div className="bg-primary-dark border border-border rounded-lg p-6 hover:border-accent transition-all duration-300 mb-6">
        <h3 className="text-xl mb-4 text-secondary">CONTACT US</h3>

        {formSubmitted && (
          <div className="bg-green-900 bg-opacity-20 border border-green-700 rounded-lg p-4 mb-4">
            <p className="text-green-400">
              Thank you for reaching out! We've received your message and will
              respond within 24-48 hours.
            </p>
          </div>
        )}

        {/* Traditional HTML Form with corrected action */}
        <form
          name="stronghabit-support"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="/?success=true"
          className="space-y-4"
        >
          {/* These hidden fields are required for Netlify Forms */}
          <input type="hidden" name="form-name" value="stronghabit-support" />
          <div className="hidden">
            <label>
              Don't fill this out if you're human: <input name="bot-field" />
            </label>
          </div>

          {/* Name field */}
          <div>
            <label htmlFor="name" className="block text-text-secondary mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full bg-primary border border-border rounded-lg p-3 text-text focus:outline-none focus:border-accent"
              placeholder="Your name"
            />
          </div>

          {/* Email field */}
          <div>
            <label htmlFor="email" className="block text-text-secondary mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full bg-primary border border-border rounded-lg p-3 text-text focus:outline-none focus:border-accent"
              placeholder="your@email.com"
            />
          </div>

          {/* Subject field */}
          <div>
            <label htmlFor="subject" className="block text-text-secondary mb-2">
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              className="w-full bg-primary border border-border rounded-lg p-3 text-text focus:outline-none focus:border-accent"
            >
              <option value="General Inquiry">General Inquiry</option>
              <option value="Technical Support">Technical Support</option>
              <option value="Account Issues">Account Issues</option>
              <option value="Feature Request">Feature Request</option>
              <option value="Bug Report">Bug Report</option>
            </select>
          </div>

          {/* Message field */}
          <div>
            <label htmlFor="message" className="block text-text-secondary mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              minLength="10"
              className="w-full bg-primary border border-border rounded-lg p-3 text-text focus:outline-none focus:border-accent"
              placeholder="Please describe your issue or question in detail..."
            ></textarea>
          </div>

          {/* Submit button */}
          <div className="mt-6">
            <button
              type="submit"
              className="px-6 py-3 bg-accent text-white rounded-lg transition-colors hover:bg-accent-dark"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* FAQ Section */}
      <div className="bg-primary-dark border border-border rounded-lg p-6 hover:border-accent transition-all duration-300 mb-6">
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
      <div className="bg-primary-dark border border-border rounded-lg p-6 hover:border-accent transition-all duration-300">
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
