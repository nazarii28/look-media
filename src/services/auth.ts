import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const authApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_BACKEND_URL + '/api',
    }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: 'auth/login',
                method: 'POST',
                body: credentials,
            }),
        }),
        register: builder.mutation({
            query: (credentials) => ({
                url: 'auth/registration',
                method: 'POST',
                body: credentials,
            }),
        }),
        getUser: builder.query({
            query: (id) => `/user/${id}`
        }),
        updateUserData: builder.mutation({
            query: ({id, ...body}) => ({
                url: `/user/${id}`,
                method: 'POST',
                body: body,
            }),
        }),
        updateAvatar: builder.mutation({
            query: ({id, image}) => {
                const formData = new FormData();
                formData.append('avatar', image)
                return {
                    url: `/user/${id}/update-avatar`,
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            }
        })
    }),
})

export const { useLoginMutation, useRegisterMutation, useGetUserQuery, useUpdateUserDataMutation, useUpdateAvatarMutation } = authApi
