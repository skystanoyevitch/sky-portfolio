import React from "react";
import { NavLink } from "react-router-dom";

export const FooterNav = () => {
  return (
    <>
      <nav className="text-white">
        <ul className="flex space-x-8 m-6">
          <li className="">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="">
            <NavLink to="#" activeStyle={{ color: "orange" }}>
              Coming Soon...
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
