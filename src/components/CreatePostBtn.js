import React, { Component } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class CreatePostBtn extends Component {
  render() {
    return (
      <div>
        <Link to="/create-post">
          <FaPlus
            className="create-post-icon"
            onClick={() => {
              alert("hi");
            }}
          />
        </Link>
      </div>
    );
  }
}
