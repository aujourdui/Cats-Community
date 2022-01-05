import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import firebase from "firebase";
import { db } from "../../firebase/firebase";
import { useStateValue } from "../../context/StateProvider";

interface IPost {
  key: string;
  postId: string;
  username: string;
  caption: string;
  imageUrl: string;
}

const Post = ({ postId, username, caption, imageUrl }: IPost) => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const { user } = useStateValue();

  useEffect(() => {
    let unsubscribe: any;
    if (postId) {
      unsubscribe = db
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }

    return () => {
      unsubscribe();
    };
  }, [postId]);

  const postComment = (event) => {
    event.preventDefault();

    db.collection("posts").doc(postId).collection("comments").add({
      text: comment,
      username: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setComment("");
  };

  return (
    <div className="post">
      <div className="post__header">
        <Avatar className="post__avatar">U</Avatar>
        <h3>{username}</h3>
      </div>
      <img className="post__image" src={imageUrl} alt="" />

      <h4 className="post__text">
        <strong>{username}: </strong>
        {caption}
      </h4>

      <div className="post__comments">
        {comments.map((comment, index) => (
          <p key={index}>
            <strong>{comment.username}</strong>: {comment.text}
          </p>
        ))}
      </div>

      {user && (
        <form className="post__comment-box">
          <input
            className="post__input"
            type="text"
            placeholder="Add a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            className="post__button"
            disabled={!comment}
            onClick={postComment}
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
};

export default Post;
