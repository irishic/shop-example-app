import React, { Component } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.scss";

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
      errorMessage: ""
    };
  }

  handleSumit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (e) {
      this.setState({ errorMessage: e.message });
    }
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });

    if (this.state.errorMessage) {
      this.setState({ errorMessage: "" });
    }
  };

  render() {
    const {
      displayName,
      email,
      password,
      confirmPassword,
      errorMessage
    } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I don't have an account</h2>
        <span>Sing up with your email and password</span>
        <form className="sign-up__form" onSubmit={this.handleSumit}>
          <FormInput
            label="Login"
            type="text"
            name="displayName"
            value={displayName}
            required={true}
            handleChange={this.handleChange}
          />

          <FormInput
            label="Email"
            type="email"
            name="email"
            value={email}
            required={true}
            handleChange={this.handleChange}
          />

          <FormInput
            label="Password"
            type="password"
            name="password"
            value={password}
            required={true}
            handleChange={this.handleChange}
          />

          <FormInput
            label="Confirm password"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            required={true}
            handleChange={this.handleChange}
          />

          <div className="error-case">{errorMessage ? errorMessage : ""}</div>
          <CustomButton type="submit">Sign up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
