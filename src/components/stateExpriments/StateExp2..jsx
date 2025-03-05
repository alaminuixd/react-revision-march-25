import React, { useEffect } from "react";

function StateExp1() {
  // as useState() fucntion returns an "array" of two items [currentState, setStateFunction]
  // we can destructur this "array" like so
  let [value, setValue] = React.useState("Yes");
  useEffect(() => {
    setValue("hack yes");
  }, []);
  return (
    <div>
      <h1>The State</h1>
      <button>{value}</button>
    </div>
  );
}

export default StateExp1;
