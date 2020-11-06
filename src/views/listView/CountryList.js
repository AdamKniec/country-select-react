import React, {useState} from "react";
import ListItem from "./CountryCard";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NotFound from "../../components/NoCountryMatch";
import  {filterCountriesList, formatString} from '../../components/domain'
import { useEffect } from "react";

const CountryList = ({ darkMode, countriesList, inputValue, regionFilter }) => {

const [filteredList, setFilteredList] = useState(countriesList)

useEffect(()=>{
  setFilteredList(filterCountriesList(countriesList, regionFilter, inputValue));
},[inputValue, regionFilter])// eslint-disable-line react-hooks/exhaustive-deps

  const renderList = () => {
    return filteredList.map((item) => {
      return (
        <CountryItemLink
          to={formatString(item.name)}
          key={item.name}
          className="country-item"
        >
          <ListItem country={item} key={item.name} />
        </CountryItemLink>
      );
    })
  };

 return filteredList.length !== 0 ? renderList() : <NotFound darkMode={darkMode} />;
};

const CountryItemLink = styled(Link)`
  margin: 0 30px 30px 30px;
  text-decoration: none;
  color: black;
  .country-list-item-wrapper {
    border-radius: 0 0 10px 10px;
    max-width: 250px;
    .country-detail {
      font-size: 0.8em;
      .detail-info-title {
        font-family: nunito medium;
      }
    }
    .name {
      font-family: Nunito Bold;
      font-size: 1em;
      margin: 0;
      padding-top: 20px;
      padding-bottom: 20px;
      margin-top: -6px; // TO DO ->fix ?
    }
    .detail-wrapper {
      padding-bottom: 30px;
      p {
        margin-bottom: 0;
        margin-top: 5px;
      }
    }
  }
`;

export default CountryList;
