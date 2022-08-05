import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import RegistrationComponent from "./Components/RegistrationComponent/RegistrationComponent";
import Login from "./Components/LoginPage/Login";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Components/HomePage/HomePage";
import CityListingPage from "./Components/CityListingPage/CityListingPage";
import ListingDetailsPage from "./Components/ListingDetailsPage/ListingDetailsPage";
import UploadListingPage from "./Components/UploadListingPage/UploadListingPage";
import { Component, useState } from "react";
import axios from "axios";

class App extends Component {
  state = {
    failedAuth: false,
    user: null,
    authToken: null,
    error: "",
    success: false,
  };

  handleLogout = () => {
    this.setState({
      user: null,
      failedAuth: true,
      authToken: null,
    });
    sessionStorage.removeItem("authToken");
    // this.props.history.push("/");
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const loginInformation = {
      username: form.username.value,
      password: form.password.value,
    };

    console.log(loginInformation);
    axios
      .post("http://localhost:5050/login", loginInformation)
      .then((response) => {
        // console.log("Login Success", response.data.token);
        sessionStorage.setItem("authToken", response.data.token);
        this.setState({
          error: "",
          success: true,
          authToken: response.data.token,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          success: false,
          error: error.response.data,
        });
      });
  };

  componentDidMount() {
    const authToken = sessionStorage.getItem("authToken");

    if (!authToken) {
      this.setState({ failedAuth: true });
    } else {
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
            authToken: authToken,
          });
          // this.setState({});
        })
        .catch((error) => {
          console.log(error);
          this.setState({ failedAuth: true });
        });
    }
  }
  render() {
    return (
      <BrowserRouter>
        {/* <NavBar /> */}
        <Route
          path="/"
          component={(routerProps) => (
            <NavBar
              authToken={this.state.authToken}
              handleLogout={this.handleLogout}
            />
          )}
        />
        <Switch>
          <Route
            path="/login"
            component={(routerProps) => (
              <Login
                authToken={this.state.authToken}
                handleSubmit={this.handleSubmit}
                error={this.state.error}
                success={this.state.success}
              />
            )}
          />
          <Route path="/registration" component={RegistrationComponent} />
          <Route path="/listings/:city" component={CityListingPage} />
          <Route
            path="/listingdetails/:listingID"
            component={ListingDetailsPage}
          />
          <Route path="/" exact component={HomePage} />
          <Route path="/uploadlisting" component={UploadListingPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
