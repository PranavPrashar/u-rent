import React, { Component } from "react";
import "./NavBar.scss";
import { NavLink } from "react-router-dom";
import axios from "axios";

// This is nav bar if you are not logged in

class NavBar extends Component {
  // state = {
  //   failedAuth: false,
  //   user: null,
  //   authtoken: null,
  // };

  // handleLogout = () => {
  //   this.setState({
  //     user: null,
  //     failedAuth: true,
  //   });
  //   sessionStorage.removeItem("authToken");
  //   this.props.history.push("/");
  // };

  // componentDidMount() {
  //   const authToken = sessionStorage.getItem("authToken");

  //   if (!authToken) {
  //     this.setState({ failedAuth: true });
  //   }

  //   axios
  //     .get("http://localhost:5050/current", {
  //       headers: {
  //         Authorization: `Bearer ${authToken}`,
  //       },
  //     })
  //     .then((response) => {
  //       console.log("User auth success", response.data);
  //       this.setState({
  //         user: response.data,
  //         failedAuth: false,
  //         authtoken: authToken,
  //       });
  //       // this.setState({});
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       this.setState({ failedAuth: true });
  //     });
  // }

  render() {
    return (
      <div className="navbar">
        <NavLink className="home" to={"/"} activeclassName="active">
          <div className="navbar__left">U-Rent</div>
        </NavLink>

        {/* <div>{!this.state.authtoken ? <p>!Auth</p> : <p>Authed</p>}</div> */}
        <div className="navbar__right">
          <NavLink
            className={
              !this.props.authToken
                ? "navbar__right--login hide"
                : "navbar__right--login"
            }
            // className="navbar__right--login hide"
            to={"/uploadlisting"}
            activeclassName="active"
          >
            <p className="navbar__right--text">Post Listing</p>
          </NavLink>
          <NavLink
            className={
              !this.props.authToken
                ? "navbar__right--login hide"
                : "navbar__right--login"
            }
            to={`/mylistings/${this.props.user?.userId}`}
            activeclassName="active"
          >
            <p className="navbar__right--text">My Listings</p>
          </NavLink>
          <NavLink
            className="navbar__right--login"
            to={"/"}
            activeclassName="active"
          >
            <p className="navbar__right--text">Home</p>
          </NavLink>
          <NavLink
            to={"/login"}
            activeclassName="navbar__right--login--selected"
            // className="navbar__right--login"
            className={
              !this.props.authToken
                ? "navbar__right--login "
                : "navbar__right--login hide"
            }
          >
            <p className="navbar__right--text">Login</p>
          </NavLink>

          <NavLink
            to={"/"}
            // activeclassName="navbar__right--login--selected"
            onClick={this.props.handleLogout}
            // className="navbar__right--login"
            className={
              !this.props.authToken
                ? "navbar__right--login hide"
                : "navbar__right--login "
            }
          >
            <p className="navbar__right--text">Logout</p>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default NavBar;
