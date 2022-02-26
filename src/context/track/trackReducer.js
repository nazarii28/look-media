import {CHANGE_TRACK, CLOSE, PAUSE, PLAY} from '../types'

export const trackReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_TRACK:
      return {
        ...action.payload,
        isPlaying: true,
        showPlayer: true
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
      }
    default:
      return state
  }
}