import React, { Component } from "react";
import { API } from "../libs/API";
import Time from "../components/Time";
import Comment from "../components/Comment";
import commentIconDark from "../assets/icons/comment-icon-dark.png";
import CreateComment from "../components/CreateComment";
import { connect } from "react-redux";
import { getUser } from "../redux/actions/authActions";
import Userinfo from "../components/Userinfo";

// TODO : Delete all "getUser blabla"
//        Comes with 'overview' but now entered here for developing purp.

class Postdetail extends Component {
  state = {
    post: {
      // user is defined for destructuring
      user: "",
    },
    comments: [],
  };

  componentDidMount() {
    this.props.getUser();
    const { id } = this.props.match.params;

    API.get(`/api/posts/${id}`).then((res) => {
      this.setState({ post: res.data, comments: res.data.comments });
    });
  }

  addCommentToState = (comment) => {
    const commentList = this.state.comments;
    commentList.push(comment);
    this.setState({
      comments: commentList,
    });
  };

  render() {
    const {
      id: postId,
      title,
      body,
      created_at,
      updated_at,
      comments,
    } = this.state.post;

    const {
      id: userId,
      first_name,
      last_name,
      favorite_color,
      avatar,
      last_login_at,
    } = this.state.post.user;

    const { isLoggedIn } = this.props;

    return (
      <div className="grid-container grid-container--2-col">
        {/* Column with orignal post and text editor */}
        <section className="grid__col grid__col--1 flex p-3">
          {/* Display blogpost(text content) & avatar as flex */}
          <article>
            {/* Comment count total */}
            <div>
              <img src={commentIconDark} alt="" className="comment-icon" />
              {this.state.comments.length} comments
            </div>
            <h1>{title}</h1>
            <Time created_at={created_at} exactTime={true} />
            <div
              className="body-txt"
              dangerouslySetInnerHTML={{ __html: body }}
            ></div>
          </article>

          {/* Check if user is logged in:
                if so: show text area for comment
                if not: hide text area for comment */}
          {isLoggedIn.user !== "not set" && (
            <CreateComment
              postId={postId}
              addComment={this.addCommentToState}
            />
          )}

          {/* Flex item right with image and name ;*/}
          <aside className="m-auto text-center detail--aside">
            <Userinfo
              userId={userId}
              imgUrl={{ avatar: avatar, avatar_class: "" }}
              firstName={first_name}
              lastName={last_name}
            />
          </aside>
        </section>

        {/* Colulmn with all comments */}
        <section className="grid__col grid__col--2">
          {this.state.comments.map((comment) => (
            <Comment commentData={comment} />
          ))}
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth,
  posts: state.post,
});

const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(getUser),
});

export default connect(mapStateToProps, mapDispatchToProps)(Postdetail);
