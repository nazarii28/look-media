import axios from "axios";

export const fetchAlbums = async () => {
    const response = await axios.get('/api/albums')
    return response.data.albums
}