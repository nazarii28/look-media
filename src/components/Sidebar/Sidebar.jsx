import classes from "./Sidebar.module.sass";
import {BiHome, BiMusic, BiFilm, BiUser, BiRepost, BiHeart, BiDuplicate, BiIdCard, BiPlusCircle} from 'react-icons/bi'
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const Sidebar = () => {
  const {firstName, email} = useSelector(state => state.auth)

  return (
    <div className={classes.Sidebar}>
      <NavLink to="/account" className={'flex items-center ' + classes.SidebarBlock}>
        <div className={classes.avatar}>
          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="avatar"/>
        </div>
        <div>
          <span className={'block'}>
            {firstName}
          </span>
          <span className={'block text-xs'}>
            {email}
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
        </ul>
      </div>
      <div className={classes.SidebarBlock}>
        <h3>
          Library
        </h3>
        <ul className={classes.navigation}>
          <li>
            <NavLink to="/history" className={({ isActive }) => (isActive ? classes.navigationActive : '')}>
              <BiRepost/>
              History
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorite" className={({ isActive }) => (isActive ? classes.navigationActive : '')}>
              <BiHeart/>
              Favorite
            </NavLink>
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
      <div className="pt-3">
        <ul className={classes.navigation}>
          <li>
            <NavLink to="/add-song" className={({ isActive }) => (isActive ? classes.navigationActive : '')}>
              <BiPlusCircle/>
              Add Song
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar