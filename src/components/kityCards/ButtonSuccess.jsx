import React from "react";

function ButtonSuccess({ label, onClick }) {
  return (
    <button
      style={{
        backgroundColor: "green",
        color: "white",
        padding: "10px 15px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default ButtonSuccess;
