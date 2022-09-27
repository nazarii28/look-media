import {useMemo} from 'react';
import {BiPause, BiPlay, BiHeart} from "react-icons/bi";
import {FaHeart} from "react-icons/fa";
import classNames from "classnames";
import Slider from "../MusicPlayer/Slider/Slider";
import secondsToHms from "../../utils/secondsToHms";
import {useGetFavoriteSongsQuery, useAddFavoriteSongMutation, useRemoveFavoriteSongMutation} from "../../services/favorite";
import {useAppSelector} from "../../store";
import { Song } from 'src/types';
import classes from "./TrackList.module.sass";

interface ITrackListItemProps {
    song: Song, 
    onPlay: () => void
}

const TrackListItem = ({song, onPlay}: ITrackListItemProps) => {

    const currentTrack = useAppSelector((state) => state.track);
    const {progress} = currentTrack;
    const {data: favoriteSongs} = useGetFavoriteSongsQuery();
    const [addFavoriteSong] = useAddFavoriteSongMutation();
    const [removeFavoriteSong] = useRemoveFavoriteSongMutation();

    const isFavorited = useMemo(() => {
        if (favoriteSongs) {
            return favoriteSongs.find(item => item._id === song._id);
        }
        return false;
    }, [favoriteSongs, song._id])

    const addFavoriteHandler = async () => {
        if (isFavorited) {
            removeFavoriteSong(song._id);
        } else {
            addFavoriteSong(song._id);
        }
    }

    return (
        <li className={classNames({
            [classes.activeTrackItem]: currentTrack.id === song._id
        })}>
            <div className={classes.row}>
                <div className={classes.icon}>
                    <div onClick={() => onPlay()}>
                        {
                            (currentTrack.id === song._id && currentTrack.isPlaying) ? <BiPause/> : <BiPlay/>
                        }
                    </div>
                </div>
                <h4 className={classes.author}>
                    {song.author.name}
                </h4>
                <p className={classes.name}>
                    {song.name}
                </p>
                <div
                    onClick={addFavoriteHandler}
                    className={classNames(classes.heart, {
                        [classes.active]: isFavorited
                    })}>
                    {isFavorited ? <FaHeart/> : <BiHeart/>}


                </div>
                <p className={classes.duration}>
                    {currentTrack.id === song._id && secondsToHms(currentTrack.duration)}
                </p>
            </div>
            {
                currentTrack.id === song._id &&
                <div className={classes.row}>
                    <p className={classes.currentTime}>{secondsToHms(currentTrack.currentTime)}</p>
                    <Slider color="#fff" progress={progress} unTouchable/>
                </div>
            }

        </li>
    );
};


export default TrackListItem;