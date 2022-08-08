import React from "react";
import Card from "../Components/Card";
import "tachyons";

const CardList = ({ charData }) => {
  return (
    <section className="tc flex flex-wrap justify-center">
      {charData.map((char, i) => {
        return (
          <Card
            className="Card w-25 pa3 mr2"
            imgURL={char.img}
            name={char.name}
            key={i}
          ></Card>
        );
      })}
    </section>
  );
};

export default CardList;
