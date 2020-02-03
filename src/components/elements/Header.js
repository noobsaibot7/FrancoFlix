import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import RMDBLogo from "../images/francoFlix.png";


import {
  StyledHeader,
  StyledRMDBLogo,
} from "../styles/StyledHeader";
import StyledSwitch from "../styles/StyledSwitch";

const Header = props => (
  <StyledHeader themen={props.theme}>
    <Link to="/">
      <StyledRMDBLogo src={RMDBLogo} alt="rmdb-logo" />
    </Link>

    <StyledSwitch>
      <span style={{ color: props.theme ? "grey" : "yellow" }}>☀︎</span>
      <span className="toggle">
        <input
          checked={props.theme}
          onChange={() => props.changeMode()}
          id="checkbox"
          className="checkbox"
          type="checkbox"
        />
        <label htmlFor="checkbox" />
      </span>
      <span style={{ color: props.theme ? "slateblue" : "grey" }}>◉
</span>
    </StyledSwitch>

  </StyledHeader>
);

Header.propTypes = {
  changeMode: PropTypes.func,
  theme: PropTypes.bool
};

export default Header;
