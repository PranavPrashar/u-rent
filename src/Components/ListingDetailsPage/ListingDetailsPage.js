import React, { Component } from "react";
import "./ListingDetailsPage.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import axios from "axios";

class ListingDetailsPage extends Component {
  state = {
    listingInfo: null,
    imagesArray: null,
  };
  componentDidMount() {
    const listingId = this.props.match.params.listingID;

    axios
      .get(`http://localhost:5050/listings/singleListing/${listingId}`)
      .then((response) => {
        this.setState({ listingInfo: response.data[0] });
        console.log(response.data);
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

    console.log(listingId);
  }
  render() {
    console.log(this.state.listingInfo);
    return (
      <div className="listingdetailspage">
        <div className="listingdetailspage__top">
          <h1>{this.state.listingInfo?.listingAddress}</h1>
          <h3>Listing Id {this.state.listingInfo?.listingID}</h3>
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
          {this.state.imagesArray?.map((image) => {
            return (
              <SwiperSlide>
                <img
                  src={image.listingImagePath}
                  alt="alt "
                  className="listingdetailspage__image"
                />
              </SwiperSlide>
            );
          })}
          {/* <SwiperSlide>Testing</SwiperSlide>
          <SwiperSlide>Testing 2</SwiperSlide> */}
        </Swiper>
        <div className="listingdetailspage__details">
          <div>
            <p>Listing Details</p>
          </div>
          <div>
            <p>Listing City: </p>
            <p># Bathrooms: </p>
            <p># Bedrooms: </p>
            <p># Bathrooms: </p>
            <p>Square Feet: </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ListingDetailsPage;
