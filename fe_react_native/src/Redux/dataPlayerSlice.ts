import { createSlice } from "@reduxjs/toolkit"; 

type dataPlayerType = {
    dataplayer:[{
        name:string
        avatar:string
        socketId:string
        availableRoom:string
        email:string
    }]
}

const initialState: dataPlayerType = {
    dataplayer:[{
name:"",
avatar:"",
socketId:"",
availableRoom:"",
email:""
    }]
}

const dataPlayerSlice = createSlice({
    name:"dataPlayer",
    initialState,
    reducers:{
        SAVE_PLAYER: (state, action) => {
            state.dataplayer = action.payload
        }
    }
})


export const {SAVE_PLAYER} = dataPlayerSlice.actions
export default dataPlayerSlice.reducer