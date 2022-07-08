import {ALBUMS_ERROR, ALBUMS_LOADING, SET_ALBUMS} from "../types";

const initialState = {
    albums: [],
    loading: true,
    error: null
}

export const albumsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALBUMS_LOADING:
            return {
                ...state,
                loading: true
            }
        case SET_ALBUMS:
            return {
                ...state,
                albums: action.payload,
                loading: false
            }
        case ALBUMS_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}