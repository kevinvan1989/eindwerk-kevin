import React, { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { API } from "../libs/API";
import { getUser } from "../redux/actions/authActions"
import {connect} from "react-redux"
import LoginForm from "../components/Forms/LoginForm";



class Login extends Component {  

  clearInput = () => {
    const inputEl = document.querySelectorAll(".inputField");
    inputEl.forEach((el) => {
      el.value = ''
    });
  };

  handleLogin = (values) => {
    
    API.post('oauth/token', {
            'grant_type': 'password',
            'client_id': 2,
            'client_secret': 'iwrHFPcaiQ3bZTzHEwQpYkpiuHUlbIOJ9SAI6DLI',
            "username": values.LOGIN_email,
            "password": values.LOGIN_password
    }).then(response => {
      window.localStorage.setItem('_DEMO_TOKEN', response.data.access_token)

      // Object.assign(API.defaults, {
      //   headers: { authorization: 'Bearer' + response.data.access_token}
      // })

      API.defaults.headers.common["Authorization"] =
          "Bearer " + response.data.access_token;
          
      API.get("/api/posts").then((response) => {
      });

      // De header wordt ingesteld hierboven. Daarna kunnen de gegevens worden opgehaald
      this.props.getUserInfo();

      
    }) //END of .then()

    
  };

  render() {
    return (
      <div>
        <Formik
          onSubmit={this.handleLogin}
          initialValues={{
            LOGIN_email: "",
            LOGIN_password: ""
          }}
          // Check for password validation
          validationSchema={Yup.object({
            LOGIN_email: Yup.string().required("required"),

            LOGIN_password: Yup.string()
              // .matches(
              //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&])$/,
              //   "Must contain at least 1 cap, 1 digit & 1 spec char"
              // )
              .min(8)
              .required("required"),
          })}
        >

          {/* <Form>
            <Formgroup
              type="email"
              typeOfInfo="LOGIN_email"
              title="Email"
            />

            <Formgroup 
              type="password" 
              typeOfInfo="LOGIN_password" 
              title="Password" 
            />

            <button type="submit">Login</button>
          </Form> */}

          {props => <LoginForm {...props} />}
        </Formik>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    userInfo: state.auth
})

const mapDispatchToProps = dispatch => ({
  getUserInfo : () => dispatch(getUser)
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
