import React, { useState, useEffect } from "react";
import Post from "./Post";
import { db, auth } from "./firebase";
import { Modal, Typography, Button, Input, Box } from "@mui/material";

import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import Recommend from "./Recommend";

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
          displayName: usename,
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

  return (
    <div className="home">
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
          <form className="app__signup">
            <Input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" onClick={signUp}>
              Sign Up
            </Button>
          </form>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
        </Box>
      </Modal>
      <Modal
        open={openSignIn}
        onClose={() => setOpenSignIn(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Cat's community
          </Typography>
          <form className="home__signin">
            <Input
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" onClick={signIn}>
              Sign In
            </Button>
          </form>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
        </Box>
      </Modal>
      <div className="header">
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
        </div>
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
      <div className="home__contents">
        <div className="home__contents-left">
          {posts.map(({ id, post }) => {
            <Post
              key={id}
              postId={id}
              user={user}
              username={post.username}
              caption={post.caption}
              imageUrl={post.imageUrl}
            />;
          })}
        </div>
        <div className="home__contents-right">
          <Recommend />
        </div>
        {user?.displayName ? (
          <ImageUpload username={user.displayName} />
        ) : (
          <h3>Sorry you need to login in order to upload</h3>
        )}
      </div>
    </div>
  );
};
export default HomePage;
