import axios from "../axios";

export const register = async (data) => {
    return await axios.post('/api/auth/registration', data)
}

export const login = async (data) => {
    return await axios.post('/api/auth/login', data)
}

export const getUser = async (id) => {
    return await axios.get(`/api/user/${id}`)
}

export const updateUserData = async (id, values) => {
    return await axios.post(`/api/user/${id}`, {
        values
    })
}

export const changeUserAvatar = async (image, id) => {
    const formData = new FormData();
    formData.append('avatar', image)
    return await axios.post(`/api/user/${id}/update-avatar`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

export const removeUserAvatar = async (id) => {
    return await axios.delete(`/api/user/${id}/delete-avatar`)
}