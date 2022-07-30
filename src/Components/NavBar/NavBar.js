import React from "react";
import "./NavBar.scss";
// This is nav bar if you are not logged in
function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar__left">U-Rent</div>
      <div className="navbar__right">
        <p className="navbar__right--login navbar__right--login--selected">
          Home
        </p>
        <p className="navbar__right--login">Login</p>
      </div>
    </div>
  );
}

export default NavBar;
