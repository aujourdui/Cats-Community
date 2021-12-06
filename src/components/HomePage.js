import React, { useState, useEffect } from "react";
import Post from "./Post";
import { db, auth } from "./firebase";
import { Modal, Typography, Button, Input, Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Recommend from "./Recommend";
import Header from "./Header";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
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

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            post: doc.data(),
          }))
        );
      });
  }, []);

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

  const style = {
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

  return (
    <div className="home">
      {/* <ThemeProvider theme={theme}> */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
        <Box sx={style}>
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
      {/* </ThemeProvider> */}
      <div className="home__header">
        <Header
          setOpenSignIn={setOpenSignIn}
          setOpen={setOpen}
          auth={auth}
          user={user}
          input__style={input__style}
        />
      </div>
      <div className="home__contents">
        <div className="home__contents-left">
          {posts.map(({ id, post }) => (
            <Post
              key={id}
              postId={id}
              user={user}
              username={post.username}
              caption={post.caption}
              imageUrl={post.imageUrl}
            />
          ))}
        </div>
        <div className="home__contents-right">
          <Recommend />
        </div>
      </div>

      {/* {user?.displayName ? (
        <ImageUpload username={user.displayName} />
      ) : (
        <h3>Sorry you need to login in order to upload</h3>
      )} */}
    </div>
  );
};
export default HomePage;
