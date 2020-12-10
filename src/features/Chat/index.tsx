import React, { useEffect, useState } from "react";
import "./styles.scss";
import { FaFacebookMessenger } from "react-icons/fa";
import ContentChat from "./components/ContentChat";
import SendBar from "./components/SendBar";
import { createConnectiontChat } from "app/api/chat";

export interface IKey {
  roomId: string;
  clientId: string;
}

export interface IRecive {
  content: string;
}

const Chat = () => {
  const [isOpen, setisOpen] = useState(false);

  useEffect(() => {
    createConnectiontChat();
  }, []);

  return (
    <>
      <div className={isOpen ? "chat chat-open" : "chat"}>
        {isOpen && <ContentChat />}
        <FaFacebookMessenger onClick={(e) => setisOpen(!isOpen)} />
      </div>
      {isOpen && <SendBar />}
    </>
  );
};

export default React.memo(Chat);
