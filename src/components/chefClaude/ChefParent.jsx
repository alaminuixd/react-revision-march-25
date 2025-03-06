import React from "react";
import "./ChefParent.css";
import Header from "./Header";
import Recipe from "./Recipe";

function ChefParent() {
  return (
    <div className="container">
      <Header />
      <Recipe />
    </div>
  );
}

export default ChefParent;
