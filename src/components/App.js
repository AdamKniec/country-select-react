import "../App.scss";
import Nav from "./Nav";
import React, { useEffect, useState } from "react";
import CountryList from "./CountryList";
import SearchInput from "./SearchInput";
import { Route } from "react-router";
import CountryDetails from "../components/CountryDetails";

function App() {
  const [countriesList, setCountriesList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedCountry, setSelectedCountry] = useState({});

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all").then((response) =>
      response.json().then((data) => setCountriesList(data))
    );
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value.toLowerCase());
  };

  const filterCountriesList = countriesList.filter(
    (country) => country.name.toLowerCase().indexOf(inputValue) !== -1
  );

  const selectCountry = (item) => {
    setSelectedCountry(item);
    console.log(selectedCountry);
  };

  return (
    <div className="App">
      <Nav />
      <div className="actionBox">
        <SearchInput value={inputValue} changeHandler={handleInputChange} />
      </div>
      <div className="country-cards-wrapper">
        <Route exact path="/">
          <CountryList
            list={filterCountriesList}
            selectCountry={selectCountry}
          />
        </Route>
        <Route exact path="/:id">
          <CountryDetails selectedCountry={selectedCountry} />
        </Route>
        {/* <CountryDetails /> */}
      </div>
    </div>
  );
}

export default App;
