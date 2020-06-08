import React, { Component } from 'react'
import { Formik } from "formik"
import * as Yup from "yup";
import { connect } from "react-redux";
import { addComment } from "../redux/actions/postsActions";
import CreateCommentForm from './CreateCommentForm';


class CreateComment extends Component {
  handlePostComment = values => {
    const {postId} = this.props
    console.log(values)
    // console.log('comment values', values)
    // console.log('props in create comment', this.props)
    this.props.postComment(values, postId)
    // this.props.setCommentState(values)
  } 

  render() {
    return (
      <div id='comment-editor'>
        <Formik
          onSubmit={this.handlePostComment}
          initialValues={{
            // D.m.v. deze keys worden values opgehaald in <Field>
            ADD_COMMENT_editor: 'init value Formik'
          }}
          // Input and give feedback / errors
          validationSchema={Yup.object({})}
        >
          {props => <CreateCommentForm {...props} />}
        </Formik>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  postComment: (values, postID) => dispatch(addComment(values, postID))
})

export default connect(undefined, mapDispatchToProps)(CreateComment)