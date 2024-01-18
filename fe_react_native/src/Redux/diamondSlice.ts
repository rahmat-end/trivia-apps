import { createSlice } from "@reduxjs/toolkit";

type diamondState = {
    diamond:{
        amount: number
        price: string
        dimaond_id: number

    }
}

const initialState: diamondState = {
    diamond:{
        amount: 0,
        price: "",
        dimaond_id: 0
    }
}

const diamondSlice = createSlice({
    name: "diamond",
    initialState,
    reducers: {
        SAVE_DIAMOND: (state, action) => {
            state.diamond.amount = action.payload.amount_diamond
            state.diamond.price = action.payload.price_diamond
            state.diamond.dimaond_id = action.payload.id_diamond
        }
    }
})

export const { SAVE_DIAMOND } = diamondSlice.actions
export default diamondSlice.reducer