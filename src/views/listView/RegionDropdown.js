import React, { useState } from "react";
import { ReactComponent as ArrowIcon } from "../../assets/imgs/down-arrow.svg";
import styled from "styled-components";
import { respondTo } from "../../styles/RespondTo";

const RegionDropdown = ({ setRegionFilter, selectedRegion, darkMode }) => {
  const [active, setActive] = useState(false);
  const selectableRegions = [
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
    "All",
  ];

  const toggleRegionDropdown = () => {
    setActive(!active);
  };

  return (
    <Dropdown darkMode={darkMode}>
      <button
        className="region-switch-trigger"
        onClick={() => toggleRegionDropdown()}
      >
        {selectedRegion !== "All" ? selectedRegion : "Filter by Region"}
        <span>
          <ArrowIcon className="arrow-icon" />
        </span>
      </button>
      <div
        className={
          active
            ? "regions-filters-container active"
            : "regions-filters-container"
        }
      >
        {selectableRegions.map((region) => (
          <button
            className="regionFilter"
            key={region}
            onClick={() => {
              setRegionFilter(region);
              setActive(false);
            }}
          >
            {region}
          </button>
        ))}
      </div>
    </Dropdown>
  );
};

const Dropdown = styled.div`
  position: relative;
  .region-switch-trigger {
    height: 40px;
    width: 170px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => (props.darkMode === true ? "#fff" : "black")};
    padding-left: 20px;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.35);
    border-radius: 5px;
    background-color: ${(props) =>
      props.darkMode === true ? "#2b3945" : "#fff"};
    border: none;
    margin-bottom: 5px;
    ${respondTo.md`
      margin-top: 20px;
    `}
    .arrow-icon {
      width: 10px;
      height: 10px;
      margin-right: 10px;
      fill: ${(props) => (props.darkMode === true ? "#fff" : "black")};
    }
  }
  .regions-filters-container {
    display: none;
  }
  .active {
    display: block;
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.35);
    padding-top: 15px;
    padding-bottom: 15px;
    background-color: ${(props) =>
      props.darkMode === true ? "hsl(209, 23%, 22%)" : "white"};
    border-radius: 5px;

    .regionFilter {
      border: none;
      text-align: left;
      padding-left: 20px;
      background-color: #fff;
      padding-bottom: 5px;
      color: ${(props) => (props.darkMode ? "#fff" : "black")};
      background-color: ${(props) =>
        props.darkMode === true ? "hsl(209, 23%, 22%)" : "white"};
    }
  }
`;
export default RegionDropdown;
