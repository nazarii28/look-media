import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    id: null,
    name: '',
    author: '',
    isPlaying: false,
    url: '',
    showPlayer: false,
    duration: 0,
    progress: 0,
    currentTime: 0,
    album: null
}

const trackSlice = createSlice({
    name: 'track',
    initialState,
    reducers: {
        changeTrack: (state, action) => {
            return {
                ...state,
                ...action.payload,
                id: action.payload._id,
                isPlaying: true,
                showPlayer: true,
                album: action.payload.album || null
            }
        },
        play: (state) => {
            state.isPlaying = true
        },
        pause: (state) => {
            state.isPlaying = false
        },
        close: (state) => {
            return {
                ...state,
                id: null,
                name: '',
                author: '',
                isPlaying: false,
                url: '',
                showPlayer: false,
                album: null
            }
        },
        setDuration: (state, action) => {
            state.duration = action.payload
        },
        setProgress: (state, action) => {
            state.progress = action.payload
        },
        setCurrentTime: (state, action) => {
            state.currentTime = action.payload
        }
    }
})

export const { changeTrack, play, pause, close, setDuration, setProgress, setCurrentTime } = trackSlice.actions

export default trackSlice.reducer