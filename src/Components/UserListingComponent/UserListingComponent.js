import axios from "axios";
import React, { Component } from "react";
import UserListingDetails from "../UserListingDetails/UserListingDetails";
import { NavLink } from "react-router-dom";
import "./UserListingComponent.scss";

export default class UserListingComponent extends Component {
  state = {
    listings: [],
    user: null,
  };
  componentDidMount() {
    let user = this.props.user?.userId;

    axios
      .get(`http://localhost:5050/mylistings/${user}`)
      .then((response) => {
        this.setState({
          listings: response.data,
          user: this.props.user?.userId,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="userlistingcomponent">
        <h1 className="userlistingcomponent__header">
          Welcome {this.props.user?.name}, here are some of your listings:
        </h1>
        {this.state.listings.map((listing) => {
          return (
            <NavLink
              to={`/listingdetails/${listing.listingID}`}
              className="citylistingpage__link"
            >
              <UserListingDetails
                address={listing.listingAddress}
                key={listing.listingID}
                id={listing.listingID}
                price={listing.price}
                image={listing.listingImagePath}
                user={this.state.user}
                className="citylistingpage__link"
              />
            </NavLink>
          );
        })}
      </div>
    );
  }
}
