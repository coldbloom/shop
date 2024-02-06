import {AppDispatch} from "@/store";
import axios from "axios";
import Endpoints from "@/api/endpoints";
import {ICategory} from "@/models/ICategory";
import {categorySlice} from "./CategorySlice";

export const fetchCategories = async (dispatch: AppDispatch) => {
    try {
        dispatch(categorySlice.actions.categoryFetching())
        const response = await axios.get<ICategory[]>(Endpoints.PUBLIC.CATEGORY)
        dispatch(categorySlice.actions.categoryFetchingSuccess(response.data))
    } catch (e) {
        dispatch((categorySlice.actions.categoryFetchingError('Произошла ошибка загрузки категорий товаров')))
    }
}