import commentApi from "app/api/comment";
import { IComment } from "app/models/comment";
import { messageError } from "app/notification/message";
import { RootState } from "app/store";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Form, Rating } from "semantic-ui-react";
import "./styles.scss";

interface IProps {
  productId?: string;
  handleAddComment: (data: IComment) => void;
}

const SendCommentBar: React.FC<IProps> = ({ productId, handleAddComment }) => {
  const [rate, setrate] = useState(5);

  const [content, setContent] = useState("");

  const username = useSelector((state: RootState) => state.account.username);

  const handleClick = async () => {
    if (productId) {
      commentApi
        .addNewComment({
          content,
          productId,
          rating: rate,
          username,
        })
        .then(() => {
          if (productId) {
            let d = new Date();
            const time = d.toISOString();
            handleAddComment({
              _id: "",
              content,
              rating: rate,
              time,
              username,
            });
            setContent("");
            setrate(5);
          }
        })
        .catch(() => {
          messageError("Bình luận thất bại");
        });
    }
  };

  return (
    <Form reply className="mb-5">
      <div>
        <p className="title-rate">Xếp hạng dịch vụ</p>
        <Rating
          icon="star"
          rating={rate}
          onRate={(e, { rating }) => {
            if (rating) {
              try {
                setrate(parseInt(rating + ""));
              } catch (error) {}
            }
          }}
          maxRating={5}
        />
      </div>
      <Form.TextArea
        value={content}
        onChange={(e, { value }) => {
          setContent(value + "");
        }}
      />
      <Button
        onClick={(e) => handleClick()}
        floated="right"
        content="Gửi bình luận"
        labelPosition="left"
        icon="edit"
        primary
      />
    </Form>
  );
};

export default React.memo(SendCommentBar);
