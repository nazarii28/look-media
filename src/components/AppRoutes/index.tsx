import {useEffect} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "../../pages/Home";
import Auth from "../../pages/Auth";
import Account from "../../pages/Account";
import Author from "../../pages/Author";
import NotFound from "../../pages/NotFound";
import Layout from "../Layout";
import Favorite from "../../pages/Favorite";
import {useDispatch} from "react-redux";
import {autoLogin} from "../../features/authSlice";
import AddSong from "../../pages/AddSong";
import History from "../../pages/History";
import Album from "../../pages/Album";
import {useAppSelector} from "../../store";

const AppRoutes = () => {
    const dispatch = useDispatch();
    const {token, loading} = useAppSelector(state => state.auth);


    const defaultRoutes = () => {
        return (
            <Routes>
                <Route path="/auth/*" element={<Auth/>}/>
                <Route path="/auth/" element={<Navigate to="/auth/register"/>}/>
                <Route path="*" element={<Navigate to="/auth/register"/>}/>
            </Routes>
        )
    }

    const authRoutes = () => {
        return (
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/account" element={<Account/>}/>
                <Route path="/author/:id" element={<Author/>}/>
                <Route path="/albums/:id" element={<Album/>}/>
                <Route path="/favorite" element={<Favorite/>}/>
                <Route path="/add-song" element={<AddSong/>}/>
                <Route path="/history" element={<History/>}/>
                <Route
                    path="/auth/*"
                    element={<Navigate to="/"/>}
                />

                <Route path="*" element={<NotFound/>}/>
            </Routes>
        )
    }


    useEffect(() => {
        dispatch(autoLogin());
    }, [])


    if (loading) {
        return <div>
            loading
        </div>
    }

    return (
        <>
            {
                !!token ?
                    <Layout>
                        {authRoutes()}
                    </Layout>
                    : defaultRoutes()
            }
        </>
    )
}

export default AppRoutes