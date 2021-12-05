import React from "react";
import Post from "./Post";
import Recommend from "./Recommend";

const HomePage = () => (
  <div className="home">
    <div className="home-contents">
      <Post />
    </div>
    <div className="home-recommend">
      <Recommend />
    </div>
  </div>
);

export default HomePage;
