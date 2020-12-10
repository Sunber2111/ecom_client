import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IKey } from ".";
import { IMessage } from "./types/message";

interface IChatState {
  data: IMessage[];
  key: IKey | null;
}

const initialState: IChatState = {
  data: [],
  key: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setkeyId(state, { payload }: PayloadAction<IKey>) {
      state.key = payload;
    },
    insertMessage(state, { payload }: PayloadAction<IMessage>) {
      state.data.push(payload);
    },
  },
});

const { actions, reducer } = chatSlice;

export const { setkeyId, insertMessage } = actions;

export default reducer;
