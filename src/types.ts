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
    author: string,
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