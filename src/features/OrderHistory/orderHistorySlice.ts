import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import orderHistoryApi from "app/api/orderHistory";
import { IErrorFromAPI } from "app/models/error";
import { IProductOrderHistory } from "app/models/orderHistory";


// gobal state
interface IOderHistoryState {
    orders: IProductOrderHistory[];
  }
  
const initialState: IOderHistoryState = {
  orders: [],
};

export const fetchAllOderHistory = createAsyncThunk(
    "orderHistory/fetchAllOderHistory",
    async (None,thunkAPI) => {
      try {
         const data = await orderHistoryApi.getAllOderHistory()
         console.log(data);
         // data là 
         return data.orders;
      } catch (error) {
        const err = error as IErrorFromAPI;
        return thunkAPI.rejectWithValue(err)
      }
    }
  );
  
  
const orderHistorySlice = createSlice({
    name: "orderHistory",
    initialState,
    reducers: {
      addNewProductOrderHistory(state, { payload }: PayloadAction<IProductOrderHistory>) {
        state.orders.push(payload);
      },
    },
    extraReducers: (builder) => {
      builder.addCase(fetchAllOderHistory.fulfilled, (state, {payload}) => {
          state.orders = payload
      });
  
      builder.addCase(fetchAllOderHistory.rejected, (state, action) => {
      
      });
    },
  });
  
  const { actions, reducer } = orderHistorySlice;
  
  export const { addNewProductOrderHistory } = actions;
  
  export default reducer;