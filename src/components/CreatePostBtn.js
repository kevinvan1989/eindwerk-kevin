import React, { Component } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class CreatePostBtn extends Component {
  render() {
    return (
      <div>
        <Link to="/create-post" className="create-post">
          <span className="create-post__txt d-block">Create <br/> Post</span>
          <FaPlus
            className="create-post__icon" /> 
        </Link>
      </div>
    );
  }
}
