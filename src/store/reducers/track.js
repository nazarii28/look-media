import {CHANGE_TRACK, CLOSE, PAUSE, PLAY, SET_CURRENT_TIME, SET_DURATION, SET_PROGRESS} from "../types";

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
}

export const trackReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TRACK:
      return {
        ...state,
        ...action.payload,
        id: action.payload._id,
        isPlaying: true,
        showPlayer: true,
        album: action.payload.album || null
      }
    case PLAY:
      return {
        ...state,
        isPlaying: true,
      }
    case PAUSE:
      return {
        ...state,
        isPlaying: false
      }
    case CLOSE:
      return {
        id: null,
        name: '',
        author: '',
        isPlaying: false,
        url: '',
        showPlayer: false,
        album: null
      }
    case SET_DURATION:
      return {
        ...state,
        duration: action.payload
      }
    case SET_PROGRESS:
      return {
        ...state,
        progress: action.payload
      }
    case SET_CURRENT_TIME:
      return {
        ...state,
        currentTime: action.payload
      }
    default:
      return state
  }
}