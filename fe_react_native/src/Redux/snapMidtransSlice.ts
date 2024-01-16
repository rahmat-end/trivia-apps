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
        }
    }
})

export const {SAVE_SNAP} = snapMidtransSlice.actions
export default snapMidtransSlice.reducer