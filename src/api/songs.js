import axios from "axios";

export const addSong = async (data) => {
  try {
    const response = await axios.post('/api/songs', data)
    return response.data
  } catch (e) {
    console.log(e)
  }
}

export const getSongsById = async (ids) => {
  const params = ids.join('&id=')
  try {
    const response = await axios.get(`/songs?id=${params}`)
    return response.data
  } catch (e) {
    console.log(e)
  }
}

export const fetchSongs = async (page = 1, limit = 10) => {
  const response = await axios.get('/api/songs')
  return response.data.songs
}

export const fetchFavoriteSongs = async (userId) => {
    try {
      const response = await axios.get(`/api/user/${userId}/favorite/songs`)
      return response.data
    } catch (e) {
      console.log(e)
    }
}

export const addFavoriteSong = async (userId, songId) => {
  await axios.post(`/api/user/${userId}/favorite/songs`, {
    songId
  })
}

export const removeFavoriteSong = async (userId, songId) => {
  await axios.delete(`/api/user/${userId}/favorite/songs/${songId}`)
}