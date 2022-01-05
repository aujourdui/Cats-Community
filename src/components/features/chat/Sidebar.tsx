import React, { useState, useEffect } from "react";
import { Avatar } from "@mui/material";
import { db } from "../../../firebase/firebase";

import SidebarChat from "./SidebarChat";
import { useStateValue } from "../../../context/StateProvider";

interface Irooms {
  id: string;
  data: any;
}

const Sidebar = () => {
  const [rooms, setRooms] = useState<Irooms[]>([]);
  const { user } = useStateValue();

  useEffect(() => {
    const unsubscribe = db.collection("rooms").onSnapshot((snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar>U</Avatar>
        <h3 className="sidebar__username">{user?.displayName}</h3>
      </div>
      <div className="sidebar__messages">
        <SidebarChat addNewChat id={""} name={""} />
        {rooms.map((room) => (
          <SidebarChat
            key={room.id}
            id={room.id}
            name={room.data.name}
            addNewChat={undefined}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
