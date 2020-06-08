import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    const {currentYear} = this.props

    return (
      <footer>
        <p>
          &copy; {currentYear} Kevin Vanantwerpen
        </p>
        <ul>
          <li>LinkedIn</li>
          <li>GitHub</li>
        </ul>
      </footer>
    );
  }
}

export default Footer;