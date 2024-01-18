import { createSlice } from "@reduxjs/toolkit";

type userState = {
  user:{
    email: string;
    name: string;

  }
};

const initialState: userState = {
  user: {
    email: "",
    name: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    SIGNIN_USER: (state, action) => {
      state.user.email = action.payload.email;
      state.user.name = action.payload.name;
    },
  },
});

export const { SIGNIN_USER } = userSlice.actions;
export default userSlice.reducer;
