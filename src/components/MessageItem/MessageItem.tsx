import React from "react";
import { IMessage } from "../../types";

const MessageItem: React.FC<IMessage> = ({
  _id,
  author,
  datetime,
  message,
}) => {
  return (
    <div id={_id} className="border bg-light rounded mb-3 ps-5 pt-3 pb-3 pe-3">
      <div className="border-bottom mb-2">
        <span>
          From: <span className="text-primary">{author}</span>
        </span>
        <div>
          <strong> Date: </strong>
          <span>{datetime}</span>
        </div>
      </div>
      <div className="mt-2 text-break">
        <strong>Text of message: </strong>
        {message}
      </div>
    </div>
  );
};

export default MessageItem;
