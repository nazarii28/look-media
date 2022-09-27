import {BiLeftArrowAlt, BiRightArrowAlt} from 'react-icons/bi'
import Search from "../Search";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logout} from "../../features/authSlice";
import classNames from "classnames";
import classes from "./NavbarTop.module.sass";

const NavbarTop = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const navTo = (e: React.MouseEvent, id: number) => {
        e.preventDefault();
        navigate(id);
    }

    const logoutHandler = (e: React.MouseEvent) => {
        e.preventDefault();
        dispatch(logout());
    }

    return (
        <div className={classes.NavbarTop}>
            <div className="flex">
                <div className={classNames('flex align-center text-2xl', classes.arrows)}>
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
                            <a href="#" onClick={logoutHandler}>Logout</a>
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

export default NavbarTop;