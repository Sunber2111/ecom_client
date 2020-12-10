import React from "react";
import { Comment } from "semantic-ui-react";
import { IMessage } from "../types/message";

const ChatItem: React.FC<{ data: IMessage }> = ({ data }) => {
  return (
    <>
      {data.isSend ? (
        <div className="chat-item">
          <div className="ml-auto my-content">{data.content}</div>
        </div>
      ) : (
       <Comment.Group>
          <Comment>
          <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
          <Comment.Content>
            <Comment.Author as="a">Quản lý trang</Comment.Author>
            <Comment.Metadata>
              <div>5:42PM</div>
            </Comment.Metadata>
            <Comment.Text>{data.content}</Comment.Text>
          </Comment.Content>
        </Comment>
       </Comment.Group>
      )}
    </>
  );
};

export default ChatItem;
