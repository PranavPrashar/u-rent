import React, { Component } from "react";
import "./RegistrationComponent.scss";
import axios from "axios";
import { NavLink } from "react-router-dom";

import { Link } from "react-router-dom";
export default class RegistrationComponent extends Component {
  state = {
    error: "",
    success: false,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const userRegisterationInfo = {
      name: form.name.value,
      userName: form.username.value,
      password: form.password.value,
    };
    axios
      .post("http://localhost:5050/register", userRegisterationInfo)
      .then(() => {
        this.setState({
          success: true,
          error: "",
        });
        console.log("Testing");
        this.props.history.push("/login");
      })
      .then(() => {
        // this.props.history.push("/login");
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
      <div className="registration">
        <h1 className="signup__title">
          Welcome to URent, Fill out information below to register{" "}
        </h1>
        <form className="signup" onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="field__input"
            required
          />
          <label htmlFor="Username">Username</label>
          <input
            type="email"
            id="username"
            name="username"
            className="field__input"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            name="password"
            required
            className="field__input"
          />
          {/* <NavLink to={"/login"}> */}
          <button className="signup__button">Sign Up</button>
          {/* </NavLink> */}
        </form>

        {/* Success message */}
        {this.state.success && (
          <div className="signup__message">Signed Up! You can log in now.</div>
        )}

        {/* Error message */}
        {this.state.error && (
          <div className="signup__message">{this.state.error}</div>
        )}
        <p>
          Have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    );
  }
}
