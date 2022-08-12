import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const rawBaseQuery = fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_BACKEND_URL}/api/user/`,
})

const dynamicBaseQuery = async (args, api, extraOptions) => {
    const userId = api.getState().auth.userId
    const urlEnd = typeof args === 'string' ? args : args.url
    const adjustedUrl = `${userId}/favorite${urlEnd}`
    const adjustedArgs =
        typeof args === 'string' ? adjustedUrl : { ...args, url: adjustedUrl }

    return rawBaseQuery(adjustedArgs, api, extraOptions)
}

export const favoriteApi = createApi({
    reducerPath: 'favoriteApi',
    baseQuery: dynamicBaseQuery,
    tagTypes: ['FavoriteSong', 'FavoriteAuthor'],
    endpoints: (builder) => ({
        getFavoriteSongs: builder.query({
            providesTags: ['FavoriteSong'],
            query: () => ({
                url: '/songs',
            })
        }),
        addFavoriteSong: builder.mutation({
            query: (songId) => ({
                url: '/songs',
                method: 'POST',
                body: {
                    songId
                }
            }),
            invalidatesTags: ['FavoriteSong'],
        }),
        removeFavoriteSong: builder.mutation({
            query: (songId) => ({
                url: `/songs/${songId}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['FavoriteSong'],
        }),
        getFavoriteAuthors: builder.query({
            providesTags: ['FavoriteAuthor'],
            query: () => ({
                url: '/authors',
            })
        }),
        addFavoriteAuthor: builder.mutation({
            query: (authorId) => ({
                url: '/authors',
                method: 'POST',
                body: {
                    authorId
                }
            }),
            invalidatesTags: ['FavoriteAuthor'],
        }),
        removeFavoriteAuthor: builder.mutation({
            query: (authorId) => ({
                url: `/authors/${authorId}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['FavoriteAuthor'],
        })
    })
})

export const {
        useGetFavoriteSongsQuery,
        useAddFavoriteSongMutation,
        useRemoveFavoriteSongMutation,
        useGetFavoriteAuthorsQuery,
        useAddFavoriteAuthorMutation,
        useRemoveFavoriteAuthorMutation
    } = favoriteApi;