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
    favouriteArray: null,
  };

  handleFavourite = () => {
    // console.log(this.state.favouriteArray);
    const postInfo = {
      userID: this.state.user?.userId,
      listingID: this.props.listingID,
    };
    // console.log(postInfo);
    //this.state.favouriteArray.length !== 0 ||
    if (this.state.favouriteState) {
      console.log("the size is greater than 1");
      axios
        .post("http://localhost:5050/deleteFavourite", postInfo)
        .then((response) => {
          console.log(response);
          this.setState({ favouriteState: false });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("The size is less than 1 nothing found");
      axios
        .post("http://localhost:5050/addFavourite", postInfo)
        .then((response) => {
          this.setState({ favouriteState: true });
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
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
            .then((response) => {
              console.log(response.data);
              this.setState({ favouriteArray: response.data });
              return response.data;
            })
            .then((response) => {
              if (response.length >= 1) {
                this.setState({ favouriteState: true });
              }
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
      <div className="favouritecomponent" onClick={this.handleFavourite}>
        <div className="favouritecomponent__container">
          <div className="favouritecomponent__container--image">
            <img
              src={this.state.favouriteState ? redHeart : blackHeart}
              alt="favourite component logo"
              className="favouritecomponent__container--image"
            />
          </div>
          {/* The text below this is going to change depending on if favourited or not */}
          <div>
            {this.state.favouriteState
              ? "Listing Favourited"
              : "Favourite this listing"}
          </div>
        </div>
      </div>
    );
  }
}

export default FavouriteComponent;
