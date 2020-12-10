import commentApi from "app/api/comment";
import React, { useEffect, useState } from "react";
import { Comment, Header } from "semantic-ui-react";
import { IComment } from "app/models/comment";
import { FaUserCircle } from "react-icons/fa";
import picAd from "assets/matt.jpg";
import { Rating } from "semantic-ui-react";
import SendCommentBar from "./SendCommentBar";
import { useSelector } from "react-redux";
import { RootState } from "app/store";

interface IProps {
  productID?: string;
}

const CommentPage: React.FC<IProps> = ({ productID }) => {
  const [state, setstate] = useState<IComment[]>([]);

  const isLogin = useSelector((state: RootState) => state.account.isLogin);

  useEffect(() => {
    if (productID) {
      commentApi.getAllCommentByProductId(productID + "").then((res) => {
        setstate(res.comments);
      });
    }
  }, [productID]);

  const splitDate = (date: string) => {
    let data = date.split("T");
    const day = data[0];

    const time = data[1].split(".")[0];

    return day + " " + time;
  };

  const addNewComment = (data: IComment) => {
    setstate([...state, data]);
  };

  return (
    <Comment.Group>
      <Header as="h3" dividing>
        Khách Hàng Nhận Xét
      </Header>
      {state.map((comment) => (
        <Comment>
          <Comment.Avatar as={FaUserCircle} fill="#BCBDBA"></Comment.Avatar>

          <Comment.Content>
            <Comment.Author as="a">{comment.username}</Comment.Author>

            <Comment.Metadata>
              <div>{splitDate(comment.time)}</div>
            </Comment.Metadata>

            <Comment.Text>{comment.content}</Comment.Text>

            <Comment.Actions>
              <Comment.Action>
                <Rating icon="star" rating={comment.rating} maxRating={5} />
              </Comment.Action>
            </Comment.Actions>
          </Comment.Content>
          {comment.response?.contents.map((res) => (
            <Comment.Group>
              <Comment>
                <Comment.Avatar src={picAd} />
                <Comment.Content>
                  <Comment.Author as="a">{res.username}</Comment.Author>
                  <Comment.Metadata>
                    <div>{res.time}</div>
                  </Comment.Metadata>
                  <Comment.Text>{res.content}</Comment.Text>
                </Comment.Content>
              </Comment>
            </Comment.Group>
          ))}
        </Comment>
      ))}

      {isLogin && (
        <SendCommentBar
          handleAddComment={addNewComment}
          productId={productID}
        />
      )}
    </Comment.Group>
  );
};

export default CommentPage;
