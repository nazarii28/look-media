import {
  ADD_FAVORITE_AUTHOR,
  ADD_FAVORITE_SONG, REMOVE_FAVORITE_AUTHOR,
  REMOVE_FAVORITE_SONG,
  SET_FAVORITE_AUTHORS,
  SET_FAVORITE_SONGS
} from "../types";
import {fetchFavoriteSongs, addFavoriteSong, removeFavoriteSong} from '../../api/songs'
import {addFavoriteAuthor, fetchFavoriteAuthors, removeFavoriteAuthor} from "../../api/authors";

export const setFavoriteSongs = (payload) => ({
  type: SET_FAVORITE_SONGS,
  payload
})

export const getFavoriteSongs = (userId) => async dispatch => {
  const songs = await fetchFavoriteSongs(userId)
  dispatch(setFavoriteSongs(songs))
}

export const deleteFavoriteSong = (userId, songId) => async dispatch => {
  await removeFavoriteSong(userId, songId)
  dispatch({
    type: REMOVE_FAVORITE_SONG,
    payload: songId
  })
}

export const pushFavoriteSong = (userId, song) => async dispatch => {
  await addFavoriteSong(userId, song._id)
  dispatch({
    type: ADD_FAVORITE_SONG,
    payload: song
  })
}

export const setFavoriteAuthors = (payload) => ({
  type: SET_FAVORITE_AUTHORS,
  payload
})

export const getFavoriteAuthors = (userId) => async dispatch => {
  const authors = await fetchFavoriteAuthors(userId)
  dispatch(setFavoriteAuthors(authors))
}

export const pushFavoriteAuthor = (userId, author) => async dispatch => {
  await addFavoriteAuthor(userId, author._id)
  dispatch({
    type: ADD_FAVORITE_AUTHOR,
    payload: author
  })
}

export const deleteFavoriteAuthor = (userId, authorId) => async dispatch => {
  await removeFavoriteAuthor(userId, authorId)
  dispatch({
    type: REMOVE_FAVORITE_AUTHOR,
    payload: authorId
  })
}