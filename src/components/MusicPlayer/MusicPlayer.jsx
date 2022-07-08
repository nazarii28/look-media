import {useEffect, useRef, useState} from "react";

import Slider from "./Slider/Slider";
import secondsToHms from '../../utils/secondsToHms'

import {
  BiListUl,
  BiPause,
  BiPlay,
  BiRepeat,
  BiShuffle,
  BiSkipNext,
  BiSkipPrevious,
  BiVolumeFull,
  BiVolumeLow,
  BiVolumeMute,
  BiX
} from "react-icons/bi";
import classes from "./MusicPlayer.module.sass";
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {close, pause, play, setCurrentTime, setDuration, setProgress} from '../../store/actions/track'
import {addSongToHistory} from "../../store/actions/history";


const MusicPlayer = () => {
  const [volume, setVolume] = useState(20)
  const [isMouseDown, setIsMouseDown] = useState(false)
  const [repeat, setRepeat] = useState(false)


  const dispatch = useDispatch()
  const track = useSelector(state => state.track)


  let lastVolume = 0
  const audioRef = useRef()


  const playTrack = () => {
    if(!track.isPlaying) {
      dispatch(play())
    } else {
      dispatch(pause())
    }
  }

  useEffect(() => {
    if (audioRef.current) {
      if(track.isPlaying) {
        audioRef.current.volume = (volume / 100)
        audioRef.current.play()
      } else {
        audioRef.current.pause()
      }
    }
  }, [track.isPlaying])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      dispatch(setCurrentTime(0))
      audioRef.current.play()
    }
    if (track.id) {
      dispatch(addSongToHistory(track))
    }
  }, [track.id])

  const onChangeSlider = (value) => {
    dispatch(setProgress(value))
  }

  const onTimeUpdate = (e) => {
    if(!isMouseDown) {
      dispatch(setCurrentTime(e.currentTarget.currentTime.toFixed(2)))
    }
  }

  const onMouseUp = (value) => {
    audioRef.current.currentTime = (track.duration / 100) * value
    setIsMouseDown(false)
  }

  const endedHandler = () => {
    if(repeat) {
      audioRef.current.currentTime = 0
      dispatch(setCurrentTime(0))
      audioRef.current.play()
    } else {
      dispatch(pause())
    }
  }

  const onClickVolumeIcon = () => {
    if (volume < 1) {
      onChangeVolume()
    } else {
      lastVolume = volume
      onChangeVolume(0)
    }
  }

  useEffect(() => {
    const percent = track.currentTime / track.duration * 100
    dispatch(setProgress(percent.toFixed(2)))
  }, [track.currentTime])


  const onChangeVolume = (value) => {
    setVolume(value)
    audioRef.current.volume = (value / 100)
  }

  const closePlayer = () => {
    dispatch(close())
  }

  const audioLoadedHandler = (e) => {
    dispatch(setDuration(e.currentTarget.duration.toFixed(2)))
  }

  if (!track.showPlayer) return null

    return (
      <div className={"pl-10 pt-4 pr-4 pb-4 flex items-end " + classes.MusicPlayer}>
        <button className={classes.close} onClick={closePlayer}>
          <BiX/>
        </button>
        <div className="w-1/2">
          <div className={classes.meta}>
            <img
              src={track.image}
              alt=""/>
            <div>
              <div className="flex items-center">
                <h3>
                  {track.name}
                </h3>
                {track.album &&
                <p>
                  {track.album.name}
                </p>
                }

              </div>
              <p className={classes.author}>
                {track.author.name}
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={onClickVolumeIcon}
              className="mr-3 text-lg text-gray-text">
              {
                volume < 1 ? <BiVolumeMute/> :
                  volume < 50 ? <BiVolumeLow/> : <BiVolumeFull/>

              }
            </button>
            <div style={{
              width: 300
            }}>
              <Slider
                color="#929292"
                progress={volume}
                onChange={onChangeVolume}/>
            </div>
            <button className="mx-5 text-gray-text">
              <BiShuffle/>
            </button>
            <button className="text-2xl">
              <BiSkipPrevious/>
            </button>
            <button
              onClick={playTrack}
              className={classes.playButton}>
              {track.isPlaying ? <BiPause/> : <BiPlay/>}
            </button>
            <button className="text-2xl">
              <BiSkipNext/>
            </button>
            <button
              className={classNames('mx-5 text-gray-text', repeat ? classes.active : '')}
              onClick={() => setRepeat(!repeat)}>
              <BiRepeat/>
            </button>
            <button className="text-xl text-gray-text">
              <BiListUl/>
            </button>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-between">
          <div className={classes.time}>
            {secondsToHms(track.currentTime)}
          </div>
          <Slider
            color="#18CBA4"
            progress={track.progress}
            onMouseDown={() => setIsMouseDown(true)}
            onMouseUp={onMouseUp}
            onChange={onChangeSlider}/>
          <div className={classes.time}>
            {secondsToHms(track.duration)}
          </div>
          <audio
            ref={audioRef}
            onLoadedData={audioLoadedHandler}
            onTimeUpdate={onTimeUpdate}
            onEnded={endedHandler}
            src={track.url}>
          </audio>
        </div>
      </div>
    )
}

export default MusicPlayer