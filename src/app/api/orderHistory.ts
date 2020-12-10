

import { IResponseOrderHistory } from "app/models/orderHistory";
import request from "./agent";

const orderHistoryApi = {
  getAllOderHistory :():Promise<IResponseOrderHistory>=> request.get('orders'),
};

export default orderHistoryApi;