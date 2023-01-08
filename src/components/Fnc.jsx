import React from "react";
import { action } from "../App";

function Fnc({ func, themeToggle, dispatch }) {
  return (
    <button
      className={
        "key fnc " +
        (func === "="
          ? themeToggle.theme === "theme1"
            ? "equal"
            : "equal text-text-keys-equal"
          : "reset")
      }
      onClick={() =>
        dispatch({ type: func === "RESET" ? action.RESET : action.EVALUATE })
      }
    >
      {func}
    </button>
  );
}

export default Fnc;
