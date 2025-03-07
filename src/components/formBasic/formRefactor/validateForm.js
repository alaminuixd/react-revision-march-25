export default (newSignup, setErr) => {
  const formValidations = [
    { name: "firstName", message: "First name is required." },
    { name: "lastName", message: "Last name is required." },
    { name: "email", message: "Email can't be empty" },
    { name: "password", message: "Password can't be empty" },
    { name: "confirmPassword", message: "Please confirm your password" },
    { name: "description", message: "Please add a description" },
    {
      name: "employmentStatus",
      message: "Please select an employment status",
    },
  ];

  for (const validation of formValidations) {
    if (!newSignup[validation.name]) {
      setErr(validation.message);
      return false; // Return false when there's an error
    }
  }

  if (newSignup.password !== newSignup.confirmPassword) {
    setErr("Passwords do not match");
    return false;
  }

  setErr(null); // Clear error if everything is valid
};
