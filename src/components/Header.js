import React from "react";

// import { auth } from "./firebase";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Header = (props) => {
  const { setOpenSignIn, setOpen, auth, user } = props;
  return (
    <header className="header">
      <Link to="/">
        <Logo />
      </Link>
      <p>
        Search
        <input type="text" />
      </p>
      {/* <button>Create new post</button> */}
      <div className="header-links">
        <span className="upload-link">
          <NavLink to="/upload" activeClassName="is-active" exact={true}>
            +new post
          </NavLink>
        </span>
        <span className="home-link">
          <NavLink to="/" activeClassName="is-active" exact={true}>
            Home
          </NavLink>
        </span>
        <span className="message-link">
          <NavLink to="/message" activeClassName="is-active" exact={true}>
            messages
          </NavLink>
        </span>
        <span className="favorite-link">
          <NavLink to="/favorite" activeClassName="is-active" exact={true}>
            favorite
          </NavLink>
        </span>
        <span className="profile-link">
          <NavLink to="/profile" activeClassName="is-active" exact={true}>
            profile
          </NavLink>
        </span>
        {user ? (
          <Button onClick={() => auth.signOut()}>Logout</Button>
        ) : (
          <div className="home__login-container">
            <Button
              onClick={() => {
                setOpenSignIn(true);
              }}
            >
              SignIn
            </Button>
            <Button
              onClick={() => {
                setOpen(true);
              }}
            >
              SignUp
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
