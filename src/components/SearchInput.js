import React from "react";
import { ReactComponent as MagGlass } from "../assets/imgs/magGlass.svg";

const SearchInput = ({ inputValue, changeHandler }) => {
  return (
    <label htmlFor="searchInput" className="input-container">
      <span>
        <MagGlass className="mag-glass-icon" />
      </span>

      <input
        type="text"
        id="searchInput"
        value={inputValue}
        onChange={changeHandler}
        className="searchInput"
        placeholder="Search for a country..."
      />
    </label>
  );
};

export default SearchInput;
