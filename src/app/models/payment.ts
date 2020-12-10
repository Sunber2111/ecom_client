import { ICartItem } from "features/Cart/types/cartItem";

export interface IPayment{
    email : string,
    totalPrice : number,

    estimatedDelivery : Date

}

export interface IRespondPayment {
    client_secret: string
}