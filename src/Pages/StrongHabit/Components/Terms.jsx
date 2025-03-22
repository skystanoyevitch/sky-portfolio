import React from "react";
import Terminal from "../../../Layout/Navigation/Components/Terminal/Terminal";

const Terms = () => {
  return (
    <div className="font-vt text-terminal-green">
      <Terminal title="TERMS OF SERVICE" className="mb-6">
        <div className="mb-4">
          <p className="text-terminal-green-dark">
            LOADING TERMS OF SERVICE DOCUMENTATION...
          </p>
        </div>
      </Terminal>

      <div className="border border-terminal-green p-4 mb-6">
        <h2 className="text-xl border-b border-terminal-green border-opacity-50 pb-2 mb-4">
          STRONGHABIT TERMS OF SERVICE
        </h2>
        <p className="mb-4">Last Updated: MARCH 21, 2025</p>
      </div>

      <div className="space-y-6">
        <TermSection number="1" title="ACCEPTANCE OF TERMS">
          <p>
            By downloading, installing, or using the StrongHabit mobile
            application ("App"), you agree to be bound by these Terms of Service
            ("Terms"). If you do not agree to these Terms, you should not use
            the App.
          </p>
        </TermSection>

        <TermSection number="2" title="DESCRIPTION OF SERVICE">
          <p>
            StrongHabit is a habit tracking application designed to help users
            build and maintain consistent habits. The App allows users to:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-terminal-green-dark">
            <li>Create and track daily, weekly, or monthly habits</li>
            <li>Monitor streaks and progress</li>
            <li>View statistics on habit completion</li>
            <li>Set reminders for habit completion</li>
            <li>Earn achievements for consistent habit performance</li>
          </ul>
        </TermSection>

        <TermSection number="3" title="USER RESPONSIBILITIES">
          <p>As a user of StrongHabit, you agree to:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-terminal-green-dark">
            <li>Provide accurate information when setting up habits</li>
            <li>Use the App for lawful purposes only</li>
            <li>
              Take responsibility for all activity that occurs under your device
            </li>
            <li>
              Maintain the security of your device and the data stored within
              the App
            </li>
          </ul>
        </TermSection>

        <TermSection number="4" title="DATA AND PRIVACY">
          <ul className="list-disc pl-6 space-y-1 text-terminal-green-dark">
            <li>All user data is stored locally on your device</li>
            <li>
              We do not collect, store, or transmit your personal information
            </li>
            <li>
              For complete information on data handling, please refer to our
              Privacy Policy
            </li>
          </ul>
        </TermSection>

        <TermSection number="5" title="INTELLECTUAL PROPERTY">
          <ul className="list-disc pl-6 space-y-1 text-terminal-green-dark">
            <li>
              The App, including all content, features, and functionality, is
              owned by StrongHabit and is protected by copyright, trademark, and
              other intellectual property laws
            </li>
            <li>
              You may not modify, reproduce, distribute, or create derivative
              works based on the App without express written permission
            </li>
          </ul>
        </TermSection>

        <TermSection number="6" title="APP AVAILABILITY AND UPDATES">
          <ul className="list-disc pl-6 space-y-1 text-terminal-green-dark">
            <li>
              We strive to keep the App operational at all times, but we do not
              guarantee uninterrupted access
            </li>
            <li>
              We may release updates to improve functionality, fix bugs, or
              address security issues
            </li>
            <li>
              We are not responsible for any issues arising from outdated
              versions of the App
            </li>
          </ul>
        </TermSection>

        <TermSection number="7" title="NOTIFICATIONS AND REMINDERS">
          <ul className="list-disc pl-6 space-y-1 text-terminal-green-dark">
            <li>
              The App may send notifications and reminders based on your
              settings
            </li>
            <li>
              Delivery of notifications depends on your device settings and
              connectivity
            </li>
            <li>
              We cannot guarantee that notifications will be delivered at the
              exact time requested
            </li>
          </ul>
        </TermSection>

        <TermSection number="8" title="LIMITATION OF LIABILITY">
          <ul className="list-disc pl-6 space-y-1 text-terminal-green-dark">
            <li>The App is provided "as is" without warranties of any kind</li>
            <li>
              We are not liable for any damages arising from the use or
              inability to use the App
            </li>
            <li>
              We are not responsible for any failure to achieve personal goals
              or habit formation
            </li>
            <li>
              We are not liable for any data loss that may occur from app usage,
              device failures, or app uninstallation
            </li>
          </ul>
        </TermSection>

        <TermSection number="9" title="THIRD-PARTY LINKS AND CONTENT">
          <ul className="list-disc pl-6 space-y-1 text-terminal-green-dark">
            <li>
              The App may contain links to third-party content or services
            </li>
            <li>
              We are not responsible for third-party content, privacy practices,
              or services
            </li>
          </ul>
        </TermSection>

        <TermSection number="10" title="TERMINATION">
          <ul className="list-disc pl-6 space-y-1 text-terminal-green-dark">
            <li>
              You may terminate your use of the App at any time by uninstalling
              it from your device
            </li>
            <li>
              We reserve the right to terminate or suspend access to the App for
              violations of these Terms
            </li>
          </ul>
        </TermSection>

        <TermSection number="11" title="CHANGES TO TERMS">
          <ul className="list-disc pl-6 space-y-1 text-terminal-green-dark">
            <li>We may modify these Terms at any time</li>
            <li>
              We will provide notice of significant changes through the App or
              our website
            </li>
            <li>
              Your continued use of the App following changes constitutes
              acceptance of the modified Terms
            </li>
          </ul>
        </TermSection>

        <TermSection number="12" title="GOVERNING LAW">
          <p>
            These Terms shall be governed by and construed in accordance with
            the laws of the United States, without regard to its conflict of law
            provisions.
          </p>
        </TermSection>

        <TermSection number="13" title="CONTACT INFORMATION">
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <p className="mt-2 text-terminal-green">
            Email: contact@stronghabit.app
          </p>
          <p className="mt-4 text-terminal-green-dark">
            These Terms of Service were last updated on March 21, 2025.
          </p>
        </TermSection>
      </div>
    </div>
  );
};

// Helper component for term sections
const TermSection = ({ number, title, children }) => (
  <div className="border-l-2 border-terminal-green pl-4">
    <h3 className="text-xl mb-2">
      {number}. {title}
    </h3>
    <div className="text-terminal-green-dark">{children}</div>
  </div>
);

export default Terms;
