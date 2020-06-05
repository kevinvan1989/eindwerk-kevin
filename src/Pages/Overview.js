import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost } from "../redux/actions/postsActions";
import Blogpost from "../components/Blogpost";
import ClipLoader from "react-spinners/ClipLoader";
import CreatePostBtn from "../components/CreatePostBtn";
import { getUser } from "../redux/actions/authActions";

class Overview extends Component {
  componentDidMount() {
    this.props.getPosts(this.props.postData);
    this.props.getUser();
    console.log("props in overview", this.props);
  }

  render() {
    const { postData, userAuthorized } = this.props;
    //console.log('postData in overview', postData.last_page, postData.current_page)

    console.log("postdata in overview", postData);

    return (
      <div>
        <div>{userAuthorized.user !== "not set" && <CreatePostBtn />}</div>
        {postData.posts ? (
          <div>
            {postData.posts.map((post) => (
              <Blogpost postDetail={post} />
            ))}
          </div>
        ) : (
          <ClipLoader />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  postData: state.posts,
  userAuthorized: state.auth
});

const mapDispatchToProps = (dispatch) => ({
  getPosts: (page) => dispatch(fetchPost(page)),
  getUser: () => dispatch(getUser),
});

export default connect(mapStateToProps, mapDispatchToProps)(Overview);
