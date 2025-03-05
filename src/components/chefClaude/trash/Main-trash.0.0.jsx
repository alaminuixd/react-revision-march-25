import React, { useEffect, useState } from "react";

import "./Main.css";

function Main() {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"];
  const ingredientListItems = ingredients.map((item, index) => {
    return <li key={index}>{item}</li>;
  });
  // handler functions
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    // Log form data
    for (let item of formData) {
      console.log(item);
      const key = item;
      const value = formData[key];
      console.log(`Key: ${key} value: ${value}`);
      // Log form data
      formData.forEach((value, key) => {
        console.log(key, value);
      });
    }
  };
  return (
    <main>
      <div className="input-ingredient">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="ingredient"
            id="ingredient"
            placeholder="e.g oregano"
          />
          <button type="submit">+ Add ingredient</button>
        </form>
      </div>
      <ul className="item-lists">{ingredientListItems}</ul>
    </main>
  );
}

export default Main;
