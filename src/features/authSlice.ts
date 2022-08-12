import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    userId: null,
    token: null,
    error: null,
    loading: true,
    firstName: null,
    lastName: null,
    email: null,
    city: null,
    company: null,
    country: null,
    updateLoading: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserData: (state, {payload: {firstName, email, lastName, city, company, country}}) => {
            state.firstName = firstName
            state.lastName = lastName
            state.email = email
            state.city = city
            state.company = company
            state.country = country
        },
        setCredentials: (
            state,
            { payload: { userId, token } }
        ) => {
            state.userId = userId
            state.token = token
            localStorage.setItem('token', token)
            localStorage.setItem('userId', userId)

        },
        setError: (state, action) => {
            state.error = action.payload
        },
        autoLogin: (state) => {
            const token = localStorage.getItem('token')
            const userId = localStorage.getItem('userId')
            if (!token || !userId) {
                state.userId = null
                state.token = null
            } else {
                state.userId = userId
                state.token = token
            }
            state.loading = false
        },
        logout: (state) => {
            state.userId = null
            state.token = null
            localStorage.removeItem('token')
            localStorage.removeItem('userId')
        }
    }
})

export default authSlice.reducer

export const { setCredentials, setError, autoLogin, logout, setUserData } = authSlice.actions