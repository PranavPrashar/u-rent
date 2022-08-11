import React from "react";
import "./CityListingDetails.scss";
import chevron from "../../assets/icons/chevron_right-24px.svg";
function CityListingDetails(props) {
  return (
    <div>
      <div className="citylistingdetails">
        <div className="citylistingdetails__left">
          <img
            src={props.image}
            className="citylistingdetails__image"
            alt={props.image}
          />
        </div>
        <div className="citylistingdetails__right">
          <div className="citylistingdetails__right--details">
            <p className="citylistingdetails__right--city">{props.address}</p>
            <p className="citylistingdetails__right--city">{props.id}</p>
            <p className="citylistingdetails__right--city">${props.price}</p>
          </div>
          <div className="citylistingdetails__right--chevron">
            <img src={chevron} alt="chevron" className="chevron__img" />
            {/* </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CityListingDetails;
