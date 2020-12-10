

import { IRespondPayment,IPayment } from "app/models/payment";
import { ICartItem } from "features/Cart/types/cartItem";
import request from "./agent";

const paymentApi = {
  payment: (data : IPayment, carts : ICartItem[]) : Promise<IRespondPayment> => request.post("/payment",{...data,carts})
};

export default paymentApi;