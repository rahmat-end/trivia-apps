import { createSlice } from "@reduxjs/toolkit";


type userState = {
  user: {
    displayName: string;
    email: string;
    photoURL: string;
    token: string;
  };
}

const initialState: userState = {
  user: {
    displayName:"",
    email:"",
    photoURL:"",
    token:"",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    SAVE_TOKEN: (state, action) => {
      state.user.token = action.payload;

    },
    SIGNIN_USER: (state, action) => {
      state.user.displayName = action.payload.displayName;
      state.user.email = action.payload.email;
      state.user.photoURL = action.payload.photoURL;
    },

    LOGOUT: (state) => {
      state.user.displayName = "";
      state.user.email = "";
      state.user.photoURL = "";
      state.user.token = "";
    },
  },
});

export const { SIGNIN_USER, SAVE_TOKEN, LOGOUT } = userSlice.actions;
export default userSlice.reducer;
