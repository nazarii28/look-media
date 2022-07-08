import classes from "./NavbarTop.module.sass";
import {BiLeftArrowAlt, BiRightArrowAlt} from 'react-icons/bi'
import Search from "../Search/Search";
import {Link, useNavigate, useParams} from "react-router-dom";

const NavbarTop = () => {
  let navigate = useNavigate();

  const navTo = (e, id) => {
      e.preventDefault()
      navigate(id)
  }

    return (
      <div className={classes.NavbarTop}>
       <div className="flex ">
         <div className={"flex align-center text-2xl " + classes.arrows}>
           <a href="/"
              onClick={(e) => {
                navTo(e, -1)
              }}>
             <BiLeftArrowAlt/>
           </a>
           <a href="/" onClick={(e) => {
             navTo(e, 1)
           }}>
             <BiRightArrowAlt/>
           </a>
         </div>
         <nav className={classes.navigation}>
           <ul>
             <li>
               <a href="/">Home</a>
             </li>
             <li>
               <a href="/">Groups</a>
             </li>
             <li>
               <a href="/">Videos</a>
             </li>
             <li>
               <a href="/">Music</a>
             </li>
             <li>
               <Link to="/logout">Logout</Link>
             </li>
             <li>
               <a href="/" className={classes.navigationActive}>Tape</a>
             </li>
           </ul>
         </nav>
       </div>
        <div>
          <Search/>
        </div>
      </div>
    )
}

export default NavbarTop