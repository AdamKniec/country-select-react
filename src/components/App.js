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
            countriesList={countriesList}
            history={props.history}
          />
        </Route>
      </div>
    </div>
  );
}

export default App;
