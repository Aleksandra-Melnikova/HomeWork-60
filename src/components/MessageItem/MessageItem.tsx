import React from "react";

interface IProps {
  id: string;
  number: number;
  author: string;
  date: string;
  message: string;
}

const MessageItem: React.FC<IProps> = ({
  id,
  number,
  author,
  date,
  message,
}) => {
  return (
    <div id={id} className="border bg-light rounded mb-3 ps-5 pt-3 pb-3 pe-3">
      <div className="border-bottom mb-2">
        Message № ${number}{" "}
        <span>
          from: <span className="text-primary">${author}</span>
        </span>
        <div>
          <strong> Date: </strong>
          <span>${date}</span>
        </div>
      </div>
      <div className="mt-2 text-break">
        <strong>Text of message: </strong>${message}
      </div>
    </div>
  );
};

export default MessageItem;
