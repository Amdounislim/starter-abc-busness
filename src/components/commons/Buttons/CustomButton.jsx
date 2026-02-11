import React from "react";

const CustomButton = ({
  text,
  callBack,
  fontSize = "19px",
  fontStyle = "normal",
  className = "",
}) => {
  return (
    <button
      onClick={callBack}
      className={`customButton ${className}`}
      style={{ fontSize, fontStyle }}
    >
      {text}
    </button>
  );
};

export default CustomButton;
