import {FETCH_SONGS, FETCH_SONGS_ERROR, FETCH_SONGS_SUCCESS, SET_SONGS_PAGE} from "../types";

export const songsReducer = (state, action) => {
  switch (action.type) {
    case FETCH_SONGS:
      return {
        ...state,
        loading: true
      }
    case FETCH_SONGS_SUCCESS:
      return {
        ...state,
        loading: false,
        songs: action.payload
      }
    case FETCH_SONGS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case SET_SONGS_PAGE:
      return {
        ...state,
        page: action.payload
      }
    default:
      return {
        ...state
      }
  }
}