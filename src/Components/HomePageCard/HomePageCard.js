import React from "react";
import { NavLink } from "react-router-dom";
import "./HomePageCard.scss";
import tempImage from "../../assets/images/istockphoto-1147544807-612x612.jpeg";

function HomePageCard(props) {
  return (
    <NavLink
      to={`/listings/${props.name}`}
      className="homepagecard"
      style={{
        backgroundImage: `url(${props.image})`,
      }}
    >
      {props.name}
    </NavLink>
  );
}

export default HomePageCard;
