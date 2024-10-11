import React from "react";

interface IProps {
  _id: string;
  number: number;
  author: string;
  datetime: string;
  message: string;
}

const MessageItem: React.FC<IProps> = ({
  _id,
  number,
  author,
  datetime,
  message,
}) => {
  return (
    <div id={_id} className="border bg-light rounded mb-3 ps-5 pt-3 pb-3 pe-3">
      <div className="border-bottom mb-2">
        Message № {number}{" "}
        <span>
          from: <span className="text-primary">${author}</span>
        </span>
        <div>
          <strong> Date: </strong>
          <span>{datetime}</span>
        </div>
      </div>
      <div className="mt-2 text-break">
        <strong>Text of message: </strong>{message}
      </div>
    </div>
  );
};

export default MessageItem;
