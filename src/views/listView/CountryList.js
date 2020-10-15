import React from "react";
import ListItem from "./CountryCard";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NotFound from "../../components/NoCountryMatch";

const CountryList = ({ list, darkMode }) => {
  const renderList = () => {
    return list.map((item) => {
      return (
        <CountryItemLink
          to={`${(item.name).replace(/\s+/g, '-')}`}
          key={item.name}
          className="country-item"
        >
          <ListItem country={item} key={item.name} />
        </CountryItemLink>
      );
    });
  };

  return list.length !== 0 ? renderList() : <NotFound darkMode={darkMode} />;
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
      margin-top: -6px; // moze da sie to jakos naprawic ?
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
