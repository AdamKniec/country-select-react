import "../styles/App.scss";
import { respondTo } from "../styles/RespondTo";
import Nav from "./Nav";
import React, { useEffect, useState } from "react";
import CountryList from "../views/listView/CountryList";
import SearchInput from "../views/listView/SearchInput";
import { Route } from "react-router";
import CountryDetails from "../views/detailView/CountryDetails";
import RegionDropdown from "../views/listView/RegionDropdown";
import styled from "styled-components";
import Loader from "../components/Loading";
import {getCountriesData} from '../../src/components/domain';
import PropTypes from 'prop-types';
import {Acreditation} from '../components/Acreditation';

function App({history}) {
  
  const [countriesList, setCountriesList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [regionFilter, setRegionFilter] = useState("All");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getCountriesData(setCountriesList, setIsLoading);
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleInputChange = (e) => setInputValue(e.target.value);

  const selectRegionFilter = (regionFilter) => setRegionFilter(regionFilter)

  return (
    <div className={darkMode ? `App dark` : "App"} data-testid="app-wrapper">
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
              <CountryList  darkMode={darkMode}  countriesList={countriesList} inputValue = {inputValue} regionFilter = {regionFilter}/>              
            ) : (
              <Loader />
            )}
          </div>
              {!isLoading && inputValue === '' && <Acreditation darkMode = {darkMode} acreditation={'Icons taken from Flaticon.com'}/>}
        </Route>

        <Route exact path="/:id">
          <CountryDetails
            countriesList={countriesList}
            history={history}
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

App.propTypes = {
  history: PropTypes.object,
};

export default App;
