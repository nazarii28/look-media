import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/auth/authContext";
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "../../pages/Home";
import Auth from "../../pages/Auth";
import Account from "../../pages/Account";
import NotFound from "../../pages/NotFound";
import Layout from "../Layout/Layout";
import Logout from "../../pages/Auth/Logout";


const AppRoutes = () => {
  const {state, autoLogin} = useContext(AuthContext)
  const [isAuth, setIsAuth] = useState(false)

  const defaultRoutes = () => {
    return (
      <Routes>
        <Route path="/auth" element={<Auth/>} />
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    )
  }

   const authRoutes = () => {
      return (
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/logout" element={<Logout/>} />
          <Route path="/account" element={<Account/>} />
          <Route
            path="/auth"
            element={<Navigate to="/" />}
          />

          <Route path="*" element={<NotFound/>} />
        </Routes>
      )
   }

  useEffect(() => {
    autoLogin()
  }, [])


  useEffect(() => {
    setIsAuth(!!state.token)
  }, [state.token])


  return (
   <>
     {
       isAuth ?
         <Layout>
           {authRoutes()}
         </Layout>
         : defaultRoutes()
     }
   </>
  )
}

export default AppRoutes