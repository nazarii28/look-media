import classes from "./Layout.module.sass";
import Sidebar from "../Sidebar/Sidebar.jsx";
import NavbarTop from "../NavbarTop/NavbarTop";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

const Layout = ({children}) => {
  const {userId} = useSelector(state => state.auth)

  const dispatch = useDispatch()

  useEffect(async () => {
    // dispatch(getFavoriteSongs(userId))
    // dispatch(getFavoriteAuthors(userId))
  }, [])

  return (
    <div className={"flex " + classes.Layout}>
      <Sidebar/>
      <div className="grow" style={{
        maxWidth: 'calc(100% - 200px)',
        paddingBottom: 200
      }}>
        <NavbarTop/>
        {children}
        <MusicPlayer/>
      </div>
    </div>
  )
}

export default Layout