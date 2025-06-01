// PrivacyPolicy.jsx
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="text-text">
      <div className="p-4 mb-6 rounded-lg bg-primary-dark">
        <h2 className="text-xl text-secondary font-bold mb-4 pb-2 border-b border-border">
          STRONGHABIT PRIVACY POLICY
        </h2>
        <p className="mb-4 text-text-secondary">Last Updated: MARCH 21, 2025</p>
      </div>

      <div className="space-y-6">
        <Section title="INTRODUCTION">
          <p>
            StrongHabit ("we," "our," or "us") is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you use our mobile application
            StrongHabit (the "App").
          </p>
          <p className="mt-2">
            Please read this Privacy Policy carefully. By using the App, you
            agree to the collection and use of information in accordance with
            this policy.
          </p>
        </Section>

        <Section title="INFORMATION WE COLLECT">
          <h4 className="text-secondary mb-2">
            Information Stored on Your Device
          </h4>
          <p>
            StrongHabit stores all your data locally on your device. This
            includes:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-text-secondary">
            <li>
              <span className="text-text">Habit tracking data:</span> The habits
              you create, complete, and track
            </li>
            <li>
              <span className="text-text">Streak information:</span> Your
              consistency records and achievements
            </li>
            <li>
              <span className="text-text">App preferences:</span> Your
              personalized settings within the app
            </li>
            <li>
              <span className="text-text">Reminder settings:</span> Any
              notification preferences you configure
            </li>
          </ul>

          <h4 className="text-secondary mt-4 mb-2">
            We Do Not Collect Personal Information
          </h4>
          <p>
            StrongHabit does not collect, transmit, or store any personal
            information on external servers. All your data remains on your
            device and is not sent to us or any third parties.
          </p>
        </Section>

        <Section title="HOW WE USE YOUR INFORMATION">
          <p>
            Since all data is stored locally on your device, we use your
            information only to:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-text-secondary">
            <li>Display your habits and tracking data within the app</li>
            <li>Calculate statistics and achievements</li>
            <li>Send local notifications for habit reminders (when enabled)</li>
          </ul>
        </Section>

        <Section title="DATA STORAGE AND SECURITY">
          <ul className="list-disc pl-6 space-y-1 text-text-secondary">
            <li>
              All data is stored locally on your device using secure storage
              methods
            </li>
            <li>We do not have access to your data</li>
            <li>Your data is as secure as your device is secure</li>
            <li>
              We recommend using device security features (passcode, FaceID,
              etc.) to protect your data
            </li>
          </ul>
        </Section>

        <Section title="PUSH NOTIFICATIONS">
          <p>If you enable push notifications:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-text-secondary">
            <li>These are processed locally on your device</li>
            <li>Notification settings are stored only on your device</li>
            <li>We cannot and do not access the content of notifications</li>
          </ul>
        </Section>

        <Section title="DATA BACKUP AND DELETION">
          <ul className="list-disc pl-6 space-y-1 text-text-secondary">
            <li>
              <span className="text-text">Data Backup:</span> You can export
              your data for personal backup purposes
            </li>
            <li>
              <span className="text-text">Data Deletion:</span> You can delete
              your data at any time by either:
              <ul className="list-disc pl-6 mt-1">
                <li>Deleting individual habits within the app</li>
                <li>
                  Uninstalling the app (which removes all associated data)
                </li>
              </ul>
            </li>
          </ul>
        </Section>

        <Section title="CHANGES TO THIS PRIVACY POLICY">
          <p>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the "Last Updated" date.
          </p>
        </Section>

        <Section title="CONTACT US">
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at:
          </p>
          <p className="mt-2 text-secondary">Email: contact@stronghabit.app</p>
          <p className="mt-4 text-text-secondary">
            This policy was last updated on March 21, 2025.
          </p>
        </Section>
      </div>
    </div>
  );
};

// Helper component for sections
const Section = ({ title, children }) => (
  <div className="border-l-2 border-accent pl-4">
    <h3 className="text-xl mb-2 text-secondary">{title}</h3>
    <div className="text-text-secondary">{children}</div>
  </div>
);

export default PrivacyPolicy;
