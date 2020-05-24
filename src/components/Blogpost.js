import React, { Component } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { useStore } from "react-redux";
import commentIcon from "../assets/icons/comment.png";
import commentIconDark from "../assets/icons/comment-icon-dark.png";
import Time from "./Time";

export default class Blogpost extends Component {
  render() {
    const {
      body,
      comments_count,
      created_at,
      id,
      title,
      updated_at,
      user,
      user_id,
    } = this.props.postDetail;

    return (
      <div className="blogpost">
        <article>
          <Time created_at={created_at} exactTime={true} />
          <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
          {/* <h1>{parse(title)}</h1> */}
          <div
            className="body-txt"
            dangerouslySetInnerHTML={{ __html: body }}
          ></div>
          <Time created_at={created_at} />
          {/* <button>Read more</button> ==> new button comp */}
        </article>

        <aside>
          <img src={user.avatar} alt="" />
          <h2>{`${user.first_name} ${
            user.last_name ? user.last_name : ""
          }`}</h2>
          <p>
            <img src={commentIconDark} alt="" className="comment-icon" />
            {comments_count} comments
          </p>
          <button>
            ADD <br />
            COMMENT
          </button>
          <Link to={`/postdetail/${id}`}>
            SEE <br />
            DETAILS
          </Link>
        </aside>
      </div>
    );
  }
}
