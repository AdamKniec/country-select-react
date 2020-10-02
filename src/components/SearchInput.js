import React from "react";
import { ReactComponent as MagGlass } from "../assets/imgs/magGlass.svg";
import styled from "styled-components";

const SearchInput = ({ value, changeHandler }) => {
  console.log(value);
  return (
    <Input htmlFor="searchInput" className="input-container">
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
    </Input>
  );
};

const Input = styled.label`
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
      // position: absolute;
    }
  }

  .searchInput {
    width: 400px;
    height: 40px;
    // background: url("./assets/imgs/search\ \(1\).svg") no-repeat;
    // background-size: 20px;
    // background-position: 5%;
    padding-left: 50px;
    border: none;
    background-color: hsl(0, 0%, 100%);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.35);
    border-radius: 5px;
  }
`;

export default SearchInput;
