import React from "react";
import "./FormBasic.css";
function FormBasic() {
  // hander functoin
  const handleSubmit = (e) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    const formData = new FormData(formEl);
    const email = formData.get("email");
    const password = formData.get("password");
    const dataObj = { email, password };
    console.log(dataObj);
    formEl.reset();
  };
  return (
    <section className="form-basic">
      <h1>Signup form</h1>
      <form onSubmit={handleSubmit} method="post">
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
