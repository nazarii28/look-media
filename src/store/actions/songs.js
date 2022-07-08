import {ADD_SONG_SUCCESS, FETCH_SONGS, FETCH_SONGS_ERROR, FETCH_SONGS_SUCCESS} from "../types";
import {fetchSongs, addSong as addSongApi} from '../../api/songs'


const fetchSongsLoading = () => ({
  type: FETCH_SONGS
})

const fetchSongsError = (error) => ({
  type: FETCH_SONGS_ERROR,
  payload: error
})

const fetchSongsSuccess = (data) => ({
  type: FETCH_SONGS_SUCCESS,
  payload: data
})

const addSongSuccess = () => ({
  type: ADD_SONG_SUCCESS
})


export const getSongs = () => async dispatch => {
  dispatch(fetchSongsLoading())
  try {
    const songs = await fetchSongs()
    dispatch(fetchSongsSuccess(songs))
  } catch (e) {
    dispatch(fetchSongsError(e.message))
  }
}

export const addSong = (data) => async dispatch => {
  dispatch(fetchSongsLoading())
  try {
    await addSongApi(data)
    dispatch(addSongSuccess())
  } catch (e) {
    console.log(e)
  }
}
