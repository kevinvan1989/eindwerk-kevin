import React, { Component } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Formgroup from "./Formgroup";
import { API } from "../libs/API";

export default class Register extends Component {
  handleRegister = () => {
    const userData = {
      first_name: document.querySelector("#REGISTER_firstName").value,
      last_name: document.querySelector("#REGISTER_lastName").value,
      email: document.querySelector("#REGISTER_email").value,
      password: document.querySelector("#REGISTER_password").value,
      avatar: document.querySelector("#REGISTER_avatar").value,
      favorite_color: document.querySelector("#REGISTER_favColor").value,
    }

    console.log("console after subm", userData);

    // Submit all data to create new user ...
    // No tokens here
    API.post("api/users", userData).then((response) => {
      console.log(response);
    })
  }

  render() {
    return (
      <div>
        <Formik
          onSubmit={this.handleRegister}
          initialValues={{
            REGISTER_firstName: "",
            REGISTER_lastName: "",
            REGISTER_email: "",
            REGISTER_password: "",
            REGISTER_avatar: "",
            REGISTER_favColor: "#ffffff"
          }}
          // Input and give feedback / errors
          validationSchema={Yup.object({
            REGISTER_firstName: Yup.string().required("req"),

            REGISTER_lastName: Yup.string().required("required"),

            REGISTER_email: Yup.string()
              .matches(
                /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
                "Not a valid email"
              )
              .required("required"),

              REGISTER_password: Yup.string()
              // .matches(
              //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&])$/,
              //   "Must contain at least 1 cap, 1 digit & 1 spec char"
              // )
              .min(8)
              .required("required"),

              REGISTER_avatar: Yup.string().required(),

              REGISTER_favColor: Yup.string().required()
          })}
        >
          <Form>
            <Formgroup
              type="text"
              typeOfInfo="REGISTER_firstName"
              title="First name in props"
            />

            <Formgroup 
              type="text" 
              typeOfInfo="REGISTER_lastName" 
              title="Last name" 
            />

            <Formgroup 
              type="email" 
              typeOfInfo="REGISTER_email" 
              title="E-mail" 
            />

            <Formgroup 
              type="password" 
              typeOfInfo="REGISTER_password" 
              title="Password" 
            />

            <Formgroup 
              type="text" 
              typeOfInfo="REGISTER_avatar" 
              title="Avatar" 
            />

            <Formgroup
              type="color"
              typeOfInfo="REGISTER_favColor"
              title="Favorite color"
            />

            <button type="submit">Register</button>
          </Form>
        </Formik>
      </div>
    );
  }
}
