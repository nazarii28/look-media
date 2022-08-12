import React, {useEffect, useState} from 'react';
import classes from './Author.module.sass';
import {useParams} from "react-router-dom";
import TrackList from "../../components/TrackList";
import {useDispatch, useSelector} from "react-redux";
import {useGetAuthorQuery} from "../../services/authors.ts";

const Author = () => {
    const [showAllDesc, setShowAllDesc] = useState(false)
    // const {currentAuthor: author, loading} = useSelector(state => state.authors)

    let {id} = useParams();
    const {data, isLoading} = useGetAuthorQuery(id)
    const dispatch = useDispatch()

    useEffect(() => {
        // dispatch(getAuthor(id))
    }, [])

    if (isLoading) {
        return null
    }

    return (
        <div
            className={classes.Author}>
            <div
                className={classes.banner}
                style={{
                    backgroundImage: `url('${data.author.image}')`
                }}
            >
                <h1>
                    <span>{data.author.name.split(' ')[0]}</span> {data.author.name.split(' ')[1]}
                </h1>
                <p className={classes.description}>
                    {data.author.description.slice(0, 150)}
                    {
                        !showAllDesc && data.author.description.length > 150 &&
                        <span onClick={() => setShowAllDesc(true)}>
                            Show all
                          </span>
                    }
                    {
                        showAllDesc &&
                        data.author.description.slice(150)
                    }
                </p>
            </div>

            <div className={classes.tracks}>
                <TrackList songs={data.author.songs}/>
            </div>

        </div>
    );
};

export default Author;