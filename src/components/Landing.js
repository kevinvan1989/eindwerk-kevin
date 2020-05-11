import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Login from './Login';
import Register from './Register';


class Landing extends Component {
  render() {
    return (
      <div>
        <div className="intro">
          <img src="img/header.jpg" alt=""/>
          <div className="intro__login">
            <Link to="/login"><div className="">
              Go to Login
            </div>
            </Link>
          </div>
          <div className="intro__toPost">
            <Link to="/overview"><div className="btn">
              Go to Overview
            </div>
            </Link>
          </div>
        </div> {/* END OF INTRO */}
        
        <Login />
        <Register />
      </div>
    );
  }
}

export default Landing;