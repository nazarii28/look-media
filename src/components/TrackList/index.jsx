import {changeTrack, pause, play} from "../../features/trackSlice.ts";
import classes from "./TrackList.module.sass";
import {useDispatch, useSelector} from "react-redux";
import TrackListItem from "./TrackListItem";
import TrackListItemSkeleton from "./TrackListItemSkeleton";

const TrackList = ({songs, isLoading}) => {
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
        { isLoading ?
            Array(5).fill(0).map((_, idx) => (
                <TrackListItemSkeleton key={idx}/>
            ))
          :
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