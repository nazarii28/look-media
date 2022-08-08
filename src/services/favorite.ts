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
    endpoints: (builder) => ({
        getFavoriteSongs: builder.query({
            query: () => '/songs'
        })
    })
})

export const { useGetFavoriteSongsQuery } = favoriteApi;