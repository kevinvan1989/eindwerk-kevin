import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li></li>
          </ul>
          <div>logo</div>
          <div>
            <span>person icon</span>
            {/* Conditional logged in or not */}
            <ul>
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
