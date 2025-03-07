import React from "react";
import "./FormBasic.css";

function FormBasic() {
  const signUp = (formData) => {
    const email = formData.get("email");
    const passwrod = formData.get("password");
    const formObj = { email, passwrod };
    console.log(formObj);
  };

  return (
    <section className="form-basic">
      <h1>Signup Form</h1>
      <form action={signUp}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="joe@schmoe.com"
        />
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default FormBasic;
