import {useState} from 'react';
import background from '../../assets/images/bruce-mars-DBGwy7s3QY0-unsplash.jpg';
import classes from './AddSong.module.sass';
import classNames from "classnames";
import Button from "../../components/UI/Button";
import {useDispatch} from "react-redux";
import Loader from "../../components/UI/Loader";
import {useAddSongMutation} from "../../services/songs";
import {useGetAuthorsQuery} from "../../services/authors";

const AddSong = () => {
    const dispatch = useDispatch()
    const {data: authors, isLoading: isAuthorsLoading} = useGetAuthorsQuery();
    const [currentAuthor, setCurrentAuthor] = useState('')
    const [trackName, setTrackName] = useState('')
    const [url, setUrl] = useState('')
    const [image, setImage] = useState('')
    const [addSong, {isLoading}] = useAddSongMutation()

    const handleSubmit = async () => {
        setCurrentAuthor('')
        setTrackName('')
        setUrl('')
        setImage('')
        dispatch(addSong({
            author: currentAuthor, name: trackName, url, image
        }))
    }


    return (
        <div
            className={classes.wrapper}
            style={{background: `url(${background})`}}
        >
            <div className={classes.form}>
                <h2 className="text-2xl text-center mb-6">Add track</h2>
                {
                    isLoading &&
                    <div className={classes.loaderBox}>
                        <Loader/>
                    </div>
                }
                <label>
                    Track name
                    <input value={trackName} onChange={(e) => setTrackName(e.target.value)}
                           className={classNames('input', classes.input)} type="text"/>
                </label>
                <label className="block">Author
                    <select
                        value={currentAuthor}
                        onChange={(e) => setCurrentAuthor(e.target.value)}
                        className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        {
                            !isAuthorsLoading && authors?.authors.map(author =>
                                <option key={author._id} value={author._id}>{author.name}</option>
                            )
                        }
                    </select>
                </label>

                <label>
                    Url
                    <input value={url} onChange={(e) => setUrl(e.target.value)}
                           className={classNames('input', classes.input)} type="text"/>
                </label>
                <label>
                    Image url
                    <input value={image} onChange={(e) => setImage(e.target.value)}
                           className={classNames('input', classes.input)} type="text"/>
                </label>
                <Button onClick={handleSubmit} className="mt-4">Submit</Button>
            </div>
        </div>
    );
};

export default AddSong;