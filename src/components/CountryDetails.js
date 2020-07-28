import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// const BrowserHistory = require("react-router/lib/BrowserHistory");

const CountryDetails = (props) => {
  const [selectedCountry, setSelectedCountry] = useState({});
  console.log(props);
  useEffect(() => {
    setSelectedCountry(filterBasedOfUrlParam()[0]);
  }, [window.location.href, props.countriesList]);

  const filterBasedOfUrlParam = () => {
    const countryCode = props.history.location.pathname;
    const noSlashCountryCode = countryCode.substr(1).toLowerCase();

    return props.countriesList.filter(
      (country) =>
        country.alpha3Code.toLowerCase().indexOf(noSlashCountryCode) !== -1
    );
  };

  if (selectedCountry) {
    return (
      <div className="details-container">
        <button onClick={() => props.history.goBack()}>Go back</button>
        <div>{<img src={selectedCountry.flag} alt="" />}</div>
        <div>
          <p>Native Name: {selectedCountry.nativeName}</p>
          <p>Population: {selectedCountry.population}</p>
          <p>Region: {selectedCountry.region}</p>
          <p>Seb Region: {selectedCountry.subregion}</p>
          <p>Capital: {selectedCountry.capital}</p>
        </div>
        <div>
          <p>Top Level Domain: {selectedCountry.topLevelDomain}</p>
          <p>
            {/* na dole trzeba poprawic kwestie z przecinkami */}
            {/* czy na pewno potrzebujemy na dole tego warunku sprzwdzajacego za kazdym razem ? ? */}
            Currencies:{" "}
            {selectedCountry.currencies
              ? selectedCountry.currencies.map((currency) => {
                  return selectedCountry.currencies.length > 0
                    ? currency.code + ","
                    : currency.code;
                })
              : ""}
          </p>
          <p>
            Languages:{" "}
            {selectedCountry.languages
              ? selectedCountry.languages.map((language) => {
                  return selectedCountry.languages.length > 0
                    ? language.name + ","
                    : language.name;
                })
              : ""}
          </p>
        </div>
        <div>
          <p>
            Border Countries:{" "}
            {selectedCountry.borders
              ? selectedCountry.borders.map((item, i) => {
                  return (
                    <Link to={`${item}`} key={i}>
                      <button
                        onClick={() =>
                          setSelectedCountry(filterBasedOfUrlParam()[0])
                        }
                      >
                        {item}
                      </button>
                    </Link>
                  );
                })
              : ""}
          </p>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default CountryDetails;
