import {
  IRequestInsertResponseComment,
  IResponseGetAllCommentsById,
  IValueCommentInsert,
} from "app/models/comment";
import axios, { AxiosResponse } from "axios";

const req = axios.create({
  baseURL: process.env.REACT_APP_CMT_URL as string,
});

const responseBody = (response: AxiosResponse) => response.data;

const commentApi = {
  getAllCommentByProductId: (
    id: string
  ): Promise<IResponseGetAllCommentsById> =>
    req.get(`/comments/${id}`).then(responseBody),
  addNewResponse: (
    productId: string,
    indexRes: number,
    data: IRequestInsertResponseComment
  ) => req.post(`comments/response/${productId}/${indexRes}`, data),
  addNewComment: (data: IValueCommentInsert) => req.post(`/comments`, data),
};

export default commentApi;
