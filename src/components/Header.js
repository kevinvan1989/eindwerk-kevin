import React, { Component } from "react";
import logo from "../assets/logo-white.png";

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="d-flex flex-row justify-content-center text-center">
          <div><img src={logo} alt=""/></div>
        </nav>
      </header>
    );
  }
}

export default Header;
