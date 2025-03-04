import React from "react";

function ButtonWarn(props) {
  const { label, onClick } = props;
  return (
    <button
      style={{
        backgroundColor: "#af0f0f",
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

export default ButtonWarn;
