import React, { Component } from "react";
import mainLogo from "../img/logo-big.png";
import { Link } from "react-router-dom";

class Logo extends Component {
  render() {
    return (
      <Link to="/">
        <div className="header__logo-box">
          <img src={mainLogo} alt="Logo" />
        </div>
      </Link>
    );
  }
}

export default Logo;
