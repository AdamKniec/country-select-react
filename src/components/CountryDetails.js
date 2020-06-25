import React from "react";

const CountryDetails = (props) => {
  console.log(props);

  return (
    <div className="details-container">
      <div className="flag">
        <img src={`${props.selectedCountry.flag}`} alt="" />
      </div>
      <div>
        <h3>{props.selectedCountry.name}</h3>
        <p>Native name: {props.selectedCountry.nativeName}</p>
        <p>Population: {props.selectedCountry.population}</p>
        <p>Region: {props.selectedCountry.region}</p>
        <p>Sub Region: {props.selectedCountry.subregion}</p>
        <p>Capital {props.selectedCountry.capital}</p>
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
    </div>
  );
};

export default CountryDetails;
