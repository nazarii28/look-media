import {ADD_SONG_SUCCESS, FETCH_SONGS, FETCH_SONGS_ERROR, FETCH_SONGS_SUCCESS, SET_SONGS_PAGE} from "../types";

const initialState = {
  songs: [],
  loading: false,
  error: null
}

export const songsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_SONGS:
      return {
        ...state,
        loading: true
      }
    case ADD_SONG_SUCCESS:
      return {
        ...state,
        loading: false
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
    default:
      return state
  }
}