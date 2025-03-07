import React, { useState } from "react";

function Radio0() {
  const [employmentStatus, setEmploymentStatus] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setEmploymentStatus(e.target.value);
  };

  return (
    <div>
      <h2>Employment Status</h2>
      <form>
        <label>
          <input
            type="radio"
            name="employmentStatus"
            value="unemployed"
            checked={employmentStatus === "unemployed"}
            onChange={handleChange}
          />
          Unemployed
        </label>
        <label>
          <input
            type="radio"
            name="employmentStatus"
            value="part-time"
            checked={employmentStatus === "part-time"}
            onChange={handleChange}
          />
          Part-time
        </label>
        <label>
          <input
            type="radio"
            name="employmentStatus"
            value="full-time"
            checked={employmentStatus === "full-time"}
            onChange={handleChange}
          />
          Full-time
        </label>
      </form>
      <p>Selected Status: {employmentStatus}</p>
    </div>
  );
}

export default Radio0;
