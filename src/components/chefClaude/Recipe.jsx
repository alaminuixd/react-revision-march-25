import React, { useEffect } from "react";
import "./Recipe.css";

import { FaCirclePlus } from "react-icons/fa6";

function Recipe() {
  const [ingredients, setIngredients] = React.useState([]);

  const addIngredient = (formData) => {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredient) => {
      console.log(prevIngredient);
      return [...prevIngredient, newIngredient];
    });
  };
  // process elements to return in view
  const ingredientElements = ingredients.map((ingredient, index) => (
    <li key={index}>{ingredient}</li>
  ));
  useEffect(() => {
    console.log(ingredients);
  }, [ingredients]);
  return (
    <div className="recepie-container">
      <form action={addIngredient}>
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button type="submit">
          <FaCirclePlus /> Add Ingredient
        </button>
      </form>
      <ul className="ingredients">{ingredientElements}</ul>
    </div>
  );
}

export default Recipe;
