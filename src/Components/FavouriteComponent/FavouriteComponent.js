import React, { Component } from "react";
import redHeart from "../../assets/icons/red-heart-svgrepo-com.svg";
import blackHeart from "../../assets/icons/heart-svgrepo-com.svg";
import axios from "axios";

import "./FavouriteComponent.scss";
class FavouriteComponent extends Component {
  state = {
    favouriteState: false,
    failedAuth: false,
    user: null,
    authToken: null,
  };
  componentDidMount() {
    // console.log(this.props.listingID);
    const authToken = sessionStorage.getItem("authToken");

    if (!authToken) {
      this.setState({ failedAuth: true });
    } else {
      axios
        .get("http://localhost:5050/current", {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        })
        .then((response) => {
          console.log("User auth success", response.data);
          this.setState({
            user: response.data,
            failedAuth: false,
            authToken: authToken,
          });
          return response.data;
        })
        .then((result) => {
          axios
            .post(
              `http://localhost:5050/favouriteCheck/${this.props.listingID}`,
              result
            )
            .then((reponse) => {
              console.log(reponse.data);
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
          this.setState({ failedAuth: true });
        });
    }
  }
  render() {
    return (
      <div className="favouritecomponent">
        <div className="favouritecomponent__container">
          <div className="favouritecomponent__container--image">
            <img
              src={blackHeart}
              alt="favourite component logo"
              className="favouritecomponent__container--image"
            />
          </div>
          {/* The text below this is going to change depending on if favourited or not */}
          <div>Favourite this listing</div>
        </div>
      </div>
    );
  }
}

export default FavouriteComponent;
