import {songsReducer} from "./songs";
import {combineReducers} from "redux";
import {favoriteReducer} from "./favorite";
import {authReducer} from "./auth";
import {trackReducer} from "./track";
import {authorsReducer} from "./authors";
import {historyReducer} from "./historyReducer";
import {albumsReducer} from "./albums";
import {albumApi} from "../../services/albums.ts";
import {authorApi} from "../../services/authors.ts";
import {songApi} from "../../services/songs.ts";
import trackSliceReducer from "../../features/trackSlice.ts";

export const rootReducer = combineReducers({
  songs: songsReducer,
  favorite: favoriteReducer,
  auth: authReducer,
  // track: trackReducer,
  track: trackSliceReducer,
  authors: authorsReducer,
  history: historyReducer,
  albums: albumsReducer,
  [albumApi.reducerPath]: albumApi.reducer,
  [authorApi.reducerPath]: authorApi.reducer,
  [songApi.reducerPath]: songApi.reducer,
})