import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CountryDetails = (props) => {
  // const [selectedCountry, setSelectedCountry] = useState({});
  console.log(props);
  useEffect(() => {
    props.setSelectedCountry(props.filterUrl());
  }, []);
  // const filterBasedOfUrlParam = () => {
  //   const countryCode = props.history.location.pathname;

  //   const noSlashCountryCode = countryCode.substr(1).toLowerCase();

  //   return props.countriesList.filter(
  //     (country) =>
  //       country.alpha3Code.toLowerCase().indexOf(noSlashCountryCode) !== -1
  //   );
  // };
  // if (props.selectedCountry[0]) {
  return (
    <div className="details-container">
      <Link to="/">
        <button>Go back</button>
      </Link>
      {/* <div className="flag">
          <img src={`${props.selectedCountry[0].flag}`} alt="" />
        </div> */}
      {/* <div className="inner-details-wrapper">
        <h3>{props.selectedCountry.name}</h3>
        <div className="details-list">
          <div className="country-info-box">
            <p>Native name: {props.selectedCountry.nativeName}</p>
            <p>Population: {props.selectedCountry.population}</p>
            <p>Region: {props.selectedCountry.region}</p>
            <p>Sub Region: {props.selectedCountry.subregion}</p>
            <p>Capital {props.selectedCountry.capital}</p>
          </div>
          <div>
            <p>Top Level Domain:{props.selectedCountry.topLevelDomain}</p>
            <p>
              Currencies:{" "}
              {props.selectedCountry.currencies.map((currency) => {
                return currency.name;
              })}
            </p>
            <p>
              Languages:{" "}
              {props.selectedCountry.languages.map((language) => {
                return language.name;
              })}
            </p>
          </div>
        </div>
        <div>
          <p>
            Border Countries:{" "}
            {props.selectedCountry.borders.map((item) => {
              return (
                <Link to={`${item}`}>
                  <button>{item}</button>
                </Link>
              );
            })}
          </p>
        </div>
      </div> */}
    </div>
  );
  // }
  return null;
};

export default CountryDetails;
