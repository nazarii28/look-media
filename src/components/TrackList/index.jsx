import {useContext, useEffect} from "react";

import {TrackContext} from "../../context/track/trackContext";

import classes from "./TrackList.module.sass";
import { BiPlay, BiPause } from "react-icons/bi";
import audio from '../../audio.mp3'
import axios from "axios";
import {AuthContext} from "../../context/auth/authContext";
import {SongsContext} from "../../context/songs/songsContext";

const TrackList = () => {
  const {changeTrack, track, pause, play} = useContext(TrackContext)

  const {songs} = useContext(SongsContext)


  const playHandler = (idx) => {
    if(songs[idx].id === track.id) {
      if (track.isPlaying) {
        pause()
      } else {
        play()
      }
    } else {
      changeTrack(songs[idx])
    }
  }


  return (
    <div className={classes.TrackList}>
      <ul>
        {
          songs.map((obj, idx) => {
            return (
              <li key={idx}>
                <div className={classes.icon}>
                  <div onClick={() => playHandler(idx)}>
                    {
                      (track.id === obj.id && track.isPlaying) ? <BiPause/> : <BiPlay/>
                    }
                  </div>
                </div>
                <h4 className={classes.author}>
                  {obj.author}
                </h4>
                <p className={classes.name}>
                  {obj.name}
                </p>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default TrackList