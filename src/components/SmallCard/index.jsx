import React, {useMemo} from 'react';
import {FaEye} from "react-icons/fa";
import {BiUserPlus} from "react-icons/bi";
import classes from './SmallCard.module.sass'
import {
    useAddFavoriteAuthorMutation,
    useGetFavoriteAuthorsQuery,
    useRemoveFavoriteAuthorMutation
} from "../../services/favorite";

const SmallCard = ({ onClick, author}) => {

    const {data: favoriteAuthors} = useGetFavoriteAuthorsQuery()
    const [addFavoriteAuthor] = useAddFavoriteAuthorMutation()
    const [removeFavoriteAuthor] = useRemoveFavoriteAuthorMutation()

    const isFollowed = useMemo(() => {
        if(favoriteAuthors) {
            return favoriteAuthors.find(item => item._id === author._id)
        }
    }, [favoriteAuthors, author._id])

    const followHandler = () => {
        if (isFollowed) {
            removeFavoriteAuthor(author._id)
        } else {
            addFavoriteAuthor(author._id)
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
        {author.name}
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