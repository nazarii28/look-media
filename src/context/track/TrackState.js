import {useReducer} from "react";
import {trackReducer} from './trackReducer'
import {TrackContext} from "./trackContext";
import {CHANGE_TRACK, CLOSE, PAUSE, PLAY} from '../types'

export const TrackState = ({children}) => {
  const initialState = {
    id: null,
    name: '',
    author: '',
    isPlaying: false,
    url: '',
    showPlayer: false
  }

  const [state, dispatch] = useReducer(trackReducer, initialState)

  const changeTrack = (payload) => dispatch({
    type: CHANGE_TRACK,
    payload
  })

  const play = () => dispatch({
      type: PLAY
  })

  const pause = () => dispatch({
    type: PAUSE
  })

  const close = () => dispatch({
    type: CLOSE
  })


  return (
    <TrackContext.Provider value={{track: state, changeTrack, play, pause, close}}>
      {children}
    </TrackContext.Provider>
  )
}