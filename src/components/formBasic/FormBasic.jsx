import React, { useEffect } from "react";

import { v4 as uuidv4 } from "uuid";
import "./FormBasic.css";

function FormBasic() {
  const [signUp, setSignup] = React.useState([]);
  const [newSignup, setNewSignup] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    description: "",
    employmentStatus: "",
  });
  const [err, setErr] = React.useState(null);
  const [success, setSuccess] = React.useState(false);

  // hander functions
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewSignup((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErr(null); // Reset error before validating

    const validations = [
      { field: "firstName", message: "First name is required." },
      { field: "lastName", message: "Last name is required." },
      { field: "email", message: "Email can't be empty." },
      { field: "password", message: "Password can't be empty." },
      { field: "confirmPassword", message: "Please confirm your password." },
      { field: "description", message: "Please add a description." },
      {
        field: "employmentStatus",
        message: "Please select an employment status.",
      },
    ];

    // Check each field for errors
    for (const validation of validations) {
      if (!newSignup[validation.field]) {
        setErr(validation.message);
        return;
      }
    }

    // Check if passwords match
    if (newSignup.password !== newSignup.confirmPassword) {
      setErr("Passwords do not match.");
      return;
    }

    // If no errors, you can process the form submission here (e.g., save data)
    setSignup((prev) => {
      const updatedSignup = { ...newSignup, id: uuidv4() };
      // console.log(updatedSignup); print: newSignup with uuid
      return [...prev, updatedSignup];
    });
    console.log(signUp);
    setSuccess(true);
    setNewSignup({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      description: "",
      employmentStatus: "",
    });
  };

  useEffect(() => {
    console.log(signUp);
  }, [signUp]);

  return (
    <section className="form-basic">
      <h1>Signup Form</h1>
      <form onSubmit={handleSubmit}>
        {err && <p style={{ color: "red" }}>{err}</p>}{" "}
        {success && (
          <p style={{ color: "#14c04b" }}>Form Submitted Successfully</p>
        )}
        {/* Display error message */}
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={newSignup.firstName}
          onChange={handleChange}
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={newSignup.lastName}
          onChange={handleChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          placeholder="joe@schmoe.com"
          value={newSignup.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Create a strong password"
          value={newSignup.password}
          onChange={handleChange}
        />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={newSignup.confirmPassword}
          onChange={handleChange}
        />
        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          placeholder="Your description"
          value={newSignup.description}
          onChange={handleChange}
        ></textarea>
        <fieldset>
          <legend>Employment Status:</legend>
          <label className="radio">
            <input
              type="radio"
              name="employmentStatus"
              value="unemployed"
              checked={newSignup.employmentStatus === "unemployed"}
              onChange={handleChange}
            />
            Unemployed
          </label>
          <label className="radio">
            <input
              type="radio"
              name="employmentStatus"
              value="part-time"
              checked={newSignup.employmentStatus === "part-time"}
              onChange={handleChange}
            />
            Part time
          </label>
          <label className="radio">
            <input
              type="radio"
              name="employmentStatus"
              value="full-time"
              checked={newSignup.employmentStatus === "full-time"}
              onChange={handleChange}
            />
            Full time
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default FormBasic;
