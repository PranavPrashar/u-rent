import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import RegistrationComponent from "./Components/RegistrationComponent/RegistrationComponent";
import Login from "./Components/LoginPage/Login";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Components/HomePage/HomePage";
import CityListingPage from "./Components/CityListingPage/CityListingPage";
import ListingDetailsPage from "./Components/ListingDetailsPage/ListingDetailsPage";
import UploadListingPage from "./Components/UploadListingPage/UploadListingPage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/registration" component={RegistrationComponent} />
        <Route path="/listings/:city" component={CityListingPage} />
        <Route
          path="/listingdetails/:listingID"
          component={ListingDetailsPage}
        />
        <Route path="/" exact component={HomePage} />
        <Route path="/uploadlisting" component={UploadListingPage} />
      </Switch>
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
    </BrowserRouter>
  );
}

export default App;
