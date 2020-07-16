import "../App.scss";
import Nav from "./Nav";
import React, { useEffect, useState } from "react";
import CountryList from "./CountryList";
import SearchInput from "./SearchInput";
import { Route } from "react-router";
import CountryDetails from "../components/CountryDetails";

function App(props) {
  const [countriesList, setCountriesList] = useState([]);

  const [inputValue, setInputValue] = useState("");
  const [selectedCountry, setSelectedCountry] = useState({});
  console.log(selectedCountry);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all").then((response) =>
      response.json().then((data) => setCountriesList(data))
    );
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value.toLowerCase());
  };

  // const filterBasedOfUrlParam = () => {
  //   const countryCode = props.location.pathname;

  //   const noSlashCountryCode = countryCode.substr(1).toLowerCase();
  //   setSelectedCountry(
  //     countriesList.filter(
  //       (country) =>
  //         country.alpha3Code.toLowerCase().indexOf(noSlashCountryCode) !== -1
  //     )
  //   );
  // };
  const filterBasedOfUrlParam = () => {
    const countryCode = props.history.location.pathname;

    const noSlashCountryCode = countryCode.substr(1).toLowerCase();

    return countriesList.filter(
      (country) =>
        country.alpha3Code.toLowerCase().indexOf(noSlashCountryCode) !== -1
    );
  };
  console.log(filterBasedOfUrlParam());
  const filterCountriesList = countriesList.filter(
    (country) => country.name.toLowerCase().indexOf(inputValue) !== -1
  );

  return (
    <div className="App">
      <Nav />

      <div className="country-cards-wrapper">
        <Route exact path="/">
          <div className="actionBox">
            <SearchInput value={inputValue} changeHandler={handleInputChange} />
          </div>
          <CountryList list={filterCountriesList} />
        </Route>
        <Route exact path="/:id">
          <CountryDetails
            filterUrl={filterBasedOfUrlParam}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
            countriesList={countriesList}
            history={props.history}
          />
        </Route>
        {/* <CountryDetails /> */}
      </div>
    </div>
  );
}

export default App;
