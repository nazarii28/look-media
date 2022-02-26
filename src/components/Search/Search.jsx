import classes from './Search.module.sass'
import {BiSearch} from 'react-icons/bi'

const Search = () => {
    return (
      <div className={classes.Search}>
        <input
          placeholder="Search"
          type="text"/>
        <button>
          <BiSearch/>
        </button>
      </div>
    )
}

export default Search