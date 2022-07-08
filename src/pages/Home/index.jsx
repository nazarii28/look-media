import BannersCarousel from "../../components/BannersCarousel";
import AuthorsCardsCarousel from "../../components/AuthorsCardsCarousel";
import TrackList from "../../components/TrackList";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getSongs} from "../../store/actions/songs";
import {getAuthors} from "../../store/actions/authors";


const Home = () => {

  const {songs} = useSelector(state => state.songs)
  const {authors} = useSelector(state => state.authors)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSongs())
    dispatch(getAuthors())
  }, [])

    return (
      <div className="pt-2 pl-10 pr-6">
        <h1 className="text-3xl font-medium opacity-85">
          Home Music
        </h1>
        <div className="flex">
          <div className="lg:w-2/5 w-full">
            <BannersCarousel title="new releases 💥"/>
            <TrackList songs={songs}/>
          </div>
          <div className="lg:w-3/5 w-full pl-10">
            <AuthorsCardsCarousel slides={authors} title="SUNDAY FUN DAY" />
          </div>
        </div>
      </div>
    )
}

export default Home