import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as ArrowIcon } from "../assets/imgs/arrow.svg";

const CountryDetails = (props) => {
  const [selectedCountry, setSelectedCountry] = useState({});

  useEffect(() => {
    setSelectedCountry(filterBasedOfUrlParam()[0]);
  }, [window.location.href, props.countriesList]);

  const filterBasedOfUrlParam = () => {
    const countryToBeDisplayed = props.history.location.pathname;
    const noSlashCountryCode = countryToBeDisplayed.substr(1).toLowerCase();

    return props.countriesList.filter(
      (country) => country.name.toLowerCase().indexOf(noSlashCountryCode) !== -1
    );
  };
  const getFullNamesArrayOfBorderCountries = () => {
    const arrayOfBorders = selectedCountry.borders;
    return props.countriesList
      .filter((country) => {
        return arrayOfBorders
          ? arrayOfBorders.indexOf(country.alpha3Code) !== -1
          : [];
      })
      .map((item) => item.name);
  };

  if (selectedCountry && selectedCountry.borders) {
    return (
      <div className="details-container">
        <div>
          <button
            className="go-back-button"
            onClick={() => props.history.goBack()}
          >
            <ArrowIcon />
            Back
          </button>
        </div>
        <div className="country-details-data-container">
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
              <div>
                <p>
                  <span className="bold"> Top Level Domain: </span>
                  {selectedCountry.topLevelDomain}
                </p>
                <p>
                  {/* czy na pewno potrzebujemy na dole tego warunku sprzwdzajacego za kazdym razem ? ? */}
                  <span className="bold"> Currencies: </span>
                  {selectedCountry.currencies.map((currency, index) => {
                    return (
                      <span key={index}>
                        {(index ? ", " : "") + currency.name}
                      </span>
                    );
                  })}
                </p>
                <p>
                  <span className="bold"> Languages: </span>
                  {selectedCountry.languages.map((language, index) => {
                    return (
                      <span key={index}>
                        {(index ? ", " : "") + language.name}
                      </span>
                    );
                  })}
                </p>
              </div>
            </div>

            <div className="borders bold">
              <p>
                <span className="bold"> Border Countries: </span>

                {selectedCountry.borders.length !== 0
                  ? getFullNamesArrayOfBorderCountries().map((item, i) => {
                      return (
                        <Link to={`${item}`} key={i}>
                          <button
                            onClick={() =>
                              setSelectedCountry(filterBasedOfUrlParam()[0])
                            }
                            className="border-country"
                          >
                            {item}
                          </button>
                        </Link>
                      );
                    })
                  : "None"}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      // trzeba ponizsze zastapic jakims fajnym 404
      <>
        <NotFoundInfo>Oups! :( We did not find such a country !</NotFoundInfo>
        <Link to="/">Back</Link>
      </>
    );
  }
};

const NotFoundInfo = styled.span`
  margin-top: 200px;
  font-size: 30px;
`;
export default CountryDetails;
