import React from "react";
import Header from "../Header";

const MessageItemPage = (props) => {
  const { title, from, content } = props;
  <Header />;
  return (
    <div className="message-item">
      <h1>{title}</h1>
      <h2>From: {from}</h2>
      <p>{content}</p>
    </div>
  );
};

export default MessageItemPage;
