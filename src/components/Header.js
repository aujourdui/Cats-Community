import React from "react";

import { Button, Modal, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import ImageUpload from "./ImageUpload";

const Header = (props) => {
  const { open, setOpenSignIn, setOpen, auth, user } = props;
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
          <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Cat's community
              </Typography>
              {user?.displayName ? (
                <ImageUpload username={user.displayName} />
              ) : (
                <h3>Sorry you need to login in order to upload</h3>
              )}
              {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
            </Box>
          </Modal>
          <span className="home__login-container">
            <Button
              onClick={() => {
                setOpen(true);
              }}
            >
              +post
            </Button>
          </span>
          {/* <NavLink to="/upload" activeClassName="is-active" exact={true}>
            +new post
          </NavLink> */}
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
