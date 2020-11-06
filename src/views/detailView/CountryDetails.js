import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as ArrowIcon } from "../../assets/imgs/arrow.svg";
import NotFound from "../../components/NoCountryMatch";
import { respondTo } from "../../styles/RespondTo";
import {filterBasedOfUrlParam, getFullNamesArrayOfBorderCountries, formatString} from '../../components/domain';
import PropTypes from 'prop-types';

const CountryDetails = ({history, countriesList, darkMode}) => {

  const [selectedCountry, setSelectedCountry] = useState({});

  useEffect(() => {
    setSelectedCountry(filterBasedOfUrlParam(history.location.pathname, countriesList)[0]);
  }, [window.location.href, countriesList]); // eslint-disable-line react-hooks/exhaustive-deps

  const renderCurrencies = () => {
    return selectedCountry.currencies.map((currency, index) => {
      return (
        <span key={index}>
          {(index ? ", " : "") + currency.name}
        </span>
      );
    })
  };

  const renderBorderButtons = () => {
    return selectedCountry.borders.length !== 0
      ? getFullNamesArrayOfBorderCountries(selectedCountry, countriesList).map((countryName, i) => {
          return (
            <Link to={formatString(countryName)} key={i}>
              <BorderCountry
                onClick={() =>
                  setSelectedCountry(filterBasedOfUrlParam(history.location.pathname, countriesList)[0])
                }
                className="border-country"
              >
                {countryName}
              </BorderCountry>
            </Link>
           );
        })
      : <p>None</p>
  };

  const renderLanguages = () => {
    return selectedCountry.languages.map((language, index) => {
      return (
        <span key={index}>
          {(index ? ", " : "") + language.name}
        </span>
      );
    })
  }

  if (selectedCountry && selectedCountry.borders) {
    return (
      <div className="details-container">
        <div>
          <GoBackButton
            darkMode={darkMode}
            onClick={() => history.goBack()}
          >
            <ArrowIcon />
            Back
          </GoBackButton>
        </div>
        <DetailsDataContainer darkMode={darkMode}>
          <div>{<img src={selectedCountry.flag} alt="" />}</div>
          <div>
            <div>
              <p className="country-name bold">{selectedCountry.name}</p>
            </div>
            <div className="inline-details-content">
              <div>
                <p>
                  <span className="bold">Native Name: </span>
                  {selectedCountry.nativeName}
                </p>
                <p>
                  <span className="bold">Population: </span>
                  {selectedCountry.population}
                </p>
                <p>
                  <span className="bold">Region: </span>
                  {selectedCountry.region}
                </p>
                <p>
                  <span className="bold">Sub Region: </span>
                  {selectedCountry.subregion}
                </p>
                <p>
                  <span className="bold">Capital: </span>
                  {selectedCountry.capital}
                </p>
              </div>
              <div className="column-second">
                <p>
                  <span className="bold"> Top Level Domain: </span>
                  {selectedCountry.topLevelDomain}
                </p>
                <p>
                  <span className="bold"> Currencies: </span>
                  {renderCurrencies(selectedCountry.currency)}
                </p>
                <p>
                  <span className="bold"> Languages: </span>
                  {renderLanguages()}
                </p>
              </div>
            </div>

            <div className="borders bold">
                <p className="bold"> Border Countries: </p>
                {renderBorderButtons()}
            </div>
          </div>
        </DetailsDataContainer>
      </div>
    );
  } else {
    return <NotFound />;
  }
};

const GoBackButton = styled.button`
  margin-top: 50px;
  margin-bottom: 50px;
  background-color: ${(props) => (props.darkMode ? "#2b3945" : "#fff")};
  border: none;
  width: 140px;
  height: 40px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.35);
  border-radius: 5px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  color: ${(props) => (props.darkMode ? "#fff" : "black")};
  &:hover {
    cursor: pointer;
  }
  svg {
    width: 20px;
    height: 20px;
    position: absolute;
    left: 35px;
    fill: ${(props) => (props.darkMode ? "#fff" : "black")};
  }
`;
const BorderCountry = styled.button`
  width: auto;
  height: 30px;
  background: none;
  border: none;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  margin-right: 10px;
  font-family: Nunito Thin;
  padding: 0 15px 0 15px;
  margin-bottom: 10px;
`;

const DetailsDataContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => (props.darkMode ? "#fff" : "black")};
  ${respondTo.lg`
    flex-direction: column;
    align-items: end;
  `}
  img {
    width: 500px;
    height: 320px;
    margin-right: 70px;
    ${respondTo.sm`
    width: 300px;
    height: 170px;
  `}
  }
  .country-name {
    font-family: Nunito Bold;
    font-size: 1.5rem;
  }
 
  .inline-details-content {
    display:flex;
    ${respondTo.sm`
      flex-direction: column;
    `}
    ${respondTo.lg`
      display: flex;
    `}
    div p {
      margin: 5px;
    }
  .column-second {
    ${respondTo.sm`
    margin-top: 20px;
  `}
  }
  .bold {
    font-family: Nunito Medium;
  }
  }
  .borders {
    display: flex;
    flex-wrap:wrap;
    margin-top: 20px;
    margin-bottom: 20px;
     ${respondTo.lg`
         display: block;
     `}
    .bold {
      font-family: Nunito Medium;
      font-size: 0.9rem;
    }
    p {
      margin-right: 10px;
      margin-bottom: 0;
      ${respondTo.lg`
         margin-bottom: 10px;
     `}
    }
    a {
      height: 30px;
      margin-top: 10px;
      z-index: 100;      
      button {
        color: ${(props) => (props.darkMode ? "#fff" : "black")};
        background-color: ${(props) => (props.darkMode === true ? "#2b3945" : "white;")};
      }
    }
  }
`;

CountryDetails.propTypes = {
  history: PropTypes.object,
  countriesList: PropTypes.array,
  darkMode: PropTypes.bool
};

export default CountryDetails;
