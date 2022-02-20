import * as React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import CloseIcon from "@mui/icons-material/Close";
import { db } from "../../../firebase/firebase";

interface IMessages {
  data?: string;
  message?: string;
}

interface Message {
  message: string;
}

const SidebarChat = ({ id, name, addNewChat }) => {
  const [seed, setSeed] = useState<number>();
  const [messages, setMessages] = useState<IMessages[] | Message | string>("");

  const history = useHistory();

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

  const deleteRoom = async () => {
    const deleteDoc = await db
      .collection("rooms")
      .doc(id)
      .collection("messages")
      .get();

    window.confirm("Are you sure to delete?") &&
      (await Promise.all(deleteDoc.docs.map((doc) => doc.ref.delete())));
    await db.collection("rooms").doc(id).delete();
    history.push("/rooms/6LZglK8hpsNRgJodYMKx");
  };

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarChat">
        <Avatar
          src={`https://avatars.dicebear.com/api/identicon/${seed}.svg`}
        />
        {name !== "Greeting Room" && (
          <span className="deleteIcon" onClick={deleteRoom}>
            <CloseIcon />
          </span>
        )}
        <span className="sidebarChat__info">
          <h2>{name}</h2>
          <p>{messages[0]?.message}</p>
        </span>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebarChat" id="sidebarChat__title">
      <h3 className="sidebarChat__add">+ new Chat</h3>
    </div>
  );
};

export default SidebarChat;
