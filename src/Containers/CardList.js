import React from "react";
import Card from "../Components/Card";
import "tachyons";
import "./CardList.css";
import ExpandedCard from "../Components/ExpandedCard";

const CardList = ({ charData }) => {
  return (
    <section className="tc cust-scroll flex flex-wrap justify-center">
      {charData.map((char, i) => {
        return (
          <>
            <ExpandedCard charData={char} key={i} />
          </>
        );
      })}
    </section>
  );
};

export default CardList;
