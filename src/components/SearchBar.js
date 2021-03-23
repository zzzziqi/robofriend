import React from "react";

const SearchBar = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        placeholder="Enter your robot friend"
        onChange={searchChange}
      ></input>
    </div>
  );
};

export default SearchBar;
