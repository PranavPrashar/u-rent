import axios from "axios";
import React, { Component } from "react";
import { Link, NavLink, Redirect } from "react-router-dom";
import "./Login.scss";

export default class Login extends Component {
  state = {
    error: "",
    success: false,
    failedAuth: false,
    user: null,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const loginInformation = {
      username: form.username.value,
      password: form.password.value,
    };
    axios
      .post("http://localhost:5050/login", loginInformation)
      .then((response) => {
        // console.log("Login Success", response.data.token);
        sessionStorage.setItem("authToken", response.data.token);
        this.setState({
          error: "",
          success: true,
        });
      })
      .catch((error) => {
        this.setState({
          success: false,
          error: error.response.data,
        });
      });
  };
  render() {
    return (
      <div className="login-page">
        <form className="login" onSubmit={this.handleSubmit}>
          <h1 className="login__title">Log in</h1>

          <label htmlFor="name">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            className="field__input"
          />
          <label htmlFor="name">Password</label>
          <input
            type="text"
            id="password"
            name="password"
            className="field__input"
          />

          <button className="login__button">Log in</button>

          {/* Error message */}
          {this.state.error && (
            <div className="signup__message">{this.state.error}</div>
          )}

          {/* Success message */}
          {this.state.success && <Redirect to="/" />}
        </form>
        <p>
          Need an account? <Link to="/registration">Sign up</Link>
        </p>
      </div>
    );
  }
}
