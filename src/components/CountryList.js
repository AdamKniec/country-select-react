import React from "react";
import ListItem from "./CountryCard";
import { Link } from "react-router-dom";

const CountryList = (props) => {
  const renderList = () => {
    return props.list.map((item) => {
      return (
        <Link
          to={`${item.alpha3Code}`}
          key={item.name}
          // onClick={() => props.selectCountry()}
        >
          <ListItem country={item} key={item.name} />
        </Link>
      );
    });
  };

  return props.list.length !== 0 ? renderList() : "";
};

export default CountryList;
