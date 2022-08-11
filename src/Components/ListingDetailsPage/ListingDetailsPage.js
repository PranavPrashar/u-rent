import React, { Component } from "react";
import "./ListingDetailsPage.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import FavouriteComponent from "../FavouriteComponent/FavouriteComponent";
import mapImage from "../../assets/images/map.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import axios from "axios";

class ListingDetailsPage extends Component {
  state = {
    listingInfo: null,
    imagesArray: null,
    userInfo: null,
  };
  componentDidMount() {
    // console.log(this.props.user);
    const listingId = this.props.match.params.listingID;

    axios
      .get(`http://localhost:5050/listings/singleListing/${listingId}`)
      .then((response) => {
        this.setState({
          listingInfo: response.data[0],
          userInfo: this.props.user,
        });

        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`http://localhost:5050/images/listingImages/${listingId}`)
      .then((response) => {
        this.setState({ imagesArray: response.data });
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="listingdetailspage">
        <div>
          {this.state.userInfo ? (
            <FavouriteComponent listingID={this.props.match.params.listingID} />
          ) : (
            <p></p>
          )}
        </div>
        <div className="listingdetailspage__top">
          <h1 className="listingdetailspage__top--heading">
            {this.state.listingInfo?.listingAddress}
          </h1>
          <p className="listingdetailspage__top--price">
            ${this.state.listingInfo?.price}/Month
          </p>
          <p className="listingdetailspage__top--id">
            Listing Id: {this.state.listingInfo?.listingID}
          </p>
          <p className="listingdetailspage__top--id">
            Contact Email: {this.state.listingInfo?.email}
          </p>
          <p className="listingdetailspage__top--id">
            Contact Phone:{" "}
            <a href={this.state.listingInfo?.phonenumber}>
              {this.state.listingInfo?.phonenumber}
            </a>
          </p>
        </div>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="listingdetailspage__swiper"
        >
          {this.state.imagesArray?.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <img
                  src={image.listingImagePath}
                  alt="alt "
                  className="listingdetailspage__image"
                  key={index}
                />
              </SwiperSlide>
            );
          })}
          {/* <SwiperSlide>Testing</SwiperSlide>
          <SwiperSlide>Testing 2</SwiperSlide> */}
        </Swiper>
        <div className="listingdetailspage__details">
          <div>
            <p className="listingdetailspage__details--heading">
              Listing Details:
            </p>
          </div>
          <div>
            <p className="listingdetailspage__details--paragraph">
              <span className="listingdetailspage__details--span">
                Listing City:
              </span>{" "}
              {this.state.listingInfo?.listingCity}{" "}
            </p>
            <p className="listingdetailspage__details--paragraph">
              <span className="listingdetailspage__details--span">
                # Bathrooms:
              </span>{" "}
              {this.state.listingInfo?.listingBathrooms}
            </p>
            <p className="listingdetailspage__details--paragraph">
              <span className="listingdetailspage__details--span">
                # Bedrooms:
              </span>
              {this.state.listingInfo?.listingBedrooms}
            </p>

            <p className="listingdetailspage__details--paragraph">
              <span className="listingdetailspage__details--span">
                Square Feet:
              </span>
              {this.state.listingInfo?.size}
            </p>
          </div>
          <div>
            <h5 className="listingdetailspage__details--headingsmall">
              Listing Description:
            </h5>
            <p className="listingdetailspage__details--paragraph description">
              {this.state.listingInfo?.listingDescription}
            </p>
          </div>
        </div>

        <div className="listingdetailspage__map--container">
          <p className="listingdetailspage__map--header">MAP SECTION</p>
          <img src={mapImage} alt="Map" className="listingdetailspage__map" />
        </div>
      </div>
    );
  }
}

export default ListingDetailsPage;
