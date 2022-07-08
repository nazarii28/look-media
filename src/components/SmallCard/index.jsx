import React, {useMemo} from 'react';
import {FaEye} from "react-icons/fa";
import {BiUserPlus} from "react-icons/bi";
import classes from './SmallCard.module.sass'
import {useDispatch, useSelector} from "react-redux";
import {deleteFavoriteAuthor, pushFavoriteAuthor} from "../../store/actions/favorite";

const SmallCard = ({ onClick, author}) => {

    const {favoriteAuthors} = useSelector(state => state.favorite)
    const {userId} = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const isFollowed = useMemo(() => {
        return favoriteAuthors.filter(item => item._id === author._id).length > 0
    }, [favoriteAuthors])

    const followHandler = () => {
        if (isFollowed) {
            dispatch(deleteFavoriteAuthor(userId, author._id))
        } else {
            dispatch(pushFavoriteAuthor(userId, author))
        }
    }

  return (
    <div className={classes.slide}>
      <div className={classes.slideImage}>
        <img src={author.image} alt={author.title}/>
        <button
          onClick={onClick}
        ><FaEye/></button>
      </div>
      <h3 className="text-xl mt-5">
        {author.title}
      </h3>
      <p className="text-sm my-3">
        {author.description.slice(0, 50)} ...
      </p>
      {
          author.followers &&
        <div className={classes.followers} onClick={followHandler}>
            {isFollowed ?
                    <span className="text-sm">
                        Unfollow
                    </span>
                :
                <>
                    <BiUserPlus className="text-lg"/>
                    {author.followers.toLocaleString()}
                    <span className="text-sm">
                        &nbsp;
                        Followers
                </span>
                </>
            }
        </div>
      }
    </div>
  );
};

export default SmallCard;