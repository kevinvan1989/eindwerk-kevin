import React, { Component } from 'react';

class Footer extends Component {
  render() {
    // const date = moment();
    // console.log(date)

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