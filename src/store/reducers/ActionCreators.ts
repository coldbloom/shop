import {AppDispatch} from "@/store";
import axios from "axios";
import Endpoints from "@/api/endpoints";
import {ICategory} from "@/types/ICategory";
import {IBrand} from "@/types/IBrand"
import {categorySlice} from "./CategorySlice";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchCategories = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(categorySlice.actions.categoryFetching())
        const response = await axios.get<ICategory[]>(Endpoints.PUBLIC.CATEGORY)
        dispatch(categorySlice.actions.categoryFetchingSuccess(response.data))
    } catch (e: any) {
        dispatch(categorySlice.actions.categoryFetchingError(e.message))
    }
}

// вариант с extrareducers
export const fetchBrands = createAsyncThunk(
    'brands/fetchAll',
    async(_, thunkApi) => {
        try {
            const response = await axios.get<IBrand[]>(Endpoints.BRAND)
            return response.data;
        } catch (e) {
            return thunkApi.rejectWithValue("Не удалось загрузить бренды товаров")
        }
    }
)

