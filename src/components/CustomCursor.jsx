// CustomCursor.jsx - Minimalist cursor component
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Add event listeners for interactive elements
    const handleHoverableElements = () => {
      const hoverableElements = document.querySelectorAll("a, button, .group");

      hoverableElements.forEach((element) => {
        element.addEventListener("mouseenter", () => setCursorVariant("hover"));
        element.addEventListener("mouseleave", () =>
          setCursorVariant("default")
        );
      });

      // Cleanup function
      return () => {
        hoverableElements.forEach((element) => {
          element.removeEventListener("mouseenter", () =>
            setCursorVariant("hover")
          );
          element.removeEventListener("mouseleave", () =>
            setCursorVariant("default")
          );
        });
      };
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);

    const cleanup = handleHoverableElements();

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cleanup && cleanup();
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      width: 16,
      height: 16,
      backgroundColor: "rgba(14, 165, 233, 0.1)",
      border: "1px solid rgba(14, 165, 233, 0.2)",
    },
    hover: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      width: 32,
      height: 32,
      backgroundColor: "rgba(14, 165, 233, 0.05)",
      border: "1px solid rgba(14, 165, 233, 0.3)",
    },
  };

  // Don't render on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 rounded-full mix-blend-screen"
      variants={variants}
      animate={cursorVariant}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
      }}
      style={{
        display: isVisible ? "block" : "none",
      }}
    />
  );
};

export default CustomCursor;
