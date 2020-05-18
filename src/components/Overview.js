import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost } from "../redux/actions/postsActions";
import Blogpost from "./Blogpost";

class Overview extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { allPosts } = this.props;
    console.log('allPosts in overview', allPosts)
    return (
      <div>
        {allPosts.map((post) => (
          <Blogpost postDetail={post} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  allPosts: state.posts
});

const mapDispatchToProps = (dispatch) => ({
  getPosts: () => dispatch(fetchPost),
});

export default connect(mapStateToProps, mapDispatchToProps)(Overview);
