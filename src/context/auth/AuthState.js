import {AuthContext} from "./authContext";
import {authReducer} from './authReducer'

import {useReducer} from "react";
import axios from 'axios'
import {ERROR, LOADING, LOGIN, LOGOUT} from "../types";
import {errors} from "../../errors";


export const AuthState = ({children}) => {

  const initialState = {
    token: null,
    error: null,
    loading: true
  }

  const [state, dispatch] = useReducer(authReducer, initialState)


  async function auth({email, password, name}) {

    let response = null

    if(name) {
      try {
        response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAaA0YBWYn45LgrE_axxCnvcauhPUVC9Aw', {
          email, password, name,
          returnSecureToken: true
        })
      } catch (e) {
        console.log(e)
      }
    } else {
     try {
       response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAaA0YBWYn45LgrE_axxCnvcauhPUVC9Aw', {
         email, password,
         returnSecureToken: true
       })
     } catch (e) {
       setError(e.response.data.error.message)
     }
    }


    const data = response.data

    const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000)

    localStorage.setItem('token', data.idToken)
    localStorage.setItem('userId', data.localId)
    localStorage.setItem('expirationDate', expirationDate)


    authSuccess(data.idToken)
    autoLogout(data.expiresIn)
  }

   function autoLogin() {
     //setLoading()
     const token = localStorage.getItem('token')
     if (!token) {
       logout()
     } else {
       const expirationDate = new Date(localStorage.getItem('expirationDate'))
       if (expirationDate <= new Date()) {
         logout()
       } else {
         authSuccess(token)
         autoLogout((expirationDate.getTime() - new Date().getTime()) / 1000)
       }
     }
  }

  const authSuccess = (token) => dispatch({
    type: LOGIN,
    token
  })

  const autoLogout = (time) => {
    setTimeout(() => {
      logout()
    }, time * 1000)
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('expirationDate')
    dispatch({
      type: LOGOUT
    })
  }

  const setError = (error) => dispatch({
    type: ERROR,
    error: errors[error]
  })

  const setLoading = () => dispatch({
    type: LOADING
  })

  return (
    <AuthContext.Provider value={{state, auth, autoLogin, logout}}>
      {children}
    </AuthContext.Provider>
  )
}