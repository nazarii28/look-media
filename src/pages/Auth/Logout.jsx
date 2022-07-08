import React, {useContext, useEffect} from 'react';
import {Navigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logout} from "../../store/actions/auth";

const Logout = () => {
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(logout())
  }, [])

  return (
    <>
      <Navigate to="/login"/>
    </>
  );
};

export default Logout;