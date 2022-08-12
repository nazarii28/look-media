import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const songApi = createApi({
    reducerPath: 'songApi',
    baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_BACKEND_URL+'/api/songs'}),
    endpoints: (builder) => ({
        getSongs: builder.query({
            query: () => '/'
        }),
        searchSongs: builder.query({
           query: (query) => `/?q=${query}`
        }),
        addSong: builder.mutation({
            query: (body) => ({
                url: `/`,
                method: 'POST',
                body: body,
            }),
        })
    })
})

export const { useGetSongsQuery, useAddSongMutation, useSearchSongsQuery } = songApi;