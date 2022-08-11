import React, { Component } from "react";
import "./NavBar.scss";
import { NavLink } from "react-router-dom";
import axios from "axios";
import URentLogo from "../../assets/images/Screen Shot 2022-08-06 at 3.52.28 PM.png";

// This is nav bar if you are not logged in

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <div>
          {" "}
          <NavLink className="home" to={"/"}>
            <img src={URentLogo} alt="logo" className="home" />
            {/* <div className="navbar__left">U-Rent</div> */}
          </NavLink>
        </div>

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
            activeClassName="active"
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
            activeClassName="active"
          >
            <p className="navbar__right--text">My Listings</p>
          </NavLink>
          <NavLink
            className="navbar__right--login"
            to={"/"}
            activeClassName="active"
          >
            <p className="navbar__right--text">Home</p>
          </NavLink>
          <NavLink
            to={"/login"}
            activeClassName="navbar__right--login--selected"
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
