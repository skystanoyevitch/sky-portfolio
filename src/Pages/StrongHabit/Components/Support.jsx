// Support.jsx with Netlify Form
import React, { useState } from "react";

const Support = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry", // Default subject
    message: "",
  });

  // Form submission states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  // Validation state
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // First, validate the form
    if (!validateForm()) {
      return; // Stop submission if validation fails
    }

    setIsSubmitting(true);

    try {
      // For Netlify Forms, we'll submit the form normally
      // Netlify will intercept the submission automatically

      // You can also use fetch for custom handling while still using Netlify Forms
      const form = e.target;
      const formData = new FormData(form);

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => {
          setSubmitSuccess(true);
          setFormData({
            name: "",
            email: "",
            subject: "General Inquiry",
            message: "",
          });
        })
        .catch((error) => {
          console.error("Form submission error:", error);
          setSubmitError(true);
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitError(true);
      setIsSubmitting(false);
    }
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

      {/* Contact Form Section */}
      <div className="bg-primary-dark border border-border rounded-lg p-6 hover:border-accent transition-all duration-300 mb-6">
        <h3 className="text-xl mb-4 text-secondary">CONTACT US</h3>

        {submitSuccess ? (
          <div className="bg-green-900 bg-opacity-20 border border-green-700 rounded-lg p-4 mb-4">
            <p className="text-green-400">
              Thank you for reaching out! We've received your message and will
              respond within 24-48 hours.
            </p>
          </div>
        ) : null}

        {submitError ? (
          <div className="bg-red-900 bg-opacity-20 border border-red-700 rounded-lg p-4 mb-4">
            <p className="text-red-400">
              There was a problem sending your message. Please try again or
              email us directly.
            </p>
          </div>
        ) : null}

        {/* Netlify Form */}
        <form
          name="stronghabit-support"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          {/* These hidden fields are required for Netlify Forms */}
          <input type="hidden" name="form-name" value="stronghabit-support" />
          <p className="hidden">
            <label>
              Don't fill this out if you're human: <input name="bot-field" />
            </label>
          </p>

          {/* Name field */}
          <div>
            <label htmlFor="name" className="block text-text-secondary mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full bg-primary border ${
                errors.name ? "border-red-500" : "border-border"
              } rounded-lg p-3 text-text focus:outline-none focus:border-accent`}
              placeholder="Your name"
              disabled={isSubmitting}
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name}</p>
            )}
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
              value={formData.email}
              onChange={handleChange}
              className={`w-full bg-primary border ${
                errors.email ? "border-red-500" : "border-border"
              } rounded-lg p-3 text-text focus:outline-none focus:border-accent`}
              placeholder="your@email.com"
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Subject field */}
          <div>
            <label htmlFor="subject" className="block text-text-secondary mb-2">
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-primary border border-border rounded-lg p-3 text-text focus:outline-none focus:border-accent"
              disabled={isSubmitting}
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
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className={`w-full bg-primary border ${
                errors.message ? "border-red-500" : "border-border"
              } rounded-lg p-3 text-text focus:outline-none focus:border-accent`}
              placeholder="Please describe your issue or question in detail..."
              disabled={isSubmitting}
            ></textarea>
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit button */}
          <div className="mt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-3 bg-accent text-white rounded-lg transition-colors ${
                isSubmitting
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:bg-accent-dark"
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
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
