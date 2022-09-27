import {combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {configureStore} from "@reduxjs/toolkit";
import {albumApi} from "../services/albums";
import {authorApi} from "../services/authors";
import {songApi} from "../services/songs";
import {authApi} from "../services/auth";
import {favoriteApi} from "../services/favorite";
import authReducer from "../features/authSlice";
import trackReducer from "../features/trackSlice";
import {TypedUseSelectorHook, useSelector} from "react-redux";

const rootReducer = combineReducers({
    auth: authReducer,
    track: trackReducer,
    [albumApi.reducerPath]: albumApi.reducer,
    [authorApi.reducerPath]: authorApi.reducer,
    [songApi.reducerPath]: songApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [favoriteApi.reducerPath]: favoriteApi.reducer,
});

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
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


export default store;