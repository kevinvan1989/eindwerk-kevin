import React, { Component } from "react";
import { API } from "../libs/API";
import Time from "./Time";
import Comment from "./Comment"
import commentIconDark from "../assets/icons/comment-icon-dark.png";
import CKEditor from 'ckeditor4-react'

export default class Postdetail extends Component {
  state = {
    post: {
      // user is defined for destructuring
      user: "",
    },
  };

  componentDidMount() {
    console.log(this.props.match.params.id);
    const { id } = this.props.match.params;

    API.get(`/api/posts/${id}`).then((res) => {
      console.log("detail", res.data);
      this.setState({ post: res.data });
    });
  }

  

  render() {
    console.log("state", this.state);
    const { title, body, created_at, updated_at, comments } = this.state.post;
    const {
      id,
      first_name,
      last_name,
      favorite_color,
      avatar,
      last_login_at,
    } = this.state.post.user;
    console.log(comments);

    return (
      <div className="grid-container grid-container--2-col">
        {/* Column with orignal post and text editor */}
        <section className="grid__col grid__col--1 flex">
          {/* Display blogpost(text content) & avatar as flex */}
          <article>
            {/* Comment count total */}
            <div>
              <img src={commentIconDark} alt="" className="comment-icon" />
              {comments ? comments.length : ""} comments
            </div>
            <h1>{title}</h1>
            <Time created_at={created_at} exactTime={true} />
            <div
              className="body-txt"
              dangerouslySetInnerHTML={{ __html: body }}
            ></div>
          </article>
          <section id='editor'>

          </section>

          {/* Flex item right with image and name */}
          <aside>
            <img src={avatar} alt="" />
            <h2>{`${first_name} ${last_name ? last_name : ""}`}</h2>
          </aside>
        </section>

        {/* Colulmn with all comments */}
        <section className="grid__col grid__col--2">
          {console.log(comments)}
          {comments && comments.length !== 0 ? 
            (comments.map(comment => (
              <Comment commentData={comment} />
            )))  :
            'no comments'
          }
        </section>
      </div>
    );
  }
}
