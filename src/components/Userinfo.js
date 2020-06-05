import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Userinfo extends Component {
  render() {
    const { imgUrl: avatar, firstName, lastName, userId } = this.props;
    console.log(firstName, lastName);
    return (
      <Link to={`/profile-page/${userId}`}>
        <img src={avatar} alt="" />
        <h2 className="names">{`${firstName} ${lastName ? lastName : ""}`}</h2>
      </Link>
    );
  }
}
