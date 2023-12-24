import React from "react";
import Emoji from "./Assests/heart-emoji";

const Footer = () => {
  return (
    <>
      <footer className="md:p-6 lg:p-8 bg-[#FDF8EC]">
        <p className="bottom-0 text-center text-xs lg:text-sm inset-x-1/4">
          Made With <Emoji symbol="❤" label="sheep" /> by Sky - {""}
          <span className="text-[#e75d48] font-bold">2023</span>
        </p>
      </footer>
    </>
  );
};

export default Footer;
