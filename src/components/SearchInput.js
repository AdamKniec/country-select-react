import React from "react";
import { ReactComponent as MagGlass } from "../assets/imgs/magGlass.svg";
import styled from "styled-components";
import { respondTo } from "../styles/RespondTo";

const SearchInput = ({ value, changeHandler, darkMode }) => {
  return (
    <Label
      htmlFor="searchInput"
      className="input-container"
      darkMode={darkMode}
    >
      <span>
        <MagGlass className="mag-glass-icon" />
      </span>

      <input
        type="text"
        id="searchInput"
        value={value}
        onChange={changeHandler}
        className="searchInput"
        placeholder="Search for a country..."
      />
    </Label>
  );
};

const Label = styled.label`
  position: relative;
  span {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    left: 20px;
    .mag-glass-icon {
      width: 15px;
      height: 15px;
      left: 20px;
      fill: ${(props) => (props.darkMode === true ? "white" : "#a9a9a9")};
    }
  }

  .searchInput {
    color: ${(props) => (props.darkMode === true ? "white" : "black")};
    width: 400px;
    height: 40px;
    padding-left: 50px;
    border: none;
    background-color: ${(props) =>
      props.darkMode === true ? "hsl(209, 23%, 22%)" : "white"};
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.35);
    border-radius: 5px;
    &::placeholder {
      color: ${(props) => (props.darkMode === true ? "white" : "#a9a9a9")};
      opacity: 1;
    }
    ${respondTo.md`
      width: -webkit-fill-available;
  `}
  }
`;

export default SearchInput;
