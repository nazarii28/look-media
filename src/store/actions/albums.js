import {fetchAlbums} from "../../api/albums";
import {ALBUMS_ERROR, ALBUMS_LOADING, SET_ALBUMS} from "../types";

const albumsLoading = () => ({
    type: ALBUMS_LOADING
})

const albumsError = () => ({
    type: ALBUMS_ERROR
})

const setAlbums = (payload) => ({
    type: SET_ALBUMS,
    payload
})

export const getAlbums = () => async dispatch => {
    dispatch(albumsLoading())
    try {
        const albums = await fetchAlbums()
        dispatch(setAlbums(albums))
    } catch (e) {
        dispatch(albumsError(e))
    }
}