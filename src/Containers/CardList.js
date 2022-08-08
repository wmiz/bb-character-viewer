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
            <Card
              className="Card w-25 pa3 mr2"
              imgURL={char.img}
              name={char.name}
              key={i}
            ></Card>
            <ExpandedCard charData={char} />
          </>
        );
      })}
    </section>
  );
};

export default CardList;
