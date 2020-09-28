import React from "react";
import styled from "styled-components";
import { ReactComponent as MoonIcon } from "../assets/imgs/moon.svg";

const NavBar = styled.nav`
  background-color: #hsl(0, 0%, 100%);
  display: flex;
  justify-content: space-between;
  padding: 0 70px;
  align-items: center;
    box-shadow:0 2px 1px rgba(0, 0, 0, 0.06), 0 0 40px rgba(0, 0, 0, 0.1) ;
}
`;

const Nav = ({ toggleDarkMode }) => {
  return (
    <NavBar>
      <h3 className="title">Where in the world ?</h3>
      <div className="dark-mode-toggle-container">
        {/* <span>Dark mode</span> */}
        <button onClick={() => toggleDarkMode()}>
          <span>
            <MoonIcon />
          </span>
          Dark Mode
        </button>
      </div>
    </NavBar>
  );
};

export default Nav;
