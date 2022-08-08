import {songsReducer} from "./songs";
import {combineReducers} from "redux";
import {favoriteReducer} from "./favorite";
import {authReducer} from "./auth";
import {authorsReducer} from "./authors";
import {historyReducer} from "./historyReducer";
import {albumsReducer} from "./albums";
import {albumApi} from "../../services/albums.ts";
import {authorApi} from "../../services/authors.ts";
import {songApi} from "../../services/songs.ts";
import trackReducer from "../../features/trackSlice.ts";
import { authApi } from '../../services/auth.ts'
import authSliceReducer from '../../features/authSlice.ts'
import {favoriteApi} from "../../services/favorite.ts";

export const rootReducer = combineReducers({
  songs: songsReducer,
  favorite: favoriteReducer,
  auth: authSliceReducer,
  track: trackReducer,
  authors: authorsReducer,
  history: historyReducer,
  albums: albumsReducer,
  [albumApi.reducerPath]: albumApi.reducer,
  [authorApi.reducerPath]: authorApi.reducer,
  [songApi.reducerPath]: songApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [favoriteApi.reducerPath]: favoriteApi.reducer,
  // authSlice: authSliceReducer,
})