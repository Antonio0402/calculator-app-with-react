import React from "react";
import Digit from "./Digit";
import Fnc from "./Fnc";
import Operator from "./Operator";
import Delete from "./Delete";

function Keys({ themeToggle, dispatch }) {
  return (
    <div
      className={
        "rounded-md " +
        (themeToggle.theme === "theme2" ? "bg-fill-toggle" : "bg-fill-main")
      }
    >
      <div className="container-screen container--main grid grid-cols-4 gap-4 sm:gap-6">
        <Digit dispatch={dispatch} digit="7" />
        <Digit dispatch={dispatch} digit="8" />
        <Digit dispatch={dispatch} digit="9" />
        <Delete dispatch={dispatch} func="DEL" />
        <Digit dispatch={dispatch} digit="4" />
        <Digit dispatch={dispatch} digit="5" />
        <Digit dispatch={dispatch} digit="6" />
        <Operator dispatch={dispatch} operator="+" />
        <Digit dispatch={dispatch} digit="1" />
        <Digit dispatch={dispatch} digit="2" />
        <Digit dispatch={dispatch} digit="3" />
        <Operator dispatch={dispatch} operator="-" />
        <Digit dispatch={dispatch} digit="." />
        <Digit dispatch={dispatch} digit="0" />
        <Operator dispatch={dispatch} operator="/" />
        <Operator dispatch={dispatch} operator="x" />
        <Fnc dispatch={dispatch} themeToggle={themeToggle} func="RESET" />
        <Fnc dispatch={dispatch} themeToggle={themeToggle} func="=" />
      </div>
    </div>
  );
}

export default Keys;
