import { createSlice } from "@reduxjs/toolkit";

type resultScoreType = {
    users: any
    iswinner: boolean
}

const initialState: resultScoreType = {
    users: [],
    iswinner: false
}

const resultScoreSlice = createSlice({
    name: "resultScore",
    initialState,
    reducers: {
        SAVE_RESULT_SCORE: (state, action) => {
            state.users = action.payload
        },
        SAVE_WINNER_VALUE: (state, action) => {
            state.iswinner = action.payload
        }
    }
})

export const { SAVE_RESULT_SCORE, SAVE_WINNER_VALUE } = resultScoreSlice.actions
export default resultScoreSlice.reducer