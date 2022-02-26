import classes from "./Layout.module.sass";
import Sidebar from "../Sidebar/Sidebar.jsx";
import NavbarTop from "../NavbarTop/NavbarTop";
import MusicPlayer from "../MusicPlayer/MusicPlayer";

const Layout = ({children}) => {


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