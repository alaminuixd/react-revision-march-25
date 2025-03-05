import React from "react";
import "./Main.css";

function Main() {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"];

  // handler functions
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newIngredient = formData.get("ingredient");

    // Add the new ingredient to the list
    ingredients.push(newIngredient);

    // Manually update the HTML content for the list
    const ingredientListItems = ingredients
      .map((item, index) => {
        return `<li key=${index}>${item}</li>`;
      })
      .join("");

    // Update the DOM directly
    document.querySelector(".item-lists").innerHTML = ingredientListItems;

    // Clear the input field after submission
    form.reset();
  };

  return (
    <main>
      <div className="input-ingredient">
        <form onSubmit={handleSubmit}>
          <input type="text" name="ingredient" placeholder="e.g oregano" />
          <button type="submit">+ Add ingredient</button>
        </form>
      </div>
      <ul className="item-lists">
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </main>
  );
}

export default Main;
