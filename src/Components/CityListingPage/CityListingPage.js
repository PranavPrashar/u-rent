import axios from "axios";
import React, { Component } from "react";
import "./CityListingPage.scss";
import CityListingDetails from "../CityListingDetails/CityListingDetails";
import { NavLink } from "react-router-dom";
class CityListingPage extends Component {
  state = {
    cityListings: null,
    imagesList: null,
  };

  componentDidMount() {
    console.log("HIT");
    const city = this.props.match.params.city;
    console.log(city);
    const authToken = sessionStorage.getItem("authToken");

    if (!authToken) {
      this.setState({ failedAuth: true });
    }

    axios
      .get("http://localhost:5050/current", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => {
        console.log("User auth success", response.data);
        this.setState({ user: response.data, failedAuth: false });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ failedAuth: true });
      });

    axios
      .get(`http://localhost:5050/listings/${this.props.match.params.city}`)
      .then((response) => {
        this.setState({
          cityListings: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="citylistingpage">
        <h1 className="citylistingpage__heading">
          {this.props.match.params.city}
        </h1>
        <div>
          {this.state.cityListings?.length < 1 && (
            <p className="">
              Currently there are no listings for
              {" " + this.props.match.params.city + " "}
              please check back later
            </p>
          )}
          {this.state.cityListings?.map((listing) => {
            return (
              <NavLink
                to={`/listingdetails/${listing.listingID}`}
                className="citylistingpage__link"
              >
                <CityListingDetails
                  address={listing.listingAddress}
                  key={listing.listingID}
                  id={listing.listingID}
                  price={listing.price}
                  image={listing.listingImagePath}
                  className="citylistingpage__link"
                />
              </NavLink>
            );

            // return (
            //   <NavLink
            //     to={`/listingdetails/${listing.listingID}`}
            //     className="citylistingpage__link"
            //   >
            //     <CityListingDetails
            //       address={listing.listingAddress}
            //       key={listing.listingID}
            //       id={listing.listingID}
            //       price={listing.price}
            //       image={listing.listingImagePath}
            //       className="citylistingpage__link"
            //     />
            //   </NavLink>
            // );
          })}
        </div>
      </div>
    );
  }
}

export default CityListingPage;
