import React, { useEffect } from "react";

import { v4 as uuidv4 } from "uuid";
import "./FormBasic.css";

function FormBasic() {
  // form action handler
  const signUp = (formData) => {
    /* const email = formData.get("email");
    const password = formData.get("password");
    const employmentStatus = formData.get("employmentStatus");
    const fevColor = formData.get("fevColor");
    console.log(fevColor); */
    const data = Object.fromEntries(formData);
    const dietary = formData.getAll("dietaryRestriction");
    const allData = { ...data, dietaryRestriction: dietary };
    console.log(allData);
  };
  return (
    <section className="form-basic">
      <h1>Signup Form</h1>
      <form action={signUp}>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" placeholder="joe@schmoe.com" />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Create a strong password"
        />
        <label htmlFor="description">Description:</label>
        <textarea name="description" placeholder="Your description"></textarea>
        <fieldset>
          <legend>Employment Status:</legend>
          <label className="radio">
            <input
              type="radio"
              name="employmentStatus"
              value="unemployed"
              defaultChecked={true}
            />
            Unemployed
          </label>
          <label className="radio">
            <input type="radio" name="employmentStatus" value="part-time" />
            Part time
          </label>
          <label className="radio">
            <input type="radio" name="employmentStatus" value="full-time" />
            Full time
          </label>
        </fieldset>
        <fieldset>
          <legend>Dietary Restriction:</legend>
          <label className="checkbox">
            <input
              type="checkbox"
              name="dietaryRestriction"
              value="unemployed"
              defaultChecked={true}
            />
            Beef and Matoon
          </label>
          <label className="checkbox">
            <input
              type="checkbox"
              name="dietaryRestriction"
              value="part-time"
            />
            Suger
          </label>
          <label className="checkbox">
            <input
              type="checkbox"
              name="dietaryRestriction"
              value="full-time"
            />
            White Rice
          </label>
        </fieldset>
        <div className="fev-color-container">
          <label htmlFor="favColor">What is your favorite color?</label>
          <select name="fevColor" id="fevColor" defaultValue={""} required>
            <option value="" disabled>
              Choose your favorite color
            </option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="white">White</option>
            <option value="black">Black</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default FormBasic;
