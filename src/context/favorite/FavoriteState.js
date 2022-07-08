import React, {useReducer} from 'react';
import {favoriteReducer} from "./favoriteReducer";
import {FavoriteContext} from './favoriteContext'

const FavoriteState = ({children}) => {
  const initialState = {
    favoriteSongs: [76, 77, 78],
  }

  const [state, dispatch] = useReducer(favoriteReducer, initialState)


  const setFavoriteSong = () => {

  }


  const {favoriteSongs} = state

  return (
    <FavoriteContext.Provider value={{favoriteSongs}}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteState;