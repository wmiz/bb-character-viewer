import React from "react";

const SearchBox = ({ onSearchChange }) => {
  return (
    <div className="pa2 tc">
      <input
        className="pa3 ba b--green"
        type="search"
        placeholder="Search characters..."
        onChange={onSearchChange}
      />
      <input type="submit" className="pa3 ba bg-dark-green white" />
    </div>
  );
};

export default SearchBox;
