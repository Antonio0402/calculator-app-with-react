import React from "react";
import { action } from "../App";

function Operator({ dispatch, operator }) {
  return (
    <button
      className="key"
      onClick={() =>
        dispatch({ type: action.ADD_OPERATOR, payload: { operator } })
      }
    >
      {operator}
    </button>
  );
}

export default Operator;
