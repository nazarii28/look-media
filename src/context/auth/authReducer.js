import {ERROR, LOADING, LOGIN, LOGOUT} from "../types";

export const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.token,
        loading: false
      }
    case LOGOUT:
      return {
        ...state,
        token: null,
        loading: false
      }
    case LOADING:
      return {
        ...state,
        loading: true
      }
    case ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      }
    default:
      return state
  }
}