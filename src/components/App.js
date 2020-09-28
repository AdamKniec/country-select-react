import "../App.scss";
import Nav from "./Nav";
import React, { useEffect, useState } from "react";
import CountryList from "./CountryList";
import SearchInput from "./SearchInput";
import { Route } from "react-router";
import CountryDetails from "./CountryDetails";
import RegionDropdown from "./RegionDropdown";

function App(props) {
  const [countriesList, setCountriesList] = useState([]);

  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);

  const [darkMode, setDarkMode] = useState(false);
  const [regionFilter, setRegionFilter] = useState("All");

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all").then((response) =>
      response.json().then((data) => setCountriesList(data))
    );
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value.toLowerCase());
  };

  const filterCountriesList = countriesList.filter((country) => {
    if (regionFilter !== "All") {
      return (
        country.region === regionFilter &&
        country.name.toLowerCase().indexOf(inputValue) !== -1
      );
    } else {
      return country.name.toLowerCase().indexOf(inputValue) !== -1;
    }
  });

  const selectRegionFilter = (regionFilter) => {
    setRegionFilter(regionFilter);
  };

  return (
    <div className={darkMode ? `App dark` : "App"}>
      <Nav toggleDarkMode={toggleDarkMode} />
      <div className="content-container">
        <Route exact path="/">
          <div className="actionBox">
            <SearchInput value={inputValue} changeHandler={handleInputChange} />
            <RegionDropdown
              setRegionFilter={selectRegionFilter}
              toggleDarkMode={toggleDarkMode}
              selectedRegion={regionFilter}
            />
          </div>
          <div className="countries-list-wrapper">
            <CountryList list={filterCountriesList} />
          </div>
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
