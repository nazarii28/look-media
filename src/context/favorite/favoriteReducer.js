import {SET_FAVORITE_SONGS} from "../types";

export const favoriteReducer = (state, action) => {
  switch (action.type) {
    case SET_FAVORITE_SONGS:
      return {
        ...state,
        favoriteSongs: action.payload
      }
    default :
      return {
        state
      }
  }
}