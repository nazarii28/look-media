import classes from "./Sidebar.module.sass";
import {BiHome, BiMusic, BiFilm, BiUser, BiRepost, BiHeart, BiDuplicate, BiIdCard, BiPlusCircle} from 'react-icons/bi'
import {NavLink} from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={classes.Sidebar}>
      <NavLink to="/account" className={'flex items-center ' + classes.SidebarBlock}>
        <div className={classes.avatar}>
          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="avatar"/>
        </div>
        <div>
          <span className={'block'}>
            Alexis
          </span>
          <span className={'block text-xs'}>
            Sundress
          </span>
        </div>
      </NavLink>
      <div className={classes.SidebarBlock}>
        <ul className={classes.navigation}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? classes.navigationActive : '')}>
              <BiHome/>
              Home
            </NavLink>
          </li>
          <li>
            <a href="/">
              <BiMusic/>
              Popular
            </a>
          </li>
          <li>
            <a href="/">
              <BiFilm/>
              Films
            </a>
          </li>
        </ul>
      </div>
      <div className={classes.SidebarBlock}>
        <h3>
          Library
        </h3>
        <ul className={classes.navigation}>
          <li>
            <a href="/">
              <BiUser/>
              Made For You
            </a>
          </li>
          <li>
            <a href="/">
              <BiRepost/>
              History
            </a>
          </li>
          <li>
            <a href="/">
              <BiHeart/>
              Favorite
            </a>
          </li>
          <li>
            <a href="/">
              <BiDuplicate/>
              Albums
            </a>
          </li>
          <li>
            <a href="/">
              <BiIdCard/>
              Artists
            </a>
          </li>
        </ul>
      </div>
      <div className={classes.SidebarBlock}>
        <h3>
          Playlist
        </h3>
        <ul className={classes.navigation}>
          <li>
            <a href="/">
              Made For You
            </a>
          </li>
          <li>
            <a href="/">
              Mint Account
            </a>
          </li>
          <li>
            <a href="/">
              Spinin recording
            </a>
          </li>
        </ul>
      </div>
      <div className="pt-3">
        <ul className={classes.navigation}>
          <li>
            <a href="/">
              <BiPlusCircle/>
              New playlist
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar