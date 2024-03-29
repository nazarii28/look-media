export interface Album {
    _id: string,
    name: string,
    songs: Song[],
    author: Author,
    image?: string
}

export interface Song {
    _id: string,
    album: string,
    author: Author,
    image?: string,
    name: string,
    url: string,
    __v?: string
}

export interface Author {
    _id: string,
    description: string,
    followers: string,
    image?: string,
    name: string,
    songs?: []
}

export interface User {
    userId: null | string
    token: null | string
    error: null | string
    loading: boolean
    firstName: null | string
    lastName: null | string
    email: null | string
    city: null | string
    company: null | string
    country: null | string
    updateLoading: boolean
}