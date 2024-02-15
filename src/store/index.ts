import {configureStore} from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';
import authReducer from "../store/features/auth/authSlice";
import categoryReducer from "./reducers/CategorySlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        categoryReducer,
    }
})

export type IRootState = ReturnType<typeof store.getState>; // получаем тип состояния напрямую из самого стора
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve productTypes