import * as React from "react";
import { useState } from "react";

import { Button, Modal, Box, Typography } from "@mui/material";
import { Link, NavLink, useHistory } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import Logo from "./Logo";
import ImageUpload from "../features/ImageUpload";
import { useStateValue } from "../../context/StateProvider";
import { actionTypes } from "../../reducers/reducer";

const button__style = {
  fontSize: "1.2rem",
};

const upload__title = {
  marginBottom: "1rem",
};

const modal__style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Header = () => {
  const [uploadOpen, setUploadOpen] = useState(false);
  const [{ user }, dispatch] = useStateValue();

  const history = useHistory();

  const logOut = () => {
    auth.signOut();
    dispatch({
      type: actionTypes.UNSET_USER,
      user: null,
    });
    history.push("/");
  };

  return (
    <header className="header">
      <Link to="/home">
        <Logo />
      </Link>
      <div className="header-links">
        <span className="upload-link">
          <Modal
            open={uploadOpen}
            onClose={() => setUploadOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={modal__style}>
              <div className="post-title__container">
                <Typography
                  sx={upload__title}
                  id="modal-modal-title"
                  variant="h3"
                  component="h2"
                >
                  Create a new post
                </Typography>
              </div>
              {user?.displayName ? (
                <ImageUpload
                  username={user.displayName}
                  button__style={button__style}
                />
              ) : (
                <h3>Sorry you need to login in order to upload</h3>
              )}
            </Box>
          </Modal>
          <span className="home__postContainer">
            <Button
              className="home__postButton"
              sx={button__style}
              onClick={() => {
                setUploadOpen(true);
              }}
            >
              +post
            </Button>
          </span>
        </span>
        <span className="home-link">
          <NavLink to="/home" activeClassName="is-active" exact={true}>
            Home
          </NavLink>
        </span>
        <span className="chat-link">
          <NavLink to="/chat" activeClassName="is-active" exact={true}>
            Chat
          </NavLink>
        </span>
        <Button sx={button__style} onClick={logOut}>
          Logout
        </Button>
      </div>
    </header>
  );
};

export default Header;
