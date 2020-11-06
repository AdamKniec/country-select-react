import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

const CountryCard = ({country: {name, population, flag, region, capital}}) => {
  return (
    <CountryCardItem className="country-list-item-wrapper">
      <img src={`${flag}`} alt="" className="flag" />
      <div className="country-container">
        <h4 className="country-detail name">{name}</h4>
        <div className="detail-wrapper">
          <p className="country-detail">
            {" "}
            <span className="detail-info-title">Population: </span>{" "}
            {population}
          </p>
          <p className="country-detail">
            {" "}
            <span className="detail-info-title">Region: </span>{" "}
            {region}
          </p>
          <p className="country-detail">
            {" "}
            <span className="detail-info-title"> Capital:</span>{" "}
            {capital}
          </p>
        </div>
      </div>
    </CountryCardItem>
  );
};

const CountryCardItem = styled.div`
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.06), 0 0 40px rgba(0, 0, 0, 0.1);
  .flag {
    width: 250px;
    height: auto;
    border-radius: 10px 10px 0px 0px;
  }
  .country-detail {
    padding-left: 20px;
  }
`;

CountryCard.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string,
    population: PropTypes.number,
    flag: PropTypes.string,
    region: PropTypes.string,
    capital: PropTypes.string,
  })
};

export default CountryCard;
