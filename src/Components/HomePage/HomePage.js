import React from "react";

import HomePageCard from "../HomePageCard/HomePageCard";
import "./HomePage.scss";
import cityJson from "../../assets/data/citys.json";

function HomePage() {
  return (
    <div className="homepage">
      <h1 className="homepage__heading">URent Cities</h1>
      {cityJson.map((city, index) => {
        return <HomePageCard name={city.city} image={city.image} key={index} />;
      })}
    </div>
  );
}

export default HomePage;
