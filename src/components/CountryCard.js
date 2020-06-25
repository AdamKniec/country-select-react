import React from "react";
import styled from "styled-components";

const CountryCard = (props) => {
  return (
    <CountryCardItem>
      <img src={`${props.country.flag}`} alt="" className="flag" />
      <div>
        <h4 className="country-detail">{props.country.name}</h4>
        <p className="country-detail">Population: {props.country.population}</p>
        <p className="country-detail">Region: {props.country.region}</p>
        <p className="country-detail">Capital: {props.country.capital}</p>
      </div>
    </CountryCardItem>
  );
};

const CountryCardItem = styled.div`
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.06), 0 0 40px rgba(0, 0, 0, 0.1);
  .flag {
    width: 250px;
    height: 150px;
  }
  .country-detail {
    padding-left: 20px;
  }
`;

export default CountryCard;
