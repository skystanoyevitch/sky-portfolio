import React from "react";
import Emoji from "./Assests/heart-emoji";

const Footer = () => {
  return (
    <>
      <footer className="p-4 border-t border-terminal-green bg-terminal-black text-terminal-green font-vt">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-terminal-green-dark text-xs">
              [SYSTEM STATUS: ONLINE] | [LAST UPDATE: 2025.03.20]
            </p>
            <p className="text-center text-xs lg:text-sm">
              Made With <Emoji symbol="❤" label="heart" /> by Sky - {""}
              <span className="text-terminal-green font-bold">2025</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
