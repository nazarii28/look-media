import axios from "axios";
import {AUTH_ERROR, AUTH_LOADING, LOGIN, LOGOUT} from "../types";
import {errors} from "../../errors";

export const auth = ({email, password, name}) => async dispatch => {

  let response = null

  if(name) {
    try {
      response = await axios.post('/api/auth/registration', {
        email, password, firstName: name
      })
    } catch (e) {
      dispatch(setError(e.response.data.message))
    }
  } else {
    try {
      dispatch(setLoading())
      response = await axios.post('/api/auth/login', {
        email, password,
      })
    } catch (e) {
      dispatch(setError(e.response.data.message))
    }
  }


  const data = response.data

  localStorage.setItem('token', data.token)
  localStorage.setItem('userId', data.userId)

  dispatch(authSuccess({token: data.token, userId: data.userId, firstName: data.firstName, email: data.email}))
}

export const autoLogin = () => dispatch => {
  const token = localStorage.getItem('token')
  const userId = localStorage.getItem('userId')
  if (!token || !userId) {
    dispatch(logout())
  } else {
    dispatch(authSuccess({token, userId}))
    dispatch(getUser(userId))
  }
}

export const getUser = (userId) => async dispatch => {
  dispatch(setLoading())
  const response = await axios.get(`/api/user/${userId}`)
  dispatch(authSuccess(response.data.user))
}

const authSuccess = (payload) => ({
  type: LOGIN,
  payload
})

export const logout = () => dispatch => {
  localStorage.removeItem('token')
  localStorage.removeItem('userId')
  dispatch(logoutActionCreator())
}

const logoutActionCreator = () => ({
  type: LOGOUT
})

const setError = (error) => ({
  type: AUTH_ERROR,
  payload: error
})

const setLoading = () => ({
  type: AUTH_LOADING
})