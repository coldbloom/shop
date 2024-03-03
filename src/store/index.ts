import {configureStore} from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';
import authReducer from "../store/features/auth/authSlice";
import categoryReducer from "./reducers/CategorySlice"
import brandReducer from "./reducers/BrandsSlice"
import {sizeApi} from "@/services/sizeService"
import {pokemonApi} from "@/services/PokemonService";
import {brandApi} from "@/services/brandService";
import {categoryApi} from "@/services/categoryService";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        categoryReducer,
        brandReducer,
        [sizeApi.reducerPath]: sizeApi.reducer,
        [pokemonApi.reducerPath]: pokemonApi.reducer,
        [brandApi.reducerPath]: brandApi.reducer,
        [categoryApi.reducerPath]: categoryApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            sizeApi.middleware,
            brandApi.middleware,
            pokemonApi.middleware
        ),
})

export type IRootState = ReturnType<typeof store.getState>; // получаем тип состояния напрямую из самого стора
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve productTypes