import {configureStore} from "@reduxjs/toolkit";
import authReducer from "../store/features/auth/authSlice";
import { useDispatch } from 'react-redux'

export const store = configureStore({
    reducer: {
        auth: authReducer
    }
})

export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types