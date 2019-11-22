import React, { Component } from "react";
import FormInput from "./FormInput";
import CustomButton from "./CustomButton";

import { signInWithGoogle } from "../firebase/firebase.utils";
class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="login">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={email}
            label="email"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            label="password"
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Login</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Login with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
