import {
  LOGIN,
  LOGOUT,
  AUTH_LOADING,
  AUTH_ERROR,
  UPDATE_USER_DATA,
  UPDATE_USER_DATA_SUCCESS,
  DELETE_USER_AVATAR_SUCCESS, UPDATE_USER_AVATAR_SUCCESS
} from "../types";

const initialState = {
  token: null,
  error: null,
  loading: true,
  firstName: null,
  email: null,
  updateLoading: false,
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
    case UPDATE_USER_DATA:
      return {
        ...state,
        updateLoading: true
      }
    case UPDATE_USER_DATA_SUCCESS:
      return {
        ...state,
        ...action.payload,
        updateLoading: false,
      }
    case UPDATE_USER_AVATAR_SUCCESS:
      return {
        ...state,
        avatar: action.payload
      }
    case DELETE_USER_AVATAR_SUCCESS:
      return {
        ...state,
        avatar: null
      }
    default:
      return state
  }
}