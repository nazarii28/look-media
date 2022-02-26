import {ERROR, LOGIN, LOGOUT} from "../types";

export const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.token
      }
    case LOGOUT:
      return {
        ...state,
        token: null
      }
    case ERROR:
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}