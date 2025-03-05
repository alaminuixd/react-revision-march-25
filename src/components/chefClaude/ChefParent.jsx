import React from "react";
import "./ChefParent.css";
import Header from "./Header";
import Main from "./Main";

function ChefParent() {
  return (
    <div className="container">
      <Header />
      <Main />
    </div>
  );
}

export default ChefParent;
