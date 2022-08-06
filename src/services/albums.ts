import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Album} from '../types';

export const albumApi = createApi({
    reducerPath: 'albumApi',
    baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_BACKEND_URL+'/api/albums'}),
    endpoints: (builder) => ({
        getAlbums: builder.query<Album, string>({
            query: () => '/'
        })
    })
})

export const { useGetAlbumsQuery } = albumApi;