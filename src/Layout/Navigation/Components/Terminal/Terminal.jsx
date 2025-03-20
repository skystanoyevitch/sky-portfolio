import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const Terminal = ({
  children,
  title = "TERMINAL",
  initialCommands = [],
  className = "",
  fullHeight = false,
  onCommandExecute = () => {}, // Add command execution callback
}) => {
  const [commandHistory, setCommandHistory] = useState([]);
  const [currentCommand, setCurrentCommand] = useState("");
  const [inputCommand, setInputCommand] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const terminalRef = useRef(null);
  const cursorRef = useRef(null);
  const commandLineRef = useRef(null);
  const inputRef = useRef(null);
  const tl = useRef();

  // Simulate typing initial commands
  useEffect(() => {
    if (
      initialCommands.length === 0 ||
      currentIndex >= initialCommands.length
    ) {
      setIsTyping(false);
      return;
    }

    setIsTyping(true);
    const command = initialCommands[currentIndex];
    let charIndex = 0;

    const typeChar = () => {
      if (charIndex < command.length) {
        setCurrentCommand((prev) => prev + command[charIndex]);
        charIndex++;

        // Keep scrolling to bottom as text is typed
        if (terminalRef.current) {
          const outputArea =
            terminalRef.current.querySelector(".terminal-output");
          if (outputArea) {
            outputArea.scrollTop = outputArea.scrollHeight;
          }
        }

        setTimeout(typeChar, Math.random() * 50 + 30); // Random delay for realistic typing
      } else {
        setTimeout(() => {
          setCommandHistory((prev) => [...prev, command]);
          setCurrentCommand("");
          setCurrentIndex((prev) => prev + 1);
        }, 500);
      }
    };

    setTimeout(typeChar, 800);
  }, [initialCommands, currentIndex]);

  // Animation setup
  useEffect(() => {
    let ctx = gsap.context(() => {
      // Blinking cursor animation
      tl.current = gsap
        .timeline({ repeat: -1 })
        .to(cursorRef.current, { opacity: 0, duration: 0.5, ease: "steps(1)" })
        .to(cursorRef.current, { opacity: 1, duration: 0.5, ease: "steps(1)" });

      // Scan line animation
      gsap.to(".scan-line", {
        y: "100%",
        duration: 2,
        ease: "none",
        repeat: -1,
      });
    }, terminalRef);

    return () => ctx.revert();
  }, []);

  // Auto-scroll to bottom of terminal
  useEffect(() => {
    if (terminalRef.current) {
      const outputArea = terminalRef.current.querySelector(".terminal-output");
      if (outputArea) {
        outputArea.scrollTop = outputArea.scrollHeight;
      }
    }
  }, [commandHistory, currentCommand]);

  // Handle keyboard input
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (inputCommand.trim()) {
        // Add command to history
        setCommandHistory((prev) => [...prev, inputCommand]);

        // Execute command if it matches a known command
        onCommandExecute(inputCommand.trim().toUpperCase());

        // Clear input
        setInputCommand("");
      }
    }
  };

  return (
    <div
      ref={terminalRef}
      className={`bg-terminal-black border-2 border-terminal-green shadow-terminal p-0 overflow-hidden flex flex-col ${
        fullHeight ? "h-full" : ""
      } ${className}`}
      onClick={() => inputRef.current && inputRef.current.focus()}
    >
      {/* Terminal header */}
      <div className="flex justify-between items-center border-b-2 border-terminal-green bg-terminal-green bg-opacity-10 px-4 py-2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-sm text-terminal-green font-vt text-shadow-terminal">
          {title}
        </div>
        <div className="text-sm text-terminal-green font-vt">[SYSTEM]</div>
      </div>

      {/* Terminal content */}
      <div className="relative flex-grow">
        {/* CRT effect overlay */}
        <div className="absolute inset-0 pointer-events-none z-10 crt"></div>

        {/* Scan line effect */}
        <div className="scan-line absolute w-full h-1 bg-terminal-green bg-opacity-10 top-0 left-0 z-20"></div>

        {/* Terminal output */}
        <div className="p-5 font-vt text-terminal-green h-full">
          {/* Boot sequence and command history - scrollable area */}
          <div className="terminal-output max-h-48 overflow-y-auto mb-4 border-b border-terminal-green border-opacity-30 pb-2 relative">
            {/* Scroll indicator */}
            <div className="absolute right-0 top-0 px-1 text-xs text-terminal-green-dark border-l border-b border-terminal-green border-opacity-30">
              [SCROLL↕]
            </div>

            {/* Command history */}
            {commandHistory.map((cmd, i) => (
              <div key={i} className="mb-2 pr-16">
                <span className="text-terminal-green-dark">$ </span>
                <span>{cmd}</span>
              </div>
            ))}

            {/* Current command being typed by system */}
            {isTyping && (
              <div className="flex mb-4 pr-16" ref={commandLineRef}>
                <span className="text-terminal-green-dark">$ </span>
                <span>{currentCommand}</span>
                <span
                  ref={cursorRef}
                  className="h-5 w-2 ml-0.5 bg-terminal-green inline-block"
                ></span>
              </div>
            )}
          </div>

          {/* Children contents */}
          <div className="overflow-y-auto">{children}</div>

          {/* User input line */}
          {!isTyping && (
            <div className="flex items-center mt-4">
              <span className="text-terminal-green-dark">$ </span>
              <div className="flex-grow relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputCommand}
                  onChange={(e) => setInputCommand(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="bg-transparent border-none outline-none text-terminal-green font-vt w-full"
                  aria-label="Terminal command input"
                />
                {!inputCommand && (
                  <span
                    ref={cursorRef}
                    className="h-5 w-2 ml-0.5 bg-terminal-green inline-block absolute left-0 top-0"
                  ></span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Terminal;
