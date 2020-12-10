// slice cắt
// cắt reducer vs action ( normal // thay doi bth + async action // gọi api)
import { IComment } from "./types/product";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import productApi from "app/api/product";
import { IErrorFromAPI } from "app/models/error";
import { IProductDetail } from "app/models/product";
// gobal state
interface IProductionState {
  products: IProductDetail[];
  isShow: Boolean;
  comments: IComment[];
}

const initialState: IProductionState = {
  comments: [],
  isShow: false,
  products: [],
};

export const fetchAllProduct = createAsyncThunk(
  "product/fetchAllProduct",
  async (None, thunkAPI) => {
    try {
      const data = await productApi.getAllProduct();
      return data.products;
    } catch (error) {
      const err = error as IErrorFromAPI;
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const fetchProductFilter = createAsyncThunk(
  "product/fetchProductFilter",
  async (query: string, thunkAPI) => {
    try {
      const data = await productApi.getProductFilter(query);
      return data.products;
    } catch (error) {
      const err = error as IErrorFromAPI;
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // product/addNewProduct
    addNewProduct(state, { payload }: PayloadAction<IProductDetail>) {
      state.products.push(payload);
    },

    changeShow(state) {
      state.isShow = !state.isShow;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllProduct.fulfilled, (state, { payload }) => {
      state.products = payload;
    });

    builder.addCase(fetchAllProduct.rejected, (state, action) => {
      // if (action.payload) {
      //   // Being that we passed in ValidationErrors to rejectType in `createAsyncThunk`, the payload will be available here.
      //   state.error = action.payload.errorMessage
      // } else {
      //   state.error = action.error.message
      // }
    });

    builder.addCase(fetchProductFilter.fulfilled, (state, { payload }) => {
      state.products = payload;
    });
    builder.addCase(fetchProductFilter.rejected, (state, action) => {});
  },
});

const { actions, reducer } = productSlice;

export const { addNewProduct, changeShow } = actions;

export default reducer;
