import React from "react";

function JsxObject() {
  const myList = [
    <h2>My Shopping List</h2>,
    <p>Polow Rice</p>,
    <p>Hilsha Fish</p>,
    <p>Tomato for sauce</p>,
    <p>Mustard Oil</p>,
  ];
  return (
    <div>
      <div>{myList}</div>
      {/* above will give an "unique key" error. but the following will not */}
      <div>{...myList}</div>
    </div>
  );
}

export default JsxObject;
