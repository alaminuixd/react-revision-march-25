import React from "react";

function Counter() {
  const [count, setCount] = React.useState(0);
  const add = (e) => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };
  const sub = (e) => {
    setCount((prev) => prev - 1);
    setCount((prev) => prev - 1);
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={sub}>-</button> <button onClick={add}>+</button>
    </div>
  );
}

export default Counter;
