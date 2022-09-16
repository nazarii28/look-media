import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Author} from '../types';

export const authorApi = createApi({
    reducerPath: 'authorApi',
    baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_BACKEND_URL+'/api/authors'}),
    endpoints: (builder) => ({
        getAuthors: builder.query<{authors: Author[]}, void>({
            query: () => '/'
        }),
        getAuthor: builder.query<{author: Author}, string>({
            query: (id) => `/${id}`
        })
    })
})

export const { useGetAuthorsQuery, useGetAuthorQuery } = authorApi;