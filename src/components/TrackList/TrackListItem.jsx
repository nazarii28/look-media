import React, {useMemo, useState} from 'react';
import classes from "./TrackList.module.sass";
import {BiPause, BiPlay, BiHeart} from "react-icons/bi";
import {FaHeart} from "react-icons/fa";
import classNames from "classnames";
import Slider from "../MusicPlayer/Slider/Slider";
import {useDispatch, useSelector} from "react-redux";
import secondsToHms from "../../utils/secondsToHms";
import {useGetFavoriteSongsQuery, useAddFavoriteSongMutation, useRemoveFavoriteSongMutation} from "../../services/favorite.ts";

const TrackListItem = ({track, obj, onPlay}) => {

    const {progress} = useSelector(state => state.track)
    // const {favoriteSongs} = useSelector(state => state.favorite)
    const {data: favoriteSongs} = useGetFavoriteSongsQuery()
    const [addFavoriteSong] = useAddFavoriteSongMutation()
    const [removeFavoriteSong] = useRemoveFavoriteSongMutation()
    const {userId} = useSelector(state => state.auth)

    const dispatch = useDispatch()

    const isFavorited = useMemo(() => {
        if (favoriteSongs) {
            return favoriteSongs.find(item => item._id === obj._id)
        }
    }, [favoriteSongs])

    const addFavoriteHandler = async () => {
        if (isFavorited) {
            removeFavoriteSong(obj._id)
        } else {
            addFavoriteSong(obj._id)
        }
    }


    return (
        <li className={classNames({
            [classes.activeTrackItem]: track.id === obj._id
        })}>
            <div className={classes.row}>
                <div className={classes.icon}>
                    <div onClick={() => onPlay()}>
                        {
                            (track.id === obj._id && track.isPlaying) ? <BiPause/> : <BiPlay/>
                        }
                    </div>
                </div>
                <h4 className={classes.author}>
                    {obj.author.name}
                </h4>
                <p className={classes.name}>
                    {obj.name}
                </p>
                <div
                    onClick={addFavoriteHandler}
                    className={classNames(classes.heart, {
                        [classes.active]: isFavorited
                    })}>
                    {isFavorited ? <FaHeart/> : <BiHeart/>}


                </div>
                <p className={classes.duration}>
                    {track.id === obj._id && secondsToHms(track.duration)}
                </p>
            </div>
            {
                track.id === obj._id &&
                <div className={classes.row}>
                    <p className={classes.currentTime}>{secondsToHms(track.currentTime)}</p>
                    <Slider color="#fff" progress={progress} unTouchable/>
                </div>
            }

        </li>
    );
};

export default TrackListItem;