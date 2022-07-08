import {LOGIN, LOGOUT, AUTH_LOADING, AUTH_ERROR} from "../types";

const initialState = {
  token: null,
  error: null,
  loading: true,
  firstName: null,
  email: null,
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...action.payload,
        loading: false
      }
    case LOGOUT:
      return {
        ...state,
        token: null,
        loading: false
      }
    case AUTH_LOADING:
      return {
        ...state,
        loading: true
      }
    case AUTH_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    default:
      return state
  }
}