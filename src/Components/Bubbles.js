import React from "react";
import "./Bubbles.css";

const Bubbles = ({ values }) => {
  return (
    <ul className="bubble-list">
      {values.map((value, i) => {
        return (
          <li className="bubble grow shadow-5" key={i}>
            <span>BB | Season {value}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default Bubbles;
