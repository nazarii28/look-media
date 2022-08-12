import classes from './Search.module.sass'
import {BiSearch} from 'react-icons/bi'
import {useEffect, useState} from "react";
import useDebounce from "../../hooks/useDebounce";
import {useSearchSongsQuery} from "../../services/songs.ts";

const Search = () => {
    // const [showResultList, setShowResultList] = useState(false)
    const [query, setQuery] = useState('')
    const showResultList = Boolean(query)
    const debouncedSearchTerm = useDebounce(query, 500)
    const {data, isLoading} = useSearchSongsQuery(debouncedSearchTerm)

    useEffect(() => {
        // const getAuthors = async () => {
        //     const response = await fetchAuthors(query.trim())
        //     setResultList(response)
        // }
        // if(query.trim().length >= 3) {
        //     // getAuthors()
        // }
    }, [debouncedSearchTerm])

    const [resultList, setResultList] = useState([])

    return (
        <div className={classes.Search}>
            <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search"
                type="text"/>
            <button>
                <BiSearch/>
            </button>
            {
                showResultList &&
                <div className={classes.resultWrap}>
                    <div className={classes.list}>

                        {
                            !isLoading &&
                            (
                                query.trim().length < 3 ?
                                    <span className='px-5 py-3'>
                                    Please enter at least 3 characters
                                </span> :
                                    data.songs.length > 0 ?
                                        <ul>
                                            {
                                                data.songs.map(item => (
                                                    <li key={item._id}>{item.name}</li>
                                                ))
                                            }
                                        </ul> :
                                        <span className='px-5 py-3'>
                                            Not found
                                        </span>
                            )
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default Search