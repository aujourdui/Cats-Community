import React from "react";
import { NavLink } from "react-router-dom";
// import pawLogo from "..../public/images/cat paw pad.png";

const Header = () => (
  <header className="header">
    <h1 className="title">Cat's community</h1>
    <div>{/* <img src={pawLogo} alt="Logo" /> */}</div>
    <div className="header-links">
      <span className="home-link">
        <NavLink to="/" activeClassName="is-active" exact={true}>
          Home
        </NavLink>
      </span>
      <span className="project-link">
        <NavLink to="/project" activeClassName="is-active" exact={true}>
          messages
        </NavLink>
      </span>
      <span className="resume-link">
        <NavLink to="/resume" activeClassName="is-active" exact={true}>
          notification
        </NavLink>
      </span>
    </div>
  </header>
);

export default Header;
