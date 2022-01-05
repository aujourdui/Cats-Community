import React, { useState, useEffect } from "react";
import { Avatar } from "@mui/material";
import { db } from "../../../firebase/firebase";
import { Link } from "react-router-dom";

interface IsidebarChat {
  id: string;
  name: string;
  addNewChat: any | boolean;
}

const SidebarChat = ({ id, name, addNewChat }: IsidebarChat) => {
  const [seed, setSeed] = useState("");
  const [messages, setMessages] = useState("");

  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [id]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter name for chat room");

    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarChat">
        <Avatar
          src={`https://avatars.dicebear.com/api/identicon/${seed}.svg`}
        />
        <div className="sidebarChat__info">
          <h2>{name}</h2>
          <p>{messages[0]?.message}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebarChat" id="sidebarChat__title">
      <h3 className="sidebarChat__add">+ new Chat</h3>
    </div>
  );
};

export default SidebarChat;
