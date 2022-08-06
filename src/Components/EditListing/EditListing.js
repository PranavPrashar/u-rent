import React, { Component } from "react";
import axios from "axios";
import "./EditListing.scss";
import { Redirect } from "react-router-dom";
class EditListing extends Component {
  state = {
    listingData: null,
    listingPrice: null,
    listingPhoneNumber: null,
    listingCity: null,
    listingSize: null,
    listingBathrooms: null,
    listingBedrooms: null,
    listingDescription: null,
  };

  handleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.value);
    // console.log("Form Data ", event.target.name);
  };

  handleSelectCity = (event) => {
    console.log(event.target.value);
    this.setState({ value: event.target.value });
  };
  handlephoneNumber = (event) => {
    console.log(event.target.value);
    this.setState({ listingPhoneNumber: event.target.value });
  };
  handleSelectBathrooms = (event) => {
    this.setState({ listingBathrooms: event.target.value });
  };
  handleSelectBedrooms = (event) => {
    this.setState({ listingBedrooms: event.target.value });
  };

  handleSelectSize = (event) => {
    console.log(event.target.value);
    this.setState({ size: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const postData = {
      //   listingData: this.state.listingData,
      listingPrice: this.state.listingPrice,
      listingPhoneNumber: this.state.listingPhoneNumber,
      listingCity: this.state.listingCity,
      listingSize: this.state.listingSize,
      listingBathrooms: this.state.listingBathrooms,
      listingBedrooms: this.state.listingBedrooms,
      listingDescription: this.state.listingDescription,
    };

    axios
      .post(
        `http://localhost:5050/updateListing/${this.props.match.params.listingId}`,
        postData
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    console.log(this.props.match.params.listingId);
    // let listingID = this.props.match.params.listingId;

    axios
      .get(
        `http://localhost:5050/listings/singleListing/${this.props.match.params?.listingId}`
      )
      .then((response) => {
        console.log(response.data[0]);
        this.setState({
          listingData: response.data[0],
          listingPrice: response.data[0].price,
          listingPhoneNumber: response.data[0].phonenumber,
          listingCity: response.data[0].listingCity,
          listingSize: response.data[0].size,
          listingBathrooms: response.data[0].listingBathrooms,
          listingBedrooms: response.data[0].listingBedrooms,
          listingDescription: response.data[0].listingDescription,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const redirectToReferrer = this.state.redirectToReferrer;
    if (redirectToReferrer === true) {
      <Redirect to="/" />;
    }
    return (
      <div>
        <form
          className="uploadlistingpage__form"
          enctype="multipart/form-data"
          onSubmit={this.handleSubmit}
        >
          <label htmlFor="listingPrice">Price:</label>
          <input
            type="text"
            required
            id="listingPrice"
            placeholder="please enter listing price "
            name="listingPrice"
            onChange={this.handleInput}
            value={this.state.listingPrice}
          />
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            placeholder="please enter phone number "
            name="phoneNumber"
            value={this.state.listingPhoneNumber}
            onChange={this.handlephoneNumber}
          />

          <label htmlFor="listingCity">Listing City:</label>
          <select
            id="listingCity"
            onChange={this.handleSelectCity}
            required
            value={this.state.listingCity}
          >
            <option value="toronto">Toronto</option>
            <option value="waterloo">Waterloo</option>
            <option value="northyork">North York</option>
            <option value="vaughan">Vaughan</option>
          </select>

          <label htmlFor="listingCity">Size of Listing:</label>
          <select
            id="listingSize"
            value={this.state.listingSize}
            onChange={this.handleSelectSize}
            required
          >
            <option value="around 500">around 500</option>
            <option value="500 to 750">500 to 750"</option>
            <option value="750 to 1000">750 to 1000</option>
            <option value="1000 Plus">1000 Plus</option>
            <option value="N/A">N/A</option>
          </select>

          <label htmlFor="listingBathrooms">Number of Bedrooms</label>
          <select
            id="listingBathrooms"
            onChange={this.handleSelectBedrooms}
            name="listingBathrooms"
            value={this.state.listingBedrooms}
            required
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="3+">More than 3</option>
            <option value="N/A" selected>
              N/A
            </option>
          </select>

          <label htmlFor="listingBedrooms">Number of Bathrooms</label>

          <select
            id="listingBedrooms"
            value={this.state.listingBathrooms}
            onChange={this.handleSelectBathrooms}
            name="listingBedrooms"
            required
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="3+">More than 3</option>
            <option value="N/A" selected>
              N/A
            </option>
          </select>

          <label htmlFor="listingBedrooms">Description about listing</label>
          <textarea
            type="text"
            required
            id="description"
            placeholder="please enter description of listing"
            cols={1}
            rows={3}
            name="description"
            value={this.state.listingDescription}
            onChange={this.handleInput}
          />

          <input
            type="submit"
            value="Upload"
            className="uploadlistingpage__upload--submit"
          />
        </form>
      </div>
    );
  }
}

export default EditListing;
