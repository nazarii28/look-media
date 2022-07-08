import {songsReducer} from "./songs";
import {combineReducers} from "redux";
import {favoriteReducer} from "./favorite";
import {authReducer} from "./auth";
import {trackReducer} from "./track";
import {authorsReducer} from "./authors";
import {historyReducer} from "./historyReducer";

export const rootReducer = combineReducers({
  songs: songsReducer,
  favorite: favoriteReducer,
  auth: authReducer,
  track: trackReducer,
  authors: authorsReducer,
  history: historyReducer
})