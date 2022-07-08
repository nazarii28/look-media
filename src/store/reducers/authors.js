import {AUTHORS_ERROR, AUTHORS_LOADING, SET_AUTHOR, SET_AUTHORS} from "../types";

const initialState = {
  loading: false,
  authors: [],
  error: null,
  currentAuthor: null
}

export const authorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHORS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case SET_AUTHORS:
      return {
        ...state,
        loading: false,
        authors: action.payload
      }
    case SET_AUTHOR:
      return {
        ...state,
        loading: false,
        currentAuthor: action.payload
      }
    case AUTHORS_LOADING:
      return {
        ...state,
        loading: true
      }
    default :
      return state
  }
}