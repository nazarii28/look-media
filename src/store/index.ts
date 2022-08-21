import {combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {configureStore} from "@reduxjs/toolkit";
import {albumApi} from "../services/albums.ts";
import {authorApi} from "../services/authors.ts";
import {songApi} from "../services/songs.ts";
import {authApi} from "../services/auth.ts";
import {favoriteApi} from "../services/favorite.ts";
import authReducer from "../features/authSlice.ts";
import trackReducer from "../features/trackSlice.ts";

const rootReducer = combineReducers({
    auth: authReducer,
    track: trackReducer,
    [albumApi.reducerPath]: albumApi.reducer,
    [authorApi.reducerPath]: authorApi.reducer,
    [songApi.reducerPath]: songApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [favoriteApi.reducerPath]: favoriteApi.reducer,
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(
                thunk,
                albumApi.middleware,
                authorApi.middleware,
                songApi.middleware,
                authApi.middleware,
                favoriteApi.middleware
            )
})

export default store;