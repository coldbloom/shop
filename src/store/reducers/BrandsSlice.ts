import {IBrand} from "@/types/IBrand";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchBrands} from "@/store/reducers/ActionCreators";

interface IBrandsState {
    brands: IBrand[];
    isLoading: boolean;
    error: string;
}

const initialState: IBrandsState = {
    brands: [],
    isLoading: false,
    error: '',
}

export const brandsSlice = createSlice({
    name: 'brands',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchBrands.fulfilled.type]: (state, action: PayloadAction<IBrand[]>) => {
            state.isLoading = false;
            state.error = '';
            state.brands = action.payload;
        },
        [fetchBrands.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchBrands.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        }
    }
});

export default brandsSlice.reducer