import React from "react";
import styled from "styled-components";
import { ReactComponent as MoonIcon } from "../assets/imgs/moon.svg";

const Nav = ({ toggleDarkMode, darkMode }) => {
  return (
    <NavBar darkMode={darkMode}>
      <h3 className="title">Where in the world ?</h3>
      <div className="dark-mode-toggle-container">
        <DarkModeToggleButton
          onClick={() => toggleDarkMode()}
          darkMode={darkMode}
        >
          <span>
            <MoonIcon />
          </span>
          Dark Mode
        </DarkModeToggleButton>
      </div>
    </NavBar>
  );
};
const NavBar = styled.nav`
  background-color: ${(props) => (props.darkMode === true ? "#2b3945" : "white;")};
  display: flex;
  justify-content: space-between;
  padding: 0 70px;
  align-items: center;
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.06), 0 0 40px rgba(0, 0, 0, 0.1);
  .title {
    color: ${(props) => (props.darkMode === true ? "white" : "black")};
  }
`;
const DarkModeToggleButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => (props.darkMode === true ? "white" : "black")};

  &:hover {
    cursor: pointer;
  }
  .moon-icon {
    width: 15px;
    margin-right: 5px;
    background: none;
    border: none;
    fill: ${(props) => (props.darkMode === true ? "white" : "black")};
  }
`;

export default Nav;
