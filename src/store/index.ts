import {configureStore} from "@reduxjs/toolkit";
import counterReducer from '../store/features/counter/ counterSlice'
import authReducer from "../store/features/auth/authSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
})

export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;