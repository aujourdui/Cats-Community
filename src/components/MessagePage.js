import React from "react";
import { Link } from "react-router-dom";

const MessagePage = () => (
  <div className="message-container">
    <h1></h1>
    <div className="messages">
      <div className="message1">
        <Link to="/message/1">Message1</Link>
        <p>From user1</p>
      </div>
      <div className="message2">
        <Link to="/message/2">Message2</Link>
        <p>From user2</p>
      </div>
      <div className="message3">
        <Link to="/message/3">Message3</Link>
        <p>From user3</p>
      </div>
    </div>
  </div>
);

export default MessagePage;
