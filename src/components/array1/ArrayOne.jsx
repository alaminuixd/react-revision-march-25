import React from "react";

function ArrayOne() {
  // React can render Array
  const names = ["marium", "arshiya", "abrar", "person4", "person5"];
  return (
    <div>
      {/* Following will render all items in the array */}
      <p>{names}</p>
      {/* We can also do this directly*/}
      <p>{["marium", "arshiya", "abrar", "person4", "person5"]}</p>
      {/* Or this */}
      <p>{["marium", "arshiya", "abrar", "person4", "person5"].join(" | ")}</p>
      {/* 
      But React can't directly render objects in an array like so
      {[{name: "Al Amin", father: "Syed Ahmed", age: 39}]}
       */}
    </div>
  );
}

export default ArrayOne;
