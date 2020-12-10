import React, { useState } from "react";
import { Input } from "semantic-ui-react";
import { sendMessage } from "app/api/chat";
import { RootState } from "app/store";
import { useSelector } from "react-redux";

const SendBar: React.FC = () => {
  const [state, setstate] = useState("");

  const key = useSelector((state: RootState) => state.chat.key);

  return (
    <div className="send-bar">
      <Input
        value={state}
        className="w-100"
        placeholder="Nhập nội dung"
        onChange={(e, { value }) => {
          setstate(value);
        }}
        tabIndex={0}
        onKeyPress={(e: any) => {
          if (e.key === "Enter") {
            if (key) {
              sendMessage(state, key.clientId, key.roomId);
            }
            setstate("");
          }
        }}
      />
    </div>
  );
};

export default SendBar;
