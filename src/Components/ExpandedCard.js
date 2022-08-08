import React from "react";
import "./ExpandedCard.css";

const ExpandedCard = ({ charData }) => {
  const {
    img,
    name,
    birthday,
    occupation,
    status,
    nickname,
    appearance,
    portrayed,
  } = charData;
  console.log(charData);
  return (
    <div className="ExpandedCard tc br3 ma4 dib bw2 shadow-5">
      <div className="grid">
        <div>
          <img src={img} alt={name} />
          <div className="title-card">
            <h3>{name}</h3>
            <p class="birthday">
              {birthday !== "Unknown" ? "DOB " + birthday : ""}
            </p>
          </div>
        </div>
        <div>
          <p>Occupation {occupation}</p>
          <p>Status: {status}</p>
          <p>Nickname: {nickname}</p>
          <p>Season Appearances: {appearance}</p>
          <a
            href={`https://www.imdb.com/find?q=${portrayed.replace(" ", "+")}`}
            target="_blank"
          >
            <p>Portrayed by: {portrayed}</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExpandedCard;
