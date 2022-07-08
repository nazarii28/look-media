import {AUTHORS_ERROR, AUTHORS_LOADING, SET_AUTHOR, SET_AUTHORS} from "../types";
import {fetchAuthorById, fetchAuthors} from '../../api/authors'


const authorsLoading = () => ({
  type: AUTHORS_LOADING
})

const authorsError = (error) => ({
  type: AUTHORS_ERROR,
  payload: error
})

const setAuthors = (data) => ({
  type: SET_AUTHORS,
  payload: data
})

const setAuthor = (data) => ({
  type: SET_AUTHOR,
  payload: data
})

export const getAuthors = () => async dispatch => {
  dispatch(authorsLoading())
  try {
    const authors = await fetchAuthors()
    dispatch(setAuthors(authors))
  } catch (e) {
    dispatch(authorsError(e.message))
  }
}

export const getAuthor = id => async dispatch => {
  dispatch(authorsLoading())
  try {
    const author = await fetchAuthorById(id)
    dispatch(setAuthor(author))
  } catch (e) {
    dispatch(authorsError(e.message))
  }
}