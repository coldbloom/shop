import {ICategory} from "@/types/ICategory"
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import Endpoints from "@/api/endpoints";

export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    baseQuery: fetchBaseQuery({baseUrl: Endpoints.BASE_URL}),
    endpoints: (builder => ({
        fetchAllCategories: builder.query<ICategory, void>({
            query: () => ({
                url: `/category`
            })
        })
    }))
})

export const {useFetchAllCategoriesQuery} = categoryApi