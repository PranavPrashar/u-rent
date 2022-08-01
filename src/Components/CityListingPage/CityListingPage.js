import axios from "axios";
import React, { Component } from "react";
import "./CityListingPage.scss";
import CityListingDetails from "../CityListingDetails/CityListingDetails";
class CityListingPage extends Component {
  state = {
    cityListings: null,
    imagesList: null,
  };

  componentDidMount() {
    console.log("HIT");
    const city = this.props.match.params.city;
    console.log(city);

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
    // axios
    //   .get(`http://localhost:5050/image`)
    //   .then((response) => {
    //     this.setState({ imagesList: response });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  // testing = (listing) => {
  //   this.state.imagesList?.map((images) => {
  //     console.log(images);
  //     return images.filter((image) => {
  //       if (image.listingID === listing.listingID) {
  //         console.log(image.listingImagePath);
  //         return image.listingImagePath;
  //       } else {
  //         console.log(image.listingImagePath);
  //         return "";
  //       }
  //     });
  //   });
  // };
  render() {
    return (
      <div className="citylistingpage">
        <h1 className="citylistingpage__heading">
          {this.props.match.params.city}
        </h1>
        <div>
          {this.state.cityListings?.map((listing) => {
            console.log(listing);
            return (
              <CityListingDetails
                address={listing.address}
                key={listing.listingID}
                id={listing.listingID}
                price={listing.price}
                image={listing.listingImagePath}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default CityListingPage;
