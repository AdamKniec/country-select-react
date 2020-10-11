import "../styles/App.scss";
import { respondTo } from "../styles/RespondTo";
import Nav from "./Nav";
import React, { useEffect, useState } from "react";
import CountryList from "./CountryList";
import SearchInput from "./SearchInput";
import { Route } from "react-router";
import CountryDetails from "./CountryDetails";
import RegionDropdown from "./RegionDropdown";
import styled from "styled-components";
import Loader from "../components/Loading";

function App(props) {
  const [countriesList, setCountriesList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [regionFilter, setRegionFilter] = useState("All");
  const [isLoading, setIsLoading] = useState(false);
  // console.log(isLoading);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://restcountries.eu/rest/v2/all").then((response) =>
      response
        .json()
        .then((data) => {
          setCountriesList(data);
          setIsLoading(false);
        })
        .catch((err) => console.log(err))
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
      <Nav toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <div className="content-container">
        <Route exact path="/">
          <ActionBox className="actionBox">
            <SearchInput
              value={inputValue}
              changeHandler={handleInputChange}
              darkMode={darkMode}
            />

            <RegionDropdown
              setRegionFilter={selectRegionFilter}
              toggleDarkMode={toggleDarkMode}
              selectedRegion={regionFilter}
              darkMode={darkMode}
            />
          </ActionBox>
          <div className="countries-list-wrapper">
            {!isLoading ? (
              <CountryList list={filterCountriesList} darkMode={darkMode} />
            ) : (
              <Loader />
            )}
          </div>
        </Route>

        <Route exact path="/:id">
          <CountryDetails
            countriesList={countriesList}
            history={props.history}
            darkMode={darkMode}
          />
        </Route>
      </div>
    </div>
  );
}

const ActionBox = styled.div`
  margin: 40px 3%;
  display: flex;
  justify-content: space-between;
  width: 100%;
  display: flex;
  max-width: 1260px;
  flex-wrap: wrap;
  max-width: 1260px;
  flex-wrap: wrap;
  ${respondTo.md`
  flex-direction: column;
  `}
`;

export default App;
