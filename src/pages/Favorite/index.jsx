import React, {useEffect, useState} from 'react';
import classes from './Favorite.module.sass'
import TrackList from "../../components/TrackList";
import {useDispatch, useSelector} from "react-redux";
import {FavoriteAuthorsCarousel} from '../../components/FavoriteAuthorsCarousel'
import AuthorsCardsCarousel from "../../components/AuthorsCardsCarousel";

const Favorite = () => {
  const {favoriteSongs, favoriteAuthors} = useSelector(state => state.favorite)


  return (
    <div className="flex p-7 gap-x-4">
      <div className="w-1/3">
        <h2 className="text-3xl">Favorite songs</h2>
          {
              favoriteSongs.length > 0 ?
                  <TrackList songs={favoriteSongs} />
                  :
                  <p className="mt-5">You haven't favorite songs yet</p>
          }

      </div>
      <div className="grow">
        <h2 className="text-3xl">Favorite authors</h2>
          {favoriteAuthors.length > 0 ?
              <AuthorsCardsCarousel slides={favoriteAuthors} title="Followed authors" />
              :
              <p className="mt-5">You haven't subscribed to anyone yet</p>
          }

      </div>
    </div>
  );
};

export default Favorite;