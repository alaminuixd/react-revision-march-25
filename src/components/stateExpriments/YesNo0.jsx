import React from "react";

import "./YesNo.css";

function YesNo() {
  const [state, setState] = React.useState("Yes");
  const changeState = (e) => {
    setState((prev) => {
      return prev !== "Yes" ? "Yes" : "NO";
    });
  };
  return (
    <div>
      <h1>Are you feeling better now?</h1>
      <button className="boolButton" onClick={changeState}>
        {state}
      </button>
    </div>
  );
}

export default YesNo;
