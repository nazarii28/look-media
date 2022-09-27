import {useEffect} from "react";
import Sidebar from "../Sidebar";
import NavbarTop from "../NavbarTop";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import {useDispatch} from "react-redux";
import {setUserData} from "../../features/authSlice";
import {useGetUserQuery} from "../../services/auth";
import classes from "./Layout.module.sass";
import { useAppSelector } from "src/store";

interface ILayoutProps {
    children: React.ReactNode
}

const Layout = ({children}: ILayoutProps) => {
    const {userId} = useAppSelector(state => state.auth);
    const {data: user} = useGetUserQuery(userId);
    const dispatch = useDispatch();

    useEffect(() => {
        if (user) {
            dispatch(setUserData(user.user));
        }
    }, [user, dispatch]);


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

export default Layout;