import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="d-flex flex-row justify-content-between">
          <ul>
            <li></li>
          </ul>
          <div>logo</div>
          <div className="d-flex flex-row justify-content-between">
            <span>person icon</span>
            {/* Conditional logged in or not */}
            <ul className="d-flex flex-row">
              <li>Edit profile</li>
              <li>Logout</li>
            </ul>

            <div>Login</div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
