import React from "react";
import { NavLink } from "react-router-dom";

export const FooterNav = () => {
  return (
    <nav className="text-text-primary dark:text-dark-text-primary">
      <ul className="flex space-x-8 m-6">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition-colors duration-300 hover:text-accent ${
                isActive
                  ? "text-accent font-semibold"
                  : "text-text-secondary dark:text-dark-text-secondary"
              }`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <span className="text-text-muted dark:text-dark-text-muted cursor-not-allowed">
            Coming Soon...
          </span>
        </li>
      </ul>
    </nav>
  );
};
