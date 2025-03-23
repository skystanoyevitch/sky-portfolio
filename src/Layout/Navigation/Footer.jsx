// Footer.jsx
import React from "react";
import Emoji from "./Assests/heart-emoji";

const Footer = () => {
  return (
    <>
      <footer className="p-4 border-t border-border bg-primary-dark text-text-secondary">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-text-muted text-xs">[LAST UPDATE: 2025.03.22]</p>
            <p className="text-center text-xs lg:text-sm">
              Made With{" "}
              <Emoji symbol="❤" label="heart" className="text-accent" /> by Sky
              - {""}
              <span className="text-secondary font-bold">2025</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
