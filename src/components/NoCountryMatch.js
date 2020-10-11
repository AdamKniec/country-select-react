import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

export const NotFound = ({ darkMode }) => {
  return (
    <NotFoundInfo darkMode={darkMode}>
      <p>Oups! :( We did not find such a country !</p>
      {window.location.pathname !== "/" ? <Link to="/">Back</Link> : ""}
    </NotFoundInfo>
  );
};

const NotFoundInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;
  color: ${(props) => (props.darkMode ? "#fff" : "black")};
`;

NotFound.propTypes = {
  darkMode: PropTypes.bool,
};

export default NotFound;
