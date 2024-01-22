import { createSlice} from "@reduxjs/toolkit";

type snapMidtransState = {
    snapMidtrans : string
}


const initialState: snapMidtransState = {
    snapMidtrans: ""

}


const snapMidtransSlice = createSlice({
    initialState,
    name: "snapMidtrans",
    reducers: {
        SAVE_SNAP: (state, action) => {
            state.snapMidtrans = action.payload.redirect_url
        },
        REMOVE_SNAP: (state) => {
            state.snapMidtrans = ""
        }
    }
})

export const {SAVE_SNAP, REMOVE_SNAP} = snapMidtransSlice.actions
export default snapMidtransSlice.reducer