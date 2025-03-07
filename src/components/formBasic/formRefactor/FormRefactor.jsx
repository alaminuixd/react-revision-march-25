import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./FormRefactor.css";
import validateForm from "./validateForm";

function FormRefactor() {
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

  // form handler functoins
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewSignup((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErr(null);
    setSuccess(false);

    const isValid = validateForm(newSignup, setErr);
    if (!isValid) return;

    const updatedSignup = { ...newSignup, id: uuidv4() };
    setSignup((prev) => [...prev, updatedSignup]);
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
    console.log(err);
  }, [err]);

  return (
    <section className="form-basic">
      <h1>Signup Form</h1>
      <form onSubmit={handleSubmit}>
        {err && <p style={{ color: "red" }}>{err}</p>}
        {success && (
          <p style={{ color: "#14c04b" }}>Form Submitted Successfully</p>
        )}
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

export default FormRefactor;
