import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Login from './Login';
import Register from './Register';
import { connect } from 'react-redux';
import { getUser } from '../redux/actions/authActions';


class Landing extends Component {
  componentDidMount(){
    this.props.getUserInfo();
    
  }

  render() {
    return (
      <div>
        <div className="intro">
          <img src="img/header.jpg" alt="" className="intro__hero__img"/>
          <div className="intro__login">
            <Link to="/login"><div className="">
              Go to Login
            </div>
            </Link>
            <Link to="/register">
              <div>Go to Register</div>
            </Link>
          </div>
          <div className="intro__toPost">
            <Link to="/overview"><div className="btn">
              Go to Overview
            </div>
            </Link>
          </div>
        </div> {/* END OF INTRO */}
      </div>
    );
  }
}

const mapStateToProps = state => {

}

const mapDispatchToProps = dispatch => ({
  getUserInfo: () => dispatch(getUser)
})

export default connect(mapStateToProps, mapDispatchToProps) (Landing);