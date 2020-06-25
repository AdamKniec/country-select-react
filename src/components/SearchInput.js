import React from "react";

const SearchInput = ({ inputValue, changeHandler }) => {
  return (
    <label htmlFor="searchInput">
      <input
        type="text"
        id="searchInput"
        value={inputValue}
        onChange={changeHandler}
      />
    </label>
  );
};

export default SearchInput;
