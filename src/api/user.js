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