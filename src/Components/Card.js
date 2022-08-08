import React from "react";
import "./Card.css";

const Card = ({ imgURL, name }) => {
  return (
    <div className="Card tc grow br3 pa3 ma2 dib bw2 shadow-5">
      <img src={imgURL} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};

export default Card;
