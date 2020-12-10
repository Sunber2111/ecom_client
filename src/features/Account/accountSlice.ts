import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import accountApi from "app/api/account";
import addressApi from "app/api/address";
import { ILoginForm, INewUser, IResponseUser } from "app/models/account";
import { IAddress } from "app/models/address";
import { IErrorFromAPI } from "app/models/error";
import { messageSuccess, messageError } from "app/notification/message";
import { AppDispatch, AppThunk } from "app/store";

import { ILogin } from "./types/account";

interface ILoginState {
  accounts: ILogin | null;
  isLogin: boolean;
  email: string;
  username: string;
  addresses: IAddress[];
  defalutAddress: IAddress | null;
}

const initialState: ILoginState = {
  accounts: null,
  isLogin: false,
  email: "",
  username: "",
  addresses: [],
  defalutAddress: null,
};

export const login = createAsyncThunk(
  "account/login",
  async (accounts: ILoginForm, thunkAPI) => {
    try {
      const res = await accountApi.login(accounts);
      messageSuccess("Đăng nhập thành công", 3000);
      return res;
    } catch (error) {
      const err = error as IErrorFromAPI;
      messageError("Sai tài khoản hoặc mật khẩu", 2000);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const register = createAsyncThunk(
  "account/resgiter",
  async (newUser: INewUser, thunkAPI) => {
    try {
      const res = await accountApi.register(newUser);

      return res;
    } catch (error) {
      const err = error as IErrorFromAPI;
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const fetchAllAddress = (): AppThunk => async (
  dispatch: AppDispatch
) => {
  try {
    const res = await addressApi.getAddress();
    dispatch(setAddress(res.addresses));
  } catch {}
};

export const insertNewAddress = (newAddress: IAddress): AppThunk => async (
  dispatch: AppDispatch
) => {
  try {
    await addressApi.addNewAddress(newAddress);
    dispatch(addNewAddress(newAddress));
  } catch {}
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setAddress(state, { payload }: PayloadAction<IAddress[]>) {
      state.addresses = payload;
    },
    setLoginSuccess(state, { payload }: PayloadAction<IResponseUser>) {
      state.isLogin = true;
      state.username = payload.user.username;
      state.email = payload.user.email;
      state.defalutAddress = payload.user.address;
    },
    addNewAddress(state, { payload }: PayloadAction<IAddress>) {
      state.addresses.push(payload);
    },
    logout: (state) => {
      window.localStorage.removeItem("jwt");

      state.accounts = null;
      state.isLogin = false;
      state.email = "";
      state.username = "";
      state.addresses = [];
      state.defalutAddress = null;
    },
    setDefaultAddress(state, { payload }: PayloadAction<IAddress>) {
      state.defalutAddress = payload;
    },
    deleteAddress(state, { payload }: PayloadAction<number>) {
      state.addresses.splice(payload, 1);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      window.localStorage.setItem("jwt", payload.token);
      console.log(payload.address);

      state.isLogin = true;
      state.username = payload.username;
      state.defalutAddress = payload.address;
    });

    builder.addCase(login.rejected, (state, action) => {});
  },
});

const { actions, reducer } = accountSlice;

export const {
  addNewAddress,
  setLoginSuccess,
  setAddress,
  logout,
  setDefaultAddress,
  deleteAddress
} = actions;

export default reducer;
