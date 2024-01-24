import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import userDataReducer from './dataUserSlice'
import snapMidtransReducer from './snapMidtransSlice'
import dataUserGolangReducer from './dataUserGolangSlice'
import diamondReducer from './diamondSlice'
import dataPlayerReducer from './dataPlayerSlice'
import idRoomReducer from './IdRoomSlice'
import resultScoreReducer from './resultScoreSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    dataUser: userDataReducer,
    snapMidtrans: snapMidtransReducer,
    dataUserGolang: dataUserGolangReducer,
    diamond: diamondReducer,
    dataplayer: dataPlayerReducer,
    idRoom: idRoomReducer,
    resultScore : resultScoreReducer
  
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch