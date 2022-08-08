import React from "react";
import "tachyons";
import "./CardList.css";
import ExpandedCard from "../Components/ExpandedCard";

const CardList = ({ charData, deathData }) => {
  if (charData.length === 0) {
    return <h1 className="tc">No characters found.</h1>;
  }
  return (
    <section className="tc cust-scroll flex flex-wrap justify-center">
      {charData.map((char, i) => {
        return (
          <>
            <ExpandedCard
              charData={char}
              deathData={deathData}
              key={`ec-${i}`}
            />
          </>
        );
      })}
    </section>
  );
};

export default CardList;
