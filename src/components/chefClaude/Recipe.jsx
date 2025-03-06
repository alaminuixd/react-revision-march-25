import React, { useEffect } from "react";
import "./Recipe.css";

function Recipe() {
  const [ingredients, setIngredients] = React.useState([]);
  const [newIngredient, setNewIngredient] = React.useState({
    ingredientName: "",
  });

  // event handler functions
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewIngredient((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newIngredient.ingredientName) {
      alert("Please add a ingredient name");
      return;
    }
    setIngredients((prev) => {
      return [...prev, newIngredient];
    });
    setNewIngredient({ ingredientName: "" });
  };
  // process elements to return in view
  const ingredientElements = ingredients.map((ingredient, index) => (
    <li key={index}>{ingredient.ingredientName}</li>
  ));
  return (
    <div className="recepie-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="ingredientName"
          id=""
          value={newIngredient.ingredientName}
          onChange={handleInputChange}
        />
        <button type="submit">+ Add Ingredient</button>
      </form>
      <ul className="ingredients">{ingredientElements}</ul>
    </div>
  );
}

export default Recipe;
