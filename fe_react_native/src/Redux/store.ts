import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import userDataReducer from './dataUserSlice'
import snapMidtransReducer from './snapMidtransSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    dataUser: userDataReducer,
    snapMidtrans: snapMidtransReducer
  
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch