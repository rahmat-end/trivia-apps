import { createSlice } from "@reduxjs/toolkit";

type dataUserGolangState = {
    user:{
        token: string;
    userid: string;
}}

const initialState: dataUserGolangState = {
    user:{
        token: "",
    userid: "",
}}

const dataUserGolangSlice = createSlice({
    name: "dataUserGolang",
    initialState,
    reducers: {
        SAVE_DATA_USER_GOLANG: (state, action) => {
            state.user.token = action.payload.token
            state.user.userid = action.payload.user_id
        }
    }
})

export const { SAVE_DATA_USER_GOLANG } = dataUserGolangSlice.actions
export default dataUserGolangSlice.reducer