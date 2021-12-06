import React, { useState, useEffect } from "react";
import { db, auth } from "./firebase";
import { Modal, Typography, Button, Input, Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Recommend from "./Recommend";
import Header from "./Header";

const LoginPage = () => {
  const [open, setOpen] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // console.log(authUser);
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [user, username]);

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
    fontSize: "1.2rem",
  };

  return (
    <div className="login">
      <div className="home">
        {/* <ThemeProvider theme={theme}> */}
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
            {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          </Box>
        </Modal>
        {/* </ThemeProvider> */}
        {/* <ThemeProvider theme={theme}> */}
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
            {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          </Box>
        </Modal>
      </div>
      <div className="login__box">
        <h1 className="login__title">Cat's community</h1>
        <p>Let's play around with cat's photos</p>
        <div className="login-container">
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
        <Link to="/home">Play ground</Link>
      </div>
    </div>
  );
};

export default LoginPage;
