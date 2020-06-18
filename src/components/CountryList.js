import React, { useEffect, useState } from "react";
import ListItem from "./CountryCard";

const CountryList = () => {
  const [countriesList, setCountriesList] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all").then((response) =>
      response.json().then((data) => setCountriesList(data))
    );
  }, []);

  const renderList = () => {
    return countriesList.map((item) => {
      return <ListItem country={item} />;
    });
  };

  return countriesList.length !== 0 ? renderList() : "";
};

export default CountryList;
