import BannersCarousel from "../../components/BannersCarousel";
import AuthorsCardsCarousel from "../../components/AuthorsCardsCarousel";
import TrackList from "../../components/TrackList";
import AlbumsList from "../../components/AlbumsList";
import {useGetAlbumsQuery} from "../../services/albums";
import {useGetAuthorsQuery} from "../../services/authors";
import {useGetSongsQuery} from "../../services/songs";


const Home = () => {
    const {data: albums} = useGetAlbumsQuery();
    const {data: authors, isLoading: isAuthorsLoading} = useGetAuthorsQuery();
    const {data: songs, isLoading: isSongsLoading} = useGetSongsQuery();

    return (
        <div className="pt-2 pl-10 pr-6">
            <h1 className="text-3xl font-medium opacity-85">
                Home Music
            </h1>
            <div className="flex flex-wrap">
                <div className="xl:w-2/5 w-full">
                    <BannersCarousel isLoading={isSongsLoading} songs={songs?.songs} title="new releases 💥"/>
                    <TrackList isLoading={isSongsLoading} songs={songs?.songs}/>
                </div>
                <div className="xl:w-3/5 w-full xl:pl-10">
                    <AuthorsCardsCarousel
                        isLoading={isAuthorsLoading}
                        slides={authors?.authors}
                        title="SUNDAY FUN DAY"/>
                    <AlbumsList albums={albums?.albums}/>
                </div>
            </div>
        </div>
    )
}

export default Home;