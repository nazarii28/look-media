import BannersCarousel from "../../components/BannersCarousel";
import AuthorsCardsCarousel from "../../components/AuthorsCardsCarousel";
import TrackList from "../../components/TrackList";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import AlbumsList from "../../components/AlbumsList";
import {useGetAlbumsQuery} from "../../services/albums.ts";
import {useGetAuthorsQuery} from "../../services/authors.ts";
import {useGetSongsQuery} from "../../services/songs.ts";
import {useGetUserQuery} from "../../services/auth.ts";
import {setUserData} from "../../features/authSlice.ts";


const Home = () => {

  const {userId} = useSelector(state => state.auth)
  const {data: user} = useGetUserQuery(userId)

  const dispatch = useDispatch()

  const {data: albums} = useGetAlbumsQuery();
  const {data: authors, isLoading: isAuthorsLoading} = useGetAuthorsQuery();
  const {data: songs, isLoading: isSongsLoading} = useGetSongsQuery();

  useEffect(() => {
    if(user) {
      dispatch(setUserData(user.user))
    }
  }, [user])


  useEffect(() => {
    // dispatch(getSongs())
    // dispatch(getAuthors())
    // dispatch(getAlbums())
  }, [])

    return (
      <div className="pt-2 pl-10 pr-6">
        <h1 className="text-3xl font-medium opacity-85">
          Home Music
        </h1>
        <div className="flex">
          <div className="lg:w-2/5 w-full">
            <BannersCarousel isLoading={isSongsLoading} songs={songs?.songs} title="new releases 💥"/>
            <TrackList isLoading={isSongsLoading} songs={songs?.songs}/>
          </div>
          <div className="lg:w-3/5 w-full pl-10">
            <AuthorsCardsCarousel isLoading={isAuthorsLoading} slides={authors?.authors} title="SUNDAY FUN DAY"/>
            <AlbumsList albums={albums?.albums}/>
          </div>
        </div>
      </div>
    )
}

export default Home