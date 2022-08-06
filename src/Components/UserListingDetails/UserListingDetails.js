import React from "react";
import deleteIcon from "../../assets/icons/delete-svgrepo-com.svg";
import edit from "../../assets/icons/wrench-svgrepo-com.svg";
import "./UserListingDetails.scss";
function UserListingDetails(props) {
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
          <p className="userlistingdetails__right--city">{props.id} testing</p>
          <p className="userlistingdetails__right--city">${props.price}</p>
          <div className="userlistingdetails__right--city">
            <img
              src={edit}
              alt="edit icon"
              className="userlistingdetails__image"
            />
          </div>
          <div className="userlistingdetails__right--city">
            <img
              src={deleteIcon}
              alt="edit icon"
              className="userlistingdetails__image"
            />
          </div>
          {/* <p className="userlistingdetails__right--city"></p> */}
        </div>
      </div>
    </div>
  );
}

export default UserListingDetails;
