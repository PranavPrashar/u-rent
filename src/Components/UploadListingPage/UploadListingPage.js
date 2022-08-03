import React, { Component } from "react";
import "./UploadListingPage.scss";
class UploadListingPage extends Component {
  state = {
    formData: [],
  };
  handleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {};
  render() {
    return (
      <div className="uploadlistingpage">
        <h1>Upload Your Listing</h1>
        <form className="uploadlistingpage__form">
          <label htmlFor="listingAddress">Listing Address:</label>
          <input
            type="text"
            required
            id="listingAddress"
            placeholder="please enter listing address "
          />

          <label htmlFor="listingSize">Size of Listing:</label>
          <input
            type="text"
            required
            id="listingSize"
            placeholder="please enter listing square foot"
          />
          <label htmlFor="listingBathrooms">Number of Bedrooms</label>
          <input
            type="text"
            required
            id="listingBathrooms"
            placeholder="please enter number of bedrooms"
          />
          <label htmlFor="listingBedrooms">Number of Bathrooms</label>
          <input
            type="text"
            required
            id="listingBedrooms"
            placeholder="please enter number of bathrooms"
          />
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
        <form
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
        </form>
      </div>
    );
  }
}

export default UploadListingPage;
