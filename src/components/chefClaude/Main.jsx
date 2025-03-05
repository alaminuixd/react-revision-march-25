import React, { useState } from "react";
import "./Main.css";

function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState({ ingName: "" });

  const ingredientListItems = ingredients.map((item, index) => (
    <li key={index}>{item.ingName}</li>
  ));

  // input handler functions
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewIngredient((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newIngredient.ingName.trim()) {
      setIngredients((prev) => {
        console.log(prev);
        return [...prev, { ingName: newIngredient.ingName }];
      }); // Only add the ingredient name
      setNewIngredient({ ingName: "" }); // Clear the input after submission
    }
  };

  return (
    <main>
      <div className="input-ingredient">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="ingName" // Name attribute now matches the key in newIngredient state
            placeholder="e.g oregano"
            value={newIngredient.ingName}
            onChange={handleInputChange}
          />
          <button type="submit">+ Add ingredient</button>
        </form>
      </div>
      <ul className="item-lists">{ingredientListItems}</ul>
    </main>
  );
}

export default Main;
