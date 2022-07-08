import {SET_HISTORY_SONG} from "../types";

export const addSongToHistory = (payload) => ({
  type: SET_HISTORY_SONG,
  payload
})