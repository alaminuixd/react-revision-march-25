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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewSignup((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const validateForm = () => {
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

    for (const validation of validations) {
      if (!newSignup[validation.field]) {
        return validation.message;
      }
    }

    if (newSignup.password !== newSignup.confirmPassword) {
      return "Passwords do not match.";
    }

    return null; // No errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErr(null);

    const validationError = validateForm();
    if (validationError) {
      setErr(validationError);
      return;
    }

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
    console.log(signUp);
  }, [signUp]);

  const radioOptions = [
    { value: "unemployed", label: "Unemployed" },
    { value: "part-time", label: "Part time" },
    { value: "full-time", label: "Full time" },
  ];

  return (
    <section className="form-basic">
      <h1>Signup Form</h1>
      <form onSubmit={handleSubmit}>
        {err && <p style={{ color: "red" }}>{err}</p>}
        {success && (
          <p style={{ color: "#14c04b" }}>Form Submitted Successfully</p>
        )}

        <InputField
          name="firstName"
          label="First Name"
          value={newSignup.firstName}
          onChange={handleChange}
        />
        <InputField
          name="lastName"
          label="Last Name"
          value={newSignup.lastName}
          onChange={handleChange}
        />
        <InputField
          name="email"
          label="Email"
          value={newSignup.email}
          onChange={handleChange}
          type="email"
        />
        <InputField
          name="password"
          label="Password"
          value={newSignup.password}
          onChange={handleChange}
          type="password"
        />
        <InputField
          name="confirmPassword"
          label="Confirm Password"
          value={newSignup.confirmPassword}
          onChange={handleChange}
          type="password"
        />
        <textarea
          name="description"
          placeholder="Your description"
          value={newSignup.description}
          onChange={handleChange}
        ></textarea>

        <fieldset>
          <legend>Employment Status:</legend>
          {radioOptions.map((option) => (
            <label key={option.value} className="radio">
              <input
                type="radio"
                name="employmentStatus"
                value={option.value}
                checked={newSignup.employmentStatus === option.value}
                onChange={handleChange}
              />
              {option.label}
            </label>
          ))}
        </fieldset>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

const InputField = ({ name, label, value, onChange, type = "text" }) => (
  <>
    <label htmlFor={name}>{label}:</label>
    <input
      type={type}
      name={name}
      placeholder={label}
      value={value}
      onChange={onChange}
    />
  </>
);

export default FormBasic;
