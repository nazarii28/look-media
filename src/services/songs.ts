import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const songApi = createApi({
    reducerPath: 'songApi',
    baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_BACKEND_URL+'/api/songs'}),
    endpoints: (builder) => ({
        getSongs: builder.query({
            query: () => '/'
        })
    })
})

export const { useGetSongsQuery } = songApi;