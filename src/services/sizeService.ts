import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import Endpoints from "@/api/endpoints"
import {ISize} from '@/types/ISize'

export const sizeApi = createApi({
    reducerPath: 'sizeApi',
    baseQuery: fetchBaseQuery({baseUrl: Endpoints.BASE_URL}),
    endpoints: (builder) => ({
        fetchAllSizes: builder.query<ISize[], void>({
            query: () => ({
                url: `/size`
            })
        })
    })
})

export const { useFetchAllSizesQuery } = sizeApi