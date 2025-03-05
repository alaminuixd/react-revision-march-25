import React from "react";

import "./YesNo.css";

function YesNo() {
  const [state, setState] = React.useState(true);
  const changeState = (e) => {
    setState((prev) => {
      return !prev;
    });
  };
  return (
    <div>
      <h1>Are you feeling better now?</h1>
      <button
        className="boolButton"
        onClick={() => {
          return setState((prev) => !prev);
        }}
      >
        {state ? "YES" : "NO"}
      </button>
    </div>
  );
}

export default YesNo;
