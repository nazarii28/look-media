import {changeTrack, pause, play} from "../../store/actions/track";
import classes from "./TrackList.module.sass";
import {useDispatch, useSelector} from "react-redux";
import TrackListItem from "./TrackListItem";

const TrackList = ({songs}) => {
  const track = useSelector(state => state.track)
  const dispatch = useDispatch()

  const playHandler = (idx) => {
    if(songs[idx]._id === track.id) {
      if (track.isPlaying) {
        dispatch(pause())
      } else {
        dispatch(play())
      }
    } else {
      dispatch(changeTrack(songs[idx]))
    }
  }


  return (
    <div className={classes.TrackList}>
      <ul>
        {
          songs.map((obj, idx) => {
            return (
              <TrackListItem key={obj._id} track={track} obj={obj} onPlay={() => playHandler(idx)} />
            )
          })
        }
      </ul>
    </div>
  )
}

export default TrackList