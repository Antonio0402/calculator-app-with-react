import React from "react";

function Display({ themeToggle, currentOperand, operator }) {
  return (
    <div
      className={
        "bg-fill-main rounded-md mb-8 " +
        (themeToggle.theme === "theme2" ? "brightness-150" : "")
      }
    >
      <div className="container-screen container--display">
        <p className="text-700 text-text-base text-right">
          {currentOperand ?? operator ?? "0"}
        </p>
      </div>
    </div>
  );
}

export default Display;
