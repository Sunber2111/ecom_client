import { RootState } from "app/store";
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { IMessage } from "../types/message";
import ChatItem from "./ChatItem";

const ContentChat: React.FC = () => {
  const data = useSelector((state: RootState) => state.chat.data);

  let messagesEndRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const scrollToBottom = () => {
    messagesEndRef!.current!.scrollIntoView();
  };

  useEffect(() => {
    scrollToBottom();
  }, [messagesEndRef, scrollToBottom]);

  return (
    <div className="chat-list">
      {data.map((value) => (
        <ChatItem data={value} />
      ))}
      <div id={"messagesEndRef"} ref={messagesEndRef} />
    </div>
  );
};

export default ContentChat;
