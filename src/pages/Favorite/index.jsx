import TrackList from "../../components/TrackList";
import {FavoriteAuthorsCarousel} from '../../components/FavoriteAuthorsCarousel'
import AuthorsCardsCarousel from "../../components/AuthorsCardsCarousel";
import {useGetFavoriteSongsQuery, useGetFavoriteAuthorsQuery} from "../../services/favorite.ts";

const Favorite = () => {
    const {data: favoriteSongs, isLoading: isSongsLoading} = useGetFavoriteSongsQuery()
    const {data: favoriteAuthors, isLoading: isAuthorsLoading} = useGetFavoriteAuthorsQuery()


  return (
    <div className="flex p-7 gap-x-4">
      <div className="w-1/3">
        <h2 className="text-3xl">Favorite songs</h2>
          {
              !isSongsLoading &&
              (
                  favoriteSongs.length > 0 ?
                  <TrackList songs={favoriteSongs} />
                  :
                  <p className="mt-5">You haven't favorite songs yet</p>
              )
          }

      </div>
      <div className="grow">
        <h2 className="text-3xl">Favorite authors</h2>
          {
              !isAuthorsLoading &&
              (
                  favoriteAuthors.length > 0 ?
                  <AuthorsCardsCarousel slides={favoriteAuthors} title="Followed authors" />
                  :
                  <p className="mt-5">You haven't subscribed to anyone yet</p>
              )
          }

      </div>
    </div>
  );
};

export default Favorite;