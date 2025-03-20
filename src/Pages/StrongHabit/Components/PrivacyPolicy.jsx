import React from "react";
import Terminal from "../../../Layout/Navigation/Components/Terminal/Terminal";

const PrivacyPolicy = () => {
  const privacyItems = [
    {
      title: "DATA COLLECTION",
      content:
        "Strong Habit collects minimal personal information required for account creation and app functionality, including email address and habit data. Usage analytics are collected anonymously to improve the application.",
    },
    {
      title: "DATA STORAGE",
      content:
        "All user data is stored securely on encrypted servers. Habit data is synchronized across devices and backed up regularly to prevent data loss.",
    },
    {
      title: "DATA SHARING",
      content:
        "Strong Habit does not sell or share personal user data with third parties. Anonymous usage statistics may be shared with analytics partners to improve functionality.",
    },
    {
      title: "USER RIGHTS",
      content:
        "Users can request a full export of their data at any time. Account deletion permanently removes all personal information from our servers within 30 days.",
    },
    {
      title: "COOKIES & TRACKING",
      content:
        "The web application uses essential cookies for authentication and session management. Users can opt out of non-essential tracking cookies through app settings.",
    },
    {
      title: "THIRD-PARTY SERVICES",
      content:
        "Strong Habit integrates with optional third-party services such as fitness apps. These integrations are opt-in and subject to the privacy policies of those services.",
    },
  ];

  return (
    <div className="font-vt text-terminal-green">
      <Terminal title="PRIVACY POLICY" className="mb-6">
        <div className="mb-4">
          <p className="text-terminal-green-dark">
            ACCESSING PRIVACY DOCUMENTATION...
          </p>
        </div>
      </Terminal>

      <div className="border border-terminal-green p-4 mb-6">
        <p className="mb-4">Last Updated: MARCH 15, 2025</p>
        <p className="text-terminal-green-dark mb-6">
          This privacy policy outlines how Strong Habit collects, uses, and
          protects your personal information when you use our application.
        </p>
      </div>

      <div className="space-y-6">
        {privacyItems.map((item, index) => (
          <div key={index} className="border-l-2 border-terminal-green pl-4">
            <h3 className="text-xl mb-2">{item.title}</h3>
            <p className="text-terminal-green-dark">{item.content}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 border border-terminal-green border-opacity-30">
        <h3 className="text-xl mb-3">CONTACT INFORMATION</h3>
        <p className="text-terminal-green-dark">
          For privacy-related inquiries, please contact our data protection team
          at privacy@stronghabit.app
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
