import React from "react";

function StateExp1() {
  let state = "YES";
  // if we change the state without any interaction it will work
  state = "Dam Yes!";
  // but if we chagne the state in an intrection like the following click event, it wouldn't work
  const changeState = () => {
    state = "Change ageain";
    // it will change in the memory though, but will not render in the "view"
    console.log(state);
  };
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={changeState}>Click Me</button>
    </div>
  );
}

export default StateExp1;
