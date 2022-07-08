import React, {useCallback, useEffect, useMemo, useState} from 'react';
import classes from './Account.module.sass'
import {BiEditAlt} from "react-icons/bi";
import AccountSettings from "../../components/AccountSettings";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {getUser} from '../../store/actions/auth'

const Index = () => {

  const user = useSelector(state => state.auth)
  const dispatch = useDispatch()

  useEffect( async () => {
    // const response = await axios.get(`api/user/${user.userId}/favorite/songs`)
    // console.log(response)
  }, [])

  const handleSubmit = async (values) => {
    const response = await axios.post(`api/user/${user.userId}`, {
      values
    })
  }

  return (
    <div className="py-4 px-7">
      <h1 className="h1 mb-3">My account</h1>
       <div className="flex">
         <div>
           <p className="subtitle">Personal information</p>
           <div className={classes.accountMeta}>
             <div className={classes.avatar}>
               <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="avatar"/>
               <span><BiEditAlt/></span>
             </div>
             <div>
               <h2>{user.firstName} {user.lastName ? user.lastName : null}</h2>
               <span className={classes.metaDesc}>{user.email}</span>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, quidem.</p>
             </div>
           </div>
         </div>
         {user.loading ? <p>loading...</p> :
           <AccountSettings user={user} onSubmit={handleSubmit} />
         }

       </div>
    </div>
  );
};

export default Index;