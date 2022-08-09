import React, { Component } from "react";
import "./UploadListingPage.scss";
import axios from "axios";
import { NavLink, Redirect, Link } from "react-router-dom";
class UploadListingPage extends Component {
  state = {
    formData: [],
    value: "toronto",
    size: "N/A",
    phoneNumber: "N/A",
    // email: "N/A",
    user: null,
    // numberBedrooms: "",
    listingBathroom: "N/A",
    listingBedrooms: "N/A",
    files: "",
    // numberBathrooms: "",
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

  handleFileUpload = (event) => {
    this.setState({ files: event.target.files });
  };
  printResults = (event) => {
    const headers = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    event.preventDefault();
    const formData = new FormData();
    formData.append("email", this.state.user?.userName);
    formData.append("userId", this.state.user.userId);
    formData.append("listingDescription", this.state.description);
    formData.append("listingSize", this.state.size);
    formData.append("listingCity", this.state.value);
    for (const name in this.state) {
      if (name === "files") {
        for (let i = 0; i < this.state.files.length; i++) {
          console.log(this.state.files[i]);
          formData.append(name, this.state.files[i]);
        }
      }
      formData.append(name, this.state[name]);
    }

    axios
      .post("http://localhost:5050/postlisting", formData)
      .then((response) => {
        console.log(response.data);
        this.props.history.push(`/`);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(this.state.formData);
    console.log(this.state.value);
  };

  componentDidMount() {
    const authToken = sessionStorage.getItem("authToken");

    if (!authToken) {
      this.setState({ failedAuth: true });
    }

    const headers = {};

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
          //   email: response.data.userName,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ failedAuth: true });
      });
  }

  //   handleSubmit = () => {};
  render() {
    return (
      <div className="uploadlistingpage">
        <h1 className="uploadlistingpage__header">Upload Your Listing</h1>
        <form
          className="uploadlistingpage__form"
          enctype="multipart/form-data"
          onSubmit={this.printResults}
        >
          <label htmlFor="listingAddress">Listing Address:</label>
          <h6 className="uploadlistingpage__example">
            Example : 123 Street Toronto Ontario [postalcode]{" "}
          </h6>
          <input
            type="text"
            required
            id="listingAddress"
            placeholder="please enter listing address including postal code and city "
            name="listingAddress"
            onChange={this.handleInput}
          />

          <label htmlFor="listingPrice">Price:</label>
          <input
            type="text"
            required
            id="listingPrice"
            placeholder="please enter listing price "
            name="listingPrice"
            onChange={this.handleInput}
          />
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            placeholder="please enter phone number "
            name="phoneNumber"
            onChange={this.handleInput}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="please enter phone number "
            name="email"
            value={this.state.user?.userName}
            onChange={this.handleInput}
          />

          <label htmlFor="listingCity">Listing City:</label>
          <select
            id="listingCity"
            value={this.state.value}
            onChange={this.handleSelectCity}
            required
          >
            <option value="toronto">Toronto</option>
            <option value="waterloo">Waterloo</option>
            <option value="northyork">North York</option>
            <option value="vaughan">Vaughan</option>
          </select>

          <label htmlFor="listingCity">Size of Listing:</label>
          <select
            id="listingSize"
            value={this.state.size}
            onChange={this.handleSelectSize}
            required
          >
            <option value="around 500">around 500</option>
            <option value="500 to 750">500 to 750"</option>
            <option value="750 to 1000">750 to 1000</option>
            <option value="1000 Plus">1000 Plus</option>
            <option value="N/A" selected>
              N/A
            </option>
          </select>

          {/* <label htmlFor="listingSize">Size of Listing:</label>
          <input
            type="text"
            required
            id="listingSize"
            placeholder="please enter listing square foot"
            name="listingSize"
            onChange={this.handleInput}
          /> */}
          <label htmlFor="listingBathrooms">Number of Bedrooms</label>
          <select
            id="listingBathrooms"
            onChange={this.handleSelectBedrooms}
            name="listingBathrooms"
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
            onChange={this.handleInput}
          />

          <div className="uploadlistingpage__upload">
            <label className="uploadlistingpage__upload--label">
              Upload multiple profile picture
            </label>
            <input
              type="file"
              name="profileFiles"
              required
              multiple
              onChange={this.handleFileUpload}
              className="uploadlistingpage__upload--input"
            />
          </div>

          <input
            type="submit"
            value="Upload"
            className="uploadlistingpage__upload--submit"
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
