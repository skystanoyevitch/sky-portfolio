import React from "react";
import Terminal from "../../../Layout/Navigation/Components/Terminal/Terminal";

const Terms = () => {
  const termsSections = [
    {
      title: "ACCEPTANCE OF TERMS",
      content:
        "By accessing or using Strong Habit, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using the application.",
    },
    {
      title: "USER ACCOUNTS",
      content:
        "To use certain features of Strong Habit, you must create a user account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
    },
    {
      title: "USER CONTENT",
      content:
        "You retain all rights to any content you submit, post, or display on or through Strong Habit. By providing content, you grant us a worldwide, non-exclusive license to use, reproduce, and display your content in connection with the service.",
    },
    {
      title: "INTELLECTUAL PROPERTY",
      content:
        "Strong Habit and its original content, features, and functionality are owned by Sky Stanojevic and are protected by international copyright, trademark, and other intellectual property laws.",
    },
    {
      title: "SUBSCRIPTION SERVICES",
      content:
        "Some features of Strong Habit require a subscription. Subscription fees are charged on a recurring basis. You can cancel your subscription at any time, but no refunds will be provided for partial billing periods.",
    },
    {
      title: "LIMITATION OF LIABILITY",
      content:
        "In no event shall Strong Habit, its directors, employees, partners, or agents be liable for any indirect, incidental, special, consequential or punitive damages arising out of or related to your use of the service.",
    },
    {
      title: "TERMINATION",
      content:
        "We may terminate or suspend your account and access to Strong Habit immediately, without prior notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties.",
    },
  ];

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
        <p className="mb-4">Effective Date: MARCH 15, 2025</p>
        <p className="text-terminal-green-dark mb-6">
          Please read these Terms of Service carefully before using the Strong
          Habit application.
        </p>
      </div>

      <div className="space-y-6">
        {termsSections.map((section, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl border-b border-terminal-green pb-2 mb-3">
              {section.title}
            </h3>
            <p className="text-terminal-green-dark">{section.content}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 border border-terminal-green">
        <h3 className="text-xl mb-3">CHANGES TO TERMS</h3>
        <p className="text-terminal-green-dark">
          We reserve the right to modify these terms at any time. Changes will
          be effective immediately upon posting to the application. Your
          continued use of Strong Habit after any modifications indicates your
          acceptance of the updated terms.
        </p>
      </div>
    </div>
  );
};

export default Terms;
