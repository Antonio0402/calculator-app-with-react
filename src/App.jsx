import React, { useState } from "react";
import Header from "./components/Header";
import Display from "./components/Display";
import Keys from "./components/Keys";
import { useReducer } from "react";

export const action = {
  ADD_DIGIT: "add-digit",
  ADD_OPERATOR: "add-operator",
  RESET: "reset",
  DELETE: "deletet",
  EVALUATE: "evaluate",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case action.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false,
        };
      }
      if (payload.digit === "0" && state.currentOperand === "0") {
        return state;
      }
      if (payload.digit === "." && state.currentOperand.includes(".")) {
        return state;
      }
      return {
        ...state,
        currentOperand: `${state.currentOperand ?? ""}${payload.digit}`,
      };
    case action.ADD_OPERATOR:
      if (state.currentOperand == null) {
        if (prevOperand == null) {
          return state;
        }
        return {
          ...state,
          operator: payload.operator,
        };
      }
      if (state.prevOperand == null) {
        return {
          ...state,
          operator: payload.operator,
          prevOperand: state.currentOperand,
          currentOperand: null,
        };
      }
      return {
        ...state,
        prevOperand: evaluate(state),
        operator: payload.operator,
        currentOperand: null,
      };
    case action.RESET:
      return { currentOperand: null };
    case action.DELETE:
      if (state.overwrite) {
        return { currentOperand: null };
      }
      if (state.currentOperand == null) {
        return state;
      }
      if (state.currentOperand.length === 1) {
        return {
          ...state,
          currentOperand: null,
        };
      }
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };

    case action.EVALUATE:
      if (
        state.operator == null ||
        state.currentOperand == null ||
        state.prevOperand == null
      ) {
        return state;
      }
      return {
        ...state,
        overwrite: true,
        prevOperand: null,
        operator: null,
        currentOperand: evaluate(state),
      };
  }
}

function evaluate({ prevOperand, operator, currentOperand }) {
  const prev = parseFloat(prevOperand);
  const curr = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(curr)) return "";
  let result = "";
  switch (operator) {
    case "+":
      result = prev + curr;
      break;
    case "-":
      result = prev - curr;
      break;
    case "x":
      result = prev * curr;
      break;
    case "/":
      result = prev / curr;
      break;
  }
  return result.toString();
}

const INTEGER_FORMAT = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
});

function formatOperand(operand) {
  if (operand == null) return;
  const [integer, decimal] = operand.split(".");
  if (decimal == null) return INTEGER_FORMAT.format(integer);
  return `${INTEGER_FORMAT.format(integer)}.${decimal}`;
}

function App() {
  const [themeToggle, setThemeToggle] = useState({ theme: "theme1" });
  const [{ currentOperand, operator }, dispatch] = useReducer(reducer, {});

  const theme = () => {
    if (themeToggle.theme === "theme1") {
      return "";
    } else if (themeToggle.theme === "theme2") {
      return "theme-2";
    } else {
      return "theme-3";
    }
  };

  return (
    <main
      className={
        "w-full h-screen flex justify-center items-center bg-fill-screen " +
        theme()
      }
    >
      <div className="w-full container-screen">
        <Header themeToggle={themeToggle} setThemeToggle={setThemeToggle} />
        <Display
          themeToggle={themeToggle}
          currentOperand={formatOperand(currentOperand)}
          operator={operator}
        />
        <Keys dispatch={dispatch} themeToggle={themeToggle} />
      </div>
    </main>
  );
}

export default App;
