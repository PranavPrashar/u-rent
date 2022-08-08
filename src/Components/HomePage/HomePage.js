import React, { Component } from "react";

import HomePageCard from "../HomePageCard/HomePageCard";
import "./HomePage.scss";
import cityJson from "../../assets/data/citys.json";
import NavBar from "../NavBar/NavBar";
import axios from "axios";

class HomePage extends Component {
  state = {
    failedAuth: false,
    user: null,
  };

  componentDidMount() {
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
  }
  render() {
    return (
      <div className="homepage">
        {/* <NavBar /> */}
        <h1 className="homepage__heading">URent Cities</h1>
        <div className="homepage__cards">
          {cityJson.map((city, index) => {
            return (
              <HomePageCard name={city.city} image={city.image} key={index} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default HomePage;
