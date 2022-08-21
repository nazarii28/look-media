import {useEffect} from "react";

import classes from "./Layout.module.sass";
import Sidebar from "../Sidebar/Sidebar.jsx";
import NavbarTop from "../NavbarTop";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import {useDispatch, useSelector} from "react-redux";
import {setUserData} from "../../features/authSlice.ts";
import {useGetUserQuery} from "../../services/auth.ts";

const Layout = ({children}) => {
    const {userId} = useSelector(state => state.auth)
    const {data: user} = useGetUserQuery(userId)
    const dispatch = useDispatch()

    useEffect(() => {
        if (user) {
            dispatch(setUserData(user.user))
        }
    }, [user, dispatch])


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