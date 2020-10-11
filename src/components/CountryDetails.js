import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as ArrowIcon } from "../assets/imgs/arrow.svg";
import NotFound from "./NoCountryMatch";
import { respondTo } from "../styles/RespondTo";

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
          <GoBackButton
            darkMode={props.darkMode}
            onClick={() => props.history.goBack()}
          >
            <ArrowIcon />
            Back
          </GoBackButton>
        </div>
        <DetailsDataContainer>
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
                <p className="bold"> Border Countries: </p>
                {/* <div className="border-links-wrapper"> */}
                   {selectedCountry.borders.length !== 0
                  ? getFullNamesArrayOfBorderCountries().map((item, i) => {
                      return (
                        <Link to={`${item}`} key={i}>
                          <BorderCountry
                            onClick={() =>
                              setSelectedCountry(filterBasedOfUrlParam()[0])
                            }
                            className="border-country"
                          >
                            {item}
                          </BorderCountry>
                        </Link>
                      );
                    })
                  : "None"}
                {/* </div> */}
               
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
  .column-second {
    ${respondTo.sm`
    margin-top: 20px;
  `}
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
    a {
      height: 30px;
      margin-top: 10px;
    }
  }
 
  .inline-details-content div p {
    margin: 5px;
  }
`;
// const CountryDetailDataBox = styled.div`

// `
export default CountryDetails;
