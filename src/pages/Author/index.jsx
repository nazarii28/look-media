import React, {useEffect, useState} from 'react';
import classes from './Author.module.sass'
import {useParams} from "react-router-dom";
import TrackList from "../../components/TrackList";
import {useDispatch, useSelector} from "react-redux";
import {getAuthor, getAuthors} from "../../store/actions/authors";

const Author = () => {
  const [showAllDesc, setShowAllDesc] = useState(false)
  const {currentAuthor: author, loading} = useSelector(state => state.authors)
  let {id} = useParams();

  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(getAuthor(id))
  }, [])

  if (loading || !author) {
    return null
  }

  return (
    <div
        className={classes.Author}>
     <div
       className={classes.banner}
      style={{
      backgroundImage: `url('${author.image}')`
     }}
     >
       <h1>
         <span>{author.name.split(' ')[0]}</span> {author.name.split(' ')[1]}
       </h1>
       <p className={classes.description}>
         {author.description.slice(0, 150)}
         {
           !showAllDesc && author.description.length > 150 &&
           <span onClick={() => setShowAllDesc(true)}>
            Show all
          </span>
         }
         {
           showAllDesc &&
           author.description.slice(150)
         }
       </p>
     </div>

      <div className={classes.tracks}>
          <TrackList songs={author.songs}/>
      </div>

    </div>
  );
};

export default Author;