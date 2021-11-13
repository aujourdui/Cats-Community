import React from "react";

const MessageItemPage = (props) => {
  const { title, from, content } = props;
  return (
    <div className="message-item">
      <h1>{title}</h1>
      <h2>From: {from}</h2>
      <p>{content}</p>
    </div>
  );
};

export default MessageItemPage;
