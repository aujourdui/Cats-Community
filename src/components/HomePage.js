import React, { useState, useEffect } from "react";
import Post from "./Post";
import { db, auth } from "./firebase";
// import { Modal, Typography, Button, Input, Box } from "@mui/material";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import Recommend from "./Recommend";
import Header from "./Header";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [username, setUsername] = useState("");
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

  return (
    <div className="home">
      {/* </ThemeProvider> */}
      <Header />
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
        <div className="home__contents-right">{/* <Recommend /> */}</div>
      </div>
    </div>
  );
};
export default HomePage;
