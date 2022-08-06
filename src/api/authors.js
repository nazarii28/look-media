import axios from "../axios";

export const fetchAuthors = async (query = '') => {
  const response = await axios.get('/api/authors?q='+query)
  return response.data.authors
}

export const fetchAuthorById = async (id) => {
  const response = await axios.get(`/api/authors/${id}`)
  return response.data.author
}

export const fetchFavoriteAuthors = async (userId) => {
  try {
    const response = await axios.get(`/api/user/${userId}/favorite/authors`)
    return response.data
  } catch (e) {
    console.log(e)
  }
}

export const addFavoriteAuthor = async (userId, authorId) => {
  await axios.post(`/api/user/${userId}/favorite/authors`, {
    authorId
  })
}

export const removeFavoriteAuthor = async (userId, authorId) => {
  await axios.delete(`/api/user/${userId}/favorite/authors/${authorId}`)
}