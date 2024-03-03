import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import Endpoints from "@/api/endpoints";
import {IBrand} from "@/types/IBrand";

export const brandApi = createApi({
    reducerPath: 'brandApi',
    baseQuery: fetchBaseQuery({baseUrl: Endpoints.BASE_URL}),
    endpoints: (builder) => ({
        fetchAllBrands: builder.query<IBrand[], void>({
            query: () => ({
                url: `/brand`
            }),
        }),
    }),
})

export const { useFetchAllBrandsQuery } = brandApi

