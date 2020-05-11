import React, { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

class Login extends Component {
  clearInput = () => {
    const inputEl = document.querySelectorAll(".inputField");
    inputEl.forEach((el) => {
      console.log(el);
    });
    console.log(inputEl);
  };

  handleLogin = (values) => {
    console.log(values);
    this.clearInput();
  };

  validateForm = (values) => {
    console.log(values);
  };

  render() {
    return (
      <div>
        <Formik
          onSubmit={this.handleLogin}
          initialValues={{
            email: "",
            password: "",
          }}
          // Check for password validation
          validationSchema={Yup.object({
            email: Yup.string()
              .required("required"),

            password: Yup.string()
              .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&])$/,
                "Must contain at least 1 cap, 1 digit & 1 spec char"
              )
              .min(8)
              .required("required"),
          })}
          // validate={this.validateForm}
        >
          <Form>
            <div className="form-group">
              <label htmlFor="">Email</label>
              <Field name="email" id="email" className="inputField" />
              <ErrorMessage
                name="email"
                component="div"
                className="error-msg"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                name="password"
                id="loginPassword"
                className="inputField"
              />
              <div className="error-msg">
                <ErrorMessage 
                  name="password" 
                  component="div"
                  className="error-msg"/>
              </div>
            </div>
            <button type="submit">Login</button>
          </Form>
        </Formik>
      </div>
    );
  }
}

export default Login;
