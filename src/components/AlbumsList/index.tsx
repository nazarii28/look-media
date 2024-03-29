import AlbumListItem from './AlbumsListItem'
import {Album} from "../../types";

interface IAlbumsListProps {
    albums?: Album[]
}

const AlbumsList = ({albums}: IAlbumsListProps) => {
    return (
        <div>
            <div className="flex justify-between items-center mb-5">
                <p className="uppercase opacity-75 text-sm">
                    Albums
                </p>
            </div>
            <div className="flex">
                { albums &&
                    albums.map(album => (
                        <AlbumListItem
                            key={album._id}
                            _id={album._id}
                            image={album.image}
                            name={album.name}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default AlbumsList;