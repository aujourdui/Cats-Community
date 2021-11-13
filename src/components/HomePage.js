import React from "react";
import Contents from "./Contents";
import Recommend from "./Recommend";

const HomePage = () => (
  <div className="home">
    <div className="home-contents">
      <Contents />
    </div>
    <div className="home-recommend">
      <Recommend />
    </div>
  </div>
);

export default HomePage;
