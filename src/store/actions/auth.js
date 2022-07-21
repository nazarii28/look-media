import {
  AUTH_ERROR,
  AUTH_LOADING,
  LOGIN,
  LOGOUT,
  UPDATE_USER_DATA,
  UPDATE_USER_DATA_ERROR,
  UPDATE_USER_DATA_SUCCESS
} from "../types";
import {login, register, getUser as apiGetUser, updateUserData} from "../../api/user";

export const auth = ({email, password, name}) => async dispatch => {

  let response = null

  if(name) {
    try {
      response = await register({email, password, firstName: name})
    } catch (e) {
      dispatch(setError(e.response.data.message))
    }
  } else {
    try {
      dispatch(setLoading())
      response = await login({email, password})
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
  const response = await apiGetUser(userId)
  dispatch(authSuccess(response.data.user))
}

export const updateData = (id, values) => async dispatch => {
  dispatch(updateDataCreator())
  try {
    const response = await updateUserData(id, values)
    dispatch(updateSuccess(response.data))
  } catch (e) {
    dispatch(updateError())
  }
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

const updateError = () => ({
  type: UPDATE_USER_DATA_ERROR
})

const updateSuccess = (payload) => ({
  type: UPDATE_USER_DATA_SUCCESS,
  payload
})

const updateDataCreator = () => ({
  type: UPDATE_USER_DATA
})