import {CHANGE_TRACK, CLOSE, PAUSE, PLAY} from "../../context/types";
import {SET_CURRENT_TIME, SET_DURATION, SET_PROGRESS} from "../types";

export const changeTrack = (payload) => ({
  type: CHANGE_TRACK,
  payload
})

export const play = () => ({
  type: PLAY
})

export const pause = () => ({
  type: PAUSE
})

export const close = () => ({
  type: CLOSE
})

export const setDuration = (payload) => ({
  type: SET_DURATION,
  payload
})

export const setProgress = (payload) => ({
  type: SET_PROGRESS,
  payload
})

export const setCurrentTime = (payload) => ({
  type: SET_CURRENT_TIME,
  payload
})