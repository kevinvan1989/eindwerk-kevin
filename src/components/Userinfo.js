import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Userinfo extends Component {
  render() {
    // console.log(this.props)
    const { imgUrl: imgAttr, firstName, lastName, name_class, userId } = this.props;
    // console.log(firstName, lastName);
    return (
      <Link to={`/profile-page/${userId}`}>
        <img src={imgAttr.avatar} alt="" className={imgAttr.avatar_class}/>
        <h2 className={name_class}>{`${firstName} ${lastName ? lastName : ""}`}</h2>
      </Link>
    )

    
  }
}
