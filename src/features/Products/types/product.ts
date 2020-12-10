

export interface IComment {
  id: string;
  content: string;
  userSendId: string;
  imageUserSend: string;
  userSendName: string;
  timeSend: Date;
}

export interface IProductFilter {
  id?: string;
  price?: string;
  colors?: string[];
}
