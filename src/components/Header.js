import React, { useState, useEffect } from "react";

import { Button, Modal, Box, Typography } from "@mui/material";
import { Link, NavLink, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import Logo from "./Logo";
import ImageUpload from "./ImageUpload";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

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
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Header = () => {
  // const { user } = props;
  const [uploadOpen, setUploadOpen] = useState(false);
  // const [username, setUsername] = useState("");
  // const [user, setUser] = useState(null);
  const [{ user }, dispatch] = useStateValue();

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((authUser) => {
  //     if (authUser) {
  //       // console.log(authUser);
  //       setUser(authUser);
  //     } else {
  //       setUser(null);
  //     }
  //   });

  //   return () => {
  //     unsubscribe();
  //   };
  // }, [user, username]);

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
      {/* <p>
        Search
        <input type="text" />
      </p> */}
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
        {/* <span className="favorite-link">
          <NavLink to="/favorite" activeClassName="is-active" exact={true}>
            favorite
          </NavLink>
        </span>
        <span className="profile-link">
          <NavLink to="/profile" activeClassName="is-active" exact={true}>
            profile
          </NavLink>
        </span> */}
        <Button sx={button__style} onClick={logOut}>
          Logout
        </Button>
      </div>
    </header>
  );
};

export default Header;
