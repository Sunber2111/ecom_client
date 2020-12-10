interface IResponseContent {
  time: string;
  username: string;
  content: string;
  _id: string;
}

interface IResponse {
  _id: string;
  contents: IResponseContent[];
}

export interface IComment {
  time: string;
  _id: string;
  username: string;
  content: string;
  rating: number;
  response?: IResponse;
}

export interface IResponseGetAllCommentsById {
  _id: string;
  comments: IComment[];
}

export interface IRequestInsertResponseComment {
  username: string;
  content: string;
}

export interface IValueCommentInsert {
  productId: string;
  username: string;
  content: string;
  rating: number;
}
