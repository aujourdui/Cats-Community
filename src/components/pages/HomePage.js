import React, { useState, useEffect } from "react";
import Post from "../features/Post";
import { db, auth } from "../../firebase/firebase";
import Header from "../common/Header";
import { useHistory } from "react-router-dom";
import { actionTypes } from "../../reducers/reducer";
import { useStateValue } from "../../context/StateProvider";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  const history = useHistory();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        });
      } else {
        alert("something wrong");
        history.push("/");
      }
    });

    return () => {
      unsubscribe();
    };
  }, [user]);

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
      <Header user={user} />
      <div className="home__contents">
        <div className="home__contents-left">
          {posts.map(({ id, post }) => (
            <Post
              key={id}
              postId={id}
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
