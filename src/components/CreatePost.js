import React, { Component } from "react";
import { Formik } from "formik";
import PostTextEditor from "./PostTextEditor";
import * as Yup from "yup";
import { connect } from "react-redux";
import { addNewPost } from "../redux/actions/postsActions";

 class CreatePost extends Component {
  handleSubmitCreate = values => {
    console.log(values)
    this.props.createPost(values)

  }

  render() {
    console.log('props uit create', this.props)
    return (
      <div>
        <Formik
          onSubmit={this.handleSubmitCreate}
          initialValues={{
            POST_title: 'test',
            // D.m.v. deze keys worden values opgehaald in <Field>
            POST_editor: 'init value Formik'
          }}
          // Input and give feedback / errors
          validationSchema={Yup.object({})}
        >
          {props => <PostTextEditor {...props} initValueName='CREATE_POST'/>}
        </Formik>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch(addNewPost(post))
} )

export default connect(undefined, mapDispatchToProps)(CreatePost)