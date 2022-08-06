import {createStore, compose, applyMiddleware, combineReducers} from 'redux'
import {rootReducer} from  './reducers'
import thunk from 'redux-thunk'
import {configureStore} from "@reduxjs/toolkit";
import {albumApi} from "../services/albums.ts";
import {authorApi} from "../services/authors.ts";
import {songApi} from "../services/songs.ts";

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk, albumApi.middleware, authorApi.middleware, songApi.middleware)
})

export default store;