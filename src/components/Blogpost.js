import React, { Component } from "react";
import moment from "moment";
import { useStore } from "react-redux";
import commentIcon from "../assets/icons/comment.png";
import commentIconDark from "../assets/icons/comment-icon-dark.png";

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

    // body: "<p>Proptypes</p>"
    // comments_count: 2
    // created_at: "2020-05-13 03:47:11"
    // id: 355
    // title: "Yves"
    // updated_at: "2020-05-13 03:47:11"
    // user: {id: 37, first_name: "Yves", last_name: "Loeys", favorite_color: "#01579b", avatar: "https://api.adorable.io/avatars/285/yves.loeys@gmail.com", …}
    // user_id: 37

    let currentDate = Date.now();
    let a = moment("2020-05-16 13:44");
    let timeNow = moment().format("YYYY-M-D HH:mm");
    let c = moment(currentDate).format("HH:mm");
    let timePosted = moment(created_at);
    const postedTimeAgo = timePosted.from(timeNow);

    const dateOfPost = moment(created_at).format("YYYY-MM-DD");
    const timeOfPost = moment(created_at).format("HH:mm");
    // console.log("need", postedTimeAgo);

    

    // moment.duration().minutes();
    // console.log(a.from(b))

    return (
      <div className="blogpost">
        <article>
          <div>
            <small>
              {dateOfPost} at {timeOfPost}
            </small>{" "}
          </div>
          <h1 dangerouslySetInnerHTML={{__html: title}}></h1>
          {/* <h1>{parse(title)}</h1> */}
          <div className="body-txt" dangerouslySetInnerHTML={{__html: body}}></div>
          <div>Posted {postedTimeAgo}</div>
          {/* <button>Read more</button> ==> new button comp */}
        </article>

        <aside>
          <img src={user.avatar} alt="" />
          <h2>{`${user.first_name} ${
            user.last_name ? user.last_name : ""
          }`}</h2>
          <p>
            <img src={commentIconDark} alt="" className="comment-icon"/>
            {comments_count} comments
          </p>
          <button>
            ADD <br />
            COMMENT
          </button>
          <button>
            SEE <br />
            COMMENT
          </button>
        </aside>
      </div>
    );
  }
}
