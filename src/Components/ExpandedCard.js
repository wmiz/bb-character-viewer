import React from "react";
import "./ExpandedCard.css";
import Bubbles from "../Components/Bubbles";
import { FaImdb } from "react-icons/fa";

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
          <p>
            <b>
              Occupation
              {occupation.length > 1 ? "s" : ""}:
            </b>
            {occupation}
          </p>
          <p>
            <b>Status:</b> {status}
          </p>
          <p>
            <b>Nickname:</b> {nickname}
          </p>
          <p>
            <b>Appearances:</b> <Bubbles values={appearance}></Bubbles>
          </p>
          <p>
            <b>Portrayed by:</b>{" "}
            <a
              href={`https://www.imdb.com/find?q=${portrayed.replace(
                " ",
                "+"
              )}`}
              target="_blank"
              rel="norefferer"
            >
              {portrayed}
              <FaImdb className="v-mid pa1 imdb"></FaImdb>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpandedCard;
