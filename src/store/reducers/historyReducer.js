import {SET_HISTORY_SONG} from "../types";

const initialState = {
  history: []
}

export const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HISTORY_SONG:
      return {
        history: [...state.history, action.payload]
      }
    default:
      return state
  }
}