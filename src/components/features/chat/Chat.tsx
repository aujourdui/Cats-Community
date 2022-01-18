import React from "react";
import { useState, useEffect } from "react";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import { useParams } from "react-router-dom";
import { db, auth } from "../../../firebase/firebase";
import * as firebase from "firebase/app";
import { useStateValue } from "../../../context/StateProvider";
import { useHistory } from "react-router-dom";
import { actionTypes } from "../../../reducers/reducer";

const Chat = () => {
  const [input, setInput] = useState("");
  const [seed, setSeed] = useState<number>();
  const { roomId } = useParams<any>();
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);
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
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));

      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [roomId]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, [roomId]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (roomName) {
      console.log("You typed >>> ", input);

      db.collection("rooms").doc(roomId).collection("messages").add({
        message: input,
        name: user.displayName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setInput("");
    } else {
      alert("please add new chat first");
      setInput("");
    }
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar
          src={`https://avatars.dicebear.com/api/identicon/${seed}.svg`}
        />

        <div className="chat__headerInfo">
          {roomName ? (
            <h3>{roomName}</h3>
          ) : (
            <h3>Empty: Please go to any Chat or add a new Chat</h3>
          )}
          <p>
            last seen{" "}
            {new Date(
              messages[messages.length - 1]?.timestamp?.toDate()
            ).toUTCString()}
          </p>
        </div>

        <div className="chat__headerRight"></div>
      </div>
      <div className="chat__body">
        {messages.map((message, index) => (
          <p
            key={index}
            className={`chat__message ${
              message.name === user.displayName && "chat__receiver"
            }`}
          >
            <div className="chat__name">{message.name}</div>
            {message.message}
            <div className="chat__timestamp">
              {new Date(message.timestamp?.toDate()).toUTCString()}
            </div>
          </p>
        ))}
      </div>
      <div className="chat__footer">
        <form>
          <input
            placeholder="Type a message"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <IconButton
            className="iconButton__send"
            onClick={sendMessage}
            type="submit"
          >
            <SendIcon />
          </IconButton>
          <button
            onClick={() => alert("Please add a new chat")}
            type="submit"
            className="alertButton__send"
          ></button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
