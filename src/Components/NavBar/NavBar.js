import React from "react";
import "./NavBar.scss";
import { NavLink } from "react-router-dom";
// This is nav bar if you are not logged in
function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar__left">U-Rent</div>
      <div className="navbar__right">
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
          className="navbar__right--login"
        >
          <p className="navbar__right--text">Login</p>
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
