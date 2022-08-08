import React from "react";

const Search = ({ imgURL, name }) => {
  return (
    <>
      <img src="{imgURL}" alt="{name}" />
      <p>{name}}</p>
    </>
  );
};

export default Search;
