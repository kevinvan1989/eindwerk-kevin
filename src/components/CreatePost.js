import React, { Component } from "react";
import { Formik } from "formik";
import PostTextEditor from "./PostTextEditor";

export default class CreatePost extends Component {
  handleRegister = () => {
    
  }

  render() {
    return (
      <div>
        <Formik
          onSubmit={this.handleRegister}
          initialValues={{
            // D.m.v. deze keys worden values opgehaald in <Field>
            PostEditor: 'init value Formik'
          }}
          // Input and give feedback / errors
          validationSchema={{}}
        >
          {props => <PostTextEditor {...props} />}
        </Formik>
      </div>
    );
  }
}
