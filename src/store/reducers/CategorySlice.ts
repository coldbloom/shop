import {ICategory} from "@/models/ICategory";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ICategoryState {
    categories: ICategory[];
    isLoading: boolean;
    error: string;
}

const initialState: ICategoryState = {
    categories: [],
    isLoading: false,
    error: '',
}

export const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        categoryFetching(state) {
            state.isLoading = true;
        },
        categoryFetchingSuccess(state, action: PayloadAction<ICategory[]>) {
            state.isLoading = false;
            state.categories = action.payload;
        },
        categoryFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
});

export default categorySlice.reducer