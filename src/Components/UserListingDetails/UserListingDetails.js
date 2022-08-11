import axios from "axios";
import React from "react";
import { NavLink, Link } from "react-router-dom";
import deleteIcon from "../../assets/icons/delete-svgrepo-com.svg";
import edit from "../../assets/icons/wrench-svgrepo-com.svg";
import "./UserListingDetails.scss";

function UserListingDetails(props) {
  const handleDelete = () => {
    axios
      .delete(`http://localhost:5050/deletelisting/${props.id}`)
      .then((response) => {
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="userlistingdetails">
        <div className="userlistingdetails__left">
          <img
            src={props.image}
            className="userlistingdetails__image"
            alt={props.image}
          />
        </div>
        <div className="userlistingdetails__right">
          <p className="userlistingdetails__right--city">{props.address}</p>
          <p className="userlistingdetails__right--city">{props.id}</p>
          <p className="userlistingdetails__right--city">${props.price}</p>
        </div>
        <div className="userlistingdetails__bottom">
          <NavLink to={`/editlisting/${props.id}`}>
            <div className="userlistingdetails__right--city">
              <img
                src={edit}
                alt="edit icon"
                className="userlistingdetails__icon"
              />
            </div>
          </NavLink>
          <NavLink to={`/`}>
            <div className="userlistingdetails__right--city">
              <img
                src={deleteIcon}
                alt="edit icon"
                className="userlistingdetails__icon"
                onClick={handleDelete}
              />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default UserListingDetails;
