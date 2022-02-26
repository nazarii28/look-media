import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {useContext, useEffect} from "react";

import Layout from "./components/Layout/Layout";
import Home from './pages/Home/'
import Auth from "./pages/Auth";

import {AuthContext} from "./context/auth/authContext";
import {TrackState} from "./context/track/TrackState";
import {AuthState} from "./context/auth/AuthState";
import AppRoutes from "./components/AppRoutes";
import SongsState from "./context/songs/SongsState";

function App() {
  return (
    <Router>
      <AuthState>
       <SongsState>
         <TrackState>
           <AppRoutes/>
         </TrackState>
       </SongsState>
      </AuthState>
    </Router>
  );
}

export default App;
