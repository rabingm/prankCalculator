import React from "react";
import "./buttons.style.css";

const buttons = [
  "OFF",
  "AC",
  "C",
  "ON",
  7,
  8,
  9,
  "/",

  4,
  5,
  6,
  "-",
  1,
  2,
  3,
  "+",
  0,
  "00",
  ".",
  "=",
];

export const Buttons = ({ buttonClick }) => {
  return (
    <div className="buttons">
      {buttons.map((item, i) => (
        <button key={i} className="numBtn" onClick={() => buttonClick(item)}>
          {item}
        </button>
      ))}
    </div>
  );
};
