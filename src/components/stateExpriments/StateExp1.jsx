import React from "react";

function StateExp1() {
  const result = React.useState("Yes");
  console.log(result); // result: ["Yes", a functon]
  const changeState = (e) => {
    if (result[0] === "Yes") {
      result[1]("No");
    } else {
      result[1]("Yes");
    }
  };
  return (
    <div>
      <h1>The State</h1>
      <button onClick={changeState}>{result[0]}</button>
    </div>
  );
}

export default StateExp1;
