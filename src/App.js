import React, { useState } from "react";

export default function ColorToggle() {
  const [color1, setColor1] = useState("red");
  const [color2, setColor2] = useState("blue");

  const toggleColors = () => {
    setColor1((prevColor) => (prevColor === "red" ? "blue" : "red"));
    setColor2((prevColor) => (prevColor === "blue" ? "red" : "blue"));
  };

return (
  <div style={{ display: "flex", gap: "20px" }}>
    <div
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: color1,
        borderRadius: "8px",
        cursor: "pointer",
      }}
      onClick={toggleColors}
    ></div>
    <div
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: color2,
        borderRadius: "8px",
        cursor: "pointer",
      }}
      onClick={toggleColors}
    ></div>
  </div>
);
}