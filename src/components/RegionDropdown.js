import React, { useState } from "react";
import { ReactComponent as ArrowIcon } from "../assets/imgs/down-arrow.svg";

const RegionDropdown = ({ setRegionFilter, selectedRegion }) => {
  const [active, setActive] = useState(false);
  // console.log(selectedRegion);
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
    <div className="region-switcher-container">
      <button
        className="region-switch-trigger"
        onClick={() => toggleRegionDropdown()}
      >
        {selectedRegion ? selectedRegion : "Select region"}
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
    </div>
  );
};

export default RegionDropdown;
