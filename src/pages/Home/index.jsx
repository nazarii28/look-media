import BannersCarousel from "../../components/BannersCarousel";
import SmallCardsCarousel from "../../components/SmallCardsCarousel";
import TrackList from "../../components/TrackList";
import {useContext, useEffect, useState} from "react";
import {SongsContext} from "../../context/songs/songsContext";
import axios from "axios";

const Home = () => {
  const {fetchSongs} = useContext(SongsContext)
  const [authors, setAuthors] = useState([])

  const fetchAuthors = async () => {
    const response = await axios.get('http://localhost:3001/authors')
    setAuthors(response.data)
  }

  useEffect(() => {
    fetchSongs()
    fetchAuthors()
  }, [])



    return (
      <div className="pt-2 pl-10 pr-6">
        <h1 className="text-3xl font-medium opacity-85">
          Home Music
        </h1>
        <div className="flex">
          <div className="lg:w-2/5 w-full">
            <BannersCarousel title="new releases 💥"/>
            <TrackList/>
          </div>
          <div className="lg:w-3/5 w-full pl-10">
            <SmallCardsCarousel slides={authors} title="SUNDAY FUN DAY" />
          </div>
        </div>
      </div>
    )
}

export default Home