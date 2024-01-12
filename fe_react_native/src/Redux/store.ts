import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import userDataReducer from './dataUserSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    dataUser: userDataReducer
  
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch