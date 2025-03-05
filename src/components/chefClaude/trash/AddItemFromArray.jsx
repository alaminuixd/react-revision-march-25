import React, { useState } from "react";
import "./Main.css";

function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [inputValue, setInputValue] = useState(""); // Store input value separately

  const ingredientListItems = ingredients.map((item, index) => {
    return <li key={index}>{item}</li>;
  });

  // We directly get input data while submitting
  const handleSubmit2 = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newIngredient = formData.get("ingredient");

    if (newIngredient.trim()) {
      // Only add if it's not empty
      setIngredients((prev) => [...prev, newIngredient]);
      setInputValue(""); // Clear the input field after submission
    }
  };

  return (
    <main>
      <div className="input-ingredient">
        <form onSubmit={handleSubmit2}>
          <input
            type="text"
            name="ingredient"
            placeholder="e.g oregano"
            onChange={(e) => setInputValue(e.target.value)} // Update state as user types
          />
          <button type="submit">+ Add ingredient</button>
        </form>
      </div>
      <ul className="item-lists">{ingredientListItems}</ul>
    </main>
  );
}

export default Main;
