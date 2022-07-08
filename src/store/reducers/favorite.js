import {
  ADD_FAVORITE_AUTHOR,
  ADD_FAVORITE_SONG,
  REMOVE_FAVORITE_AUTHOR,
  REMOVE_FAVORITE_SONG,
  SET_FAVORITE_AUTHORS,
  SET_FAVORITE_SONGS
} from "../types";

const initialState = {
  favoriteSongs: [],
  favoriteAuthors: []
}

export const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FAVORITE_SONGS:
      return {
        ...state,
        favoriteSongs: action.payload
      }
    case REMOVE_FAVORITE_SONG:
      return {
        ...state,
        favoriteSongs: state.favoriteSongs.filter((item) => item._id !== action.payload)
      }
    case ADD_FAVORITE_SONG:
      return {
        ...state,
        favoriteSongs: [...state.favoriteSongs, action.payload]
      }
    case SET_FAVORITE_AUTHORS:
      return {
        ...state,
        favoriteAuthors: action.payload
      }
    case REMOVE_FAVORITE_AUTHOR:
      return {
        ...state,
        favoriteAuthors: state.favoriteAuthors.filter((item) => item._id !== action.payload)
      }
    case ADD_FAVORITE_AUTHOR:
      return {
        ...state,
        favoriteAuthors: [...state.favoriteAuthors, action.payload]
      }
    default :
      return state
  }
}