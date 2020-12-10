import { createSlice } from "@reduxjs/toolkit";
import { IPayment } from "app/models/payment";

interface IPaymentState {
    payment: IPayment[];
   
  }
  
const initialState: IPaymentState = {
    payment: [],

 };
  
 const paymentSlice = createSlice({
    name: "payment",
    initialState,
    reducers: {
      
    },
    
  });
  
  const { actions, reducer } = paymentSlice;
  
  export const {  } = actions;
  
  export default reducer;