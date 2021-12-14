import React, { useState, useEffect } from "react";
import { auth } from "../firebase/firebase";
import { Modal, Typography, Button, Input, Box } from "@mui/material";
import { useHistory } from "react-router-dom";
import { actionTypes } from "../reducers/reducer";
import { useStateValue } from "../context/StateProvider";

const LoginPage = () => {
  const [open, setOpen] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openPlaygroundVancouver, setOpenPlaygroundVancouver] = useState(false);
  const [openPlaygroundToronto, setOpenPlaygroundToronto] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [{ user }, dispatch] = useStateValue();

  const history = useHistory();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        });
        history.push("/home");
      } else {
        history.push("/");
      }
    });

    return () => {
      unsubscribe();
    };
  }, [user]);

  const signUp = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: username,
        });
      })
      .catch((error) => alert(error.message));

    setOpen(false);
  };

  const signIn = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));

    setOpenSignIn(false);
  };

  const signInPlayVancouver = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));

    setOpenPlaygroundVancouver(false);
  };

  const signInPlayToronto = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));

    setOpenPlaygroundToronto(false);
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

  const input__style = {
    fontSize: "1.5rem",
  };

  const input__title = {
    margin: "0 0 1rem 0",
  };

  const button__style = {
    fontSize: "1.5rem",
  };

  const button__style__play = {
    fontSize: "1.5rem",
    color: "#D47AE8",
    padding: 0,
  };

  return (
    <div className="login">
      <div className="home">
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modal__style}>
            <Typography
              sx={input__title}
              id="modal-modal-title"
              variant="h3"
              component="h2"
            >
              Cat's community
            </Typography>
            <form className="home__signup">
              <Input
                sx={input__style}
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                sx={input__style}
                type="text"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                sx={input__style}
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                sx={input__style}
                type="submit"
                onClick={signUp}
                className="signup__button"
              >
                Sign Up
              </Button>
            </form>
          </Box>
        </Modal>
        <Modal
          open={openSignIn}
          onClose={() => setOpenSignIn(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modal__style}>
            <Typography
              sx={input__title}
              id="modal-modal-title"
              variant="h3"
              component="h2"
            >
              Cat's community
            </Typography>
            <form className="home__signin">
              <Input
                sx={input__style}
                type="text"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                sx={input__style}
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button sx={input__style} type="submit" onClick={signIn}>
                Sign In
              </Button>
            </form>
          </Box>
        </Modal>
        <Modal
          open={openPlaygroundVancouver}
          onClose={() => setOpenPlaygroundVancouver(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modal__style}>
            <Typography
              sx={input__title}
              id="modal-modal-title"
              variant="h5"
              component="h5"
            >
              Press any key inside each blank <br />
              (insert example automatically)
            </Typography>
            <form className="home__signin">
              <Input
                sx={input__style}
                type="text"
                placeholder="email"
                value={email}
                onChange={() => setEmail("test3@gmail.com")}
              />
              <Input
                sx={input__style}
                type="password"
                placeholder="password"
                value={password}
                onChange={() => setPassword("vancouver")}
              />
              <Button
                sx={input__style}
                type="submit"
                onClick={signInPlayVancouver}
              >
                Sign In
              </Button>
            </form>
          </Box>
        </Modal>
        <Modal
          open={openPlaygroundToronto}
          onClose={() => setOpenPlaygroundToronto(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modal__style}>
            <Typography
              sx={input__title}
              id="modal-modal-title"
              variant="h5"
              component="h5"
            >
              Press any key inside each blank <br />
              (insert example automatically)
            </Typography>
            <form className="home__signin">
              <Input
                sx={input__style}
                type="text"
                placeholder="email"
                value={email}
                onChange={() => setEmail("test2@gmail.com")}
              />
              <Input
                sx={input__style}
                type="password"
                placeholder="password"
                value={password}
                onChange={() => setPassword("toronto")}
              />
              <Button
                sx={input__style}
                type="submit"
                onClick={signInPlayToronto}
              >
                Sign In
              </Button>
            </form>
          </Box>
        </Modal>
      </div>
      <div className="login__box">
        <h1 className="login__title">Cats' community</h1>
        <p>Let's play around with cats' photos</p>
        <div className="login-container">
          <Button
            sx={button__style}
            onClick={() => {
              setOpenSignIn(true);
            }}
          >
            Sign In
          </Button>
          <Button
            sx={button__style}
            onClick={() => {
              setOpen(true);
            }}
          >
            Sign Up
          </Button>
        </div>
        <div className="playground">
          <Button
            sx={button__style__play}
            onClick={() => {
              setOpenPlaygroundVancouver(true);
            }}
          >
            Play as vancouver
          </Button>
          <Button
            sx={button__style__play}
            onClick={() => {
              setOpenPlaygroundToronto(true);
            }}
          >
            Play as toronto
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
