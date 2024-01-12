import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

type dataUserState = {
    dataUser: {
        token: string;
        userid: string;
      
    };
};

const initialState: dataUserState = {
    dataUser: {
        token: "",
        userid: "",
    }
}

const dataUserSlice =createSlice ({
    initialState,
    name:"dataUser",
    reducers:{
        SAVE_USER: (state, action) => {        
            state.dataUser.token = action.payload.token
            state.dataUser.userid = action.payload.user
            
           
        },
        SAVEUSER_ASYNCSTORE: (state, action) => {
            AsyncStorage.setItem("dataUser", JSON.stringify(action.payload));
        },
        REMOVE_ASYNCSTORE: (action) => {
            AsyncStorage.removeItem("dataUser");
        },
        REMOVE_DATAUSER: (state) => {
            state.dataUser.token = ""
            state.dataUser.userid = ""
            
        }
    }
})

export const {SAVE_USER, SAVEUSER_ASYNCSTORE, REMOVE_ASYNCSTORE, REMOVE_DATAUSER} = dataUserSlice.actions
export default dataUserSlice.reducer