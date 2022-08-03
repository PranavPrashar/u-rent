import React, { Component } from "react";
import "./UploadListingPage.scss";
class UploadListingPage extends Component {
  state = {
    formData: [],
    value: "",
  };
  handleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.value);
  };

  handleSelect = (event) => {
    console.log(event.target.value);
    this.setState({ value: event.target.value });
  };

  printResults = (event) => {
    console.log(this.state.formData);
    console.log(this.state.value);
    event.preventDetault();
  };

  //   handleSubmit = () => {};
  render() {
    return (
      <div className="uploadlistingpage">
        <h1>Upload Your Listing</h1>
        <form
          className="uploadlistingpage__form"
          // method="POST" action="h"
          onSubmit={this.printResults}
          method="POST"
          action="http://localhost:5050/profile-upload-multiple"
          enctype="multipart/form-data"
        >
          <label htmlFor="listingAddress">Listing Address:</label>
          <input
            type="text"
            required
            id="listingAddress"
            placeholder="please enter listing address "
            onChange={this.handleInput}
          />
          <label htmlFor="listingCity">Listing City:</label>
          <select
            id="listingCity"
            value={this.state.value}
            onChange={this.handleSelect}
            required
          >
            <option value="toronto">Toronto</option>
            <option value="waterloo">Waterloo</option>
            <option value="northyork">North York</option>
            <option value="vaughan">Vaughan</option>
          </select>

          <label htmlFor="listingSize">Size of Listing:</label>
          <input
            type="text"
            required
            id="listingSize"
            placeholder="please enter listing square foot"
            onChange={this.handleInput}
          />
          <label htmlFor="listingBathrooms">Number of Bedrooms</label>
          <input
            type="text"
            required
            id="listingBathrooms"
            placeholder="please enter number of bedrooms"
            onChange={this.handleInput}
          />
          <label htmlFor="listingBedrooms">Number of Bathrooms</label>
          <input
            type="text"
            required
            id="listingBedrooms"
            placeholder="please enter number of bathrooms"
            onChange={this.handleInput}
          />

          <label htmlFor="listingBedrooms">Description about listing</label>
          <textarea
            type="text"
            required
            id="listingBedrooms"
            placeholder="please enter number of bathrooms"
            cols={1}
            rows={3}
            onChange={this.handleInput}
          />

          {/* <div>
            <label>Upload multiple profile picture</label>
            <input type="file" name="profile-files" required multiple />
          </div>
          <div>
            <input type="submit" value="Upload" />
          </div> */}
        </form>

        {/* <form
        method="POST"
        action="http://localhost:5050/profile-upload-single"
        enctype="multipart/form-data"
      >
        <div>
          <label>Upload profile picture</label>
          <input type="file" name="profile-file" required />
        </div>
        <div>
          <input type="submit" value="Upload" />
        </div>
      </form> */}
        {/* <form
          method="POST"
          action="http://localhost:5050/profile-upload-multiple"
          enctype="multipart/form-data"
        >
          <div>
            <label>Upload multiple profile picture</label>
            <input type="file" name="profile-files" required multiple />
          </div>
          <div>
            <input type="submit" value="Upload" />
          </div>
        </form> */}
      </div>
    );
  }
}

export default UploadListingPage;
