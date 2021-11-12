import React from "react";
import { Link } from "react-router-dom";

const ProjectPage = () => (
  <div className="project-container">
    <h1></h1>
    <div className="projects">
      <div className="project1">
        <Link to="/project/1">Message1</Link>
        <p>From Tom</p>
      </div>
      <div className="project2">
        <Link to="/project/2">Message2</Link>
        <p>From Jane</p>
      </div>
    </div>
  </div>
);

export default ProjectPage;
