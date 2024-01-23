import { createSlice } from "@reduxjs/toolkit";

type IdRoomState = {
    idRoom: string
}

const initialState: IdRoomState = {
    idRoom: ""
}

const idRoomSlice = createSlice({
    name: "idRoom",
    initialState,
    reducers: {
        SAVE_ID_ROOM: (state, action) => {
            state.idRoom = action.payload
        }
    }
})

export const { SAVE_ID_ROOM } = idRoomSlice.actions
export default idRoomSlice.reducer