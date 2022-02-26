import React, {useReducer} from 'react';
import {SongsContext} from "./songsContext";
import {songsReducer} from "./songsReducer";
import axios from "axios";
import {FETCH_SONGS, FETCH_SONGS_ERROR, FETCH_SONGS_SUCCESS} from "../types";

const SongsState = ({children}) => {
  const initialState = {
    songs: [],
    loading: false,
    error: null,
    page: 1,
    limit: 10
  }

  const [state, dispatch] = useReducer(songsReducer, initialState)


  const fetchSongs = async () => {
      dispatch({
        type: FETCH_SONGS,
      })
     try {
       const response = await axios.get('http://localhost:3001/songs', {
         params: {
           _page: state.page,
           _limit: state.limit
         }
       })
       dispatch({
         type: FETCH_SONGS_SUCCESS,
         payload: response.data
       })
     } catch (e) {
       dispatch({
         type: FETCH_SONGS_ERROR,
         payload: e
       })
     }
  }


  const {songs} = state

  return (
    <SongsContext.Provider value={{songs, fetchSongs}}>
      {children}
    </SongsContext.Provider>
  );
};

export default SongsState;