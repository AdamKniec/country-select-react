import React from "react";
import styled from "styled-components";

const CountryCard = (props) => {
  console.log(props);
  return (
    <CountryCardItem>
      <img src={`${props.country.flag}`} alt="" className="flag" />
      <div>
        <h4>{props.country.name}</h4>
        <p>Population: {props.country.population}</p>
        <p>Region: {props.country.region}</p>
        <p>Capital: {props.country.capital}</p>
      </div>
    </CountryCardItem>
  );
};

const CountryCardItem = styled.div`
  .flag {
    width: 250px;
    height: 150px;
  }
`;

export default CountryCard;
