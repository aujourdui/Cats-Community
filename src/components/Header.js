import React, { useState } from "react";

import { Button, Modal, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import ImageUpload from "./ImageUpload";

const button__style = {
  fontSize: "1.2rem",
};

const Header = (props) => {
  const { setOpenSignIn, setOpen, auth, user, input__style } = props;
  const [uploadOpen, setUploadOpen] = useState(false);
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
            open={uploadOpen}
            onClose={() => setUploadOpen(false)}
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
          {user?.displayName ? (
            <span className="home__post-container">
              <Button
                sx={button__style}
                onClick={() => {
                  setUploadOpen(true);
                }}
              >
                +post
              </Button>
            </span>
          ) : (
            <Button
              sx={button__style}
              onClick={() => alert("Please login first")}
            >
              +post
            </Button>
          )}
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
          <Button sx={button__style} onClick={() => auth.signOut()}>
            Logout
          </Button>
        ) : (
          <div className="home__login-container">
            <Button
              sx={button__style}
              onClick={() => {
                setOpenSignIn(true);
              }}
            >
              SignIn
            </Button>
            <Button
              sx={button__style}
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
