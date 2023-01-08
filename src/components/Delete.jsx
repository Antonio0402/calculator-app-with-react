import React from "react";
import { action } from "../App";

function Delete({ dispatch, func }) {
  return (
    <button
      className="key fnc"
      onClick={() => dispatch({ type: action.DELETE })}
    >
      {func}
    </button>
  );
}

export default Delete;
