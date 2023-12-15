import {configureStore} from "@reduxjs/toolkit";
import counterReducer from '../store/features/counter/ counterSlice'
import authReducer from "../store/features/auth/authSlice";
import { useDispatch } from 'react-redux'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
})

export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types