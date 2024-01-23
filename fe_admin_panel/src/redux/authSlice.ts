/** @format */

import { createSlice } from "@reduxjs/toolkit";

type authSliceType = {
  token: string;
  userid: number;
  name: string;
};

const initialState: authSliceType = {
  token: "",
  userid: 0,
  name: "",
};

const createAuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SAVE_TOKEN: (_, action) => {
      localStorage.setItem("auth", JSON.stringify(action.payload));
    },
    SAVE_USER: (state, action) => {
      state.token = action.payload.token;
      state.userid = action.payload.user_id;
      state.name = action.payload.name;
    },
    REMOVE_TOKEN: () => {
      localStorage.removeItem("auth");
    },
  },
});
export const { SAVE_TOKEN, SAVE_USER, REMOVE_TOKEN } = createAuthSlice.actions;
export default createAuthSlice.reducer;
