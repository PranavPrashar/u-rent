import axios from "axios";
import React, { Component } from "react";
import UserListingDetails from "../UserListingDetails/UserListingDetails";

export default class UserListingComponent extends Component {
  state = {
    listings: [],
  };
  componentDidMount() {
    let user = this.props.user?.userId;

    axios
      .get(`http://localhost:5050/mylistings/${user}`)
      .then((response) => {
        // console.log(user);
        // console.log(response.data);
        this.setState({ listings: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <h1>
          Welcome {this.props.user?.name}, here are some of your listings:
        </h1>
        {/* dont forget the case they dont have anylistings */}
        {/* <UserListingDetails /> */}
        {this.state.listings.map((listing) => {
          return (
            <UserListingDetails
              address={listing.listingAddress}
              key={listing.listingID}
              id={listing.listingID}
              price={listing.price}
              image={listing.listingImagePath}
              className="citylistingpage__link"
            />
          );
        })}
      </div>
    );
  }
}
