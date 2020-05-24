import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost } from "../redux/actions/postsActions";
import Blogpost from "./Blogpost";
import ClipLoader from "react-spinners/ClipLoader"
import CreatePostBtn from "./CreatePostBtn";

class Overview extends Component {
  componentDidMount() {
    this.props.getPosts(this.props.postData.current_page);
  }



  render() {
    const { postData } = this.props;
    console.log('postData in overview', postData.last_page, postData.current_page)

    return (
      <div>
        <div>

        <CreatePostBtn />
        </div>
      {postData.posts ? (<div>{postData.posts.map((post) => (
          <Blogpost postDetail={post} />
        ))}</div>) : <ClipLoader />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  postData: state.posts
});

const mapDispatchToProps = (dispatch) => ({
  getPosts: page => dispatch(fetchPost(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Overview);
