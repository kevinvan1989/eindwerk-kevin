import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost } from '../redux/actions/postsActions'

 class Pagination extends Component {
  getToPage = page =>{
    this.props.getNextPage(page)
  }

  render() {
    return (
      <div>
        <button onClick={()=>this.getToPage(5)}>get to page</button>
      </div>
    )
  }
}

const mapStateToProps = state =>({
  newstate: state.posts
})

const mapDispatchToProps = dispatch => ({
  getRequestedPage: page => dispatch(fetchPost(page))
})

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)