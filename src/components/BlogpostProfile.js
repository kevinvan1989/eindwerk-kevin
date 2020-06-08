import React, { Component } from "react";

export default class BlogpostProfile extends Component {
  render() {
    console.log("blogpostprofile", this.props);
    const { title, body, created_at } = this.props.blogPost;
    return (
      <div className="card text-center mb-2">
        <div className="card-body">
    <h5 className="card-title">{title}</h5>
          <div className="card-text" dangerouslySetInnerHTML={{ __html: body }}></div>
        </div>
        <div className="card-footer text-muted">{created_at}</div>
      </div>
    );
  }
}
