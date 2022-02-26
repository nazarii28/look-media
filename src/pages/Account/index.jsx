import React from 'react';
import classes from './Account.module.sass'
import {BiEditAlt} from "react-icons/bi";
import AccountSettings from "../../components/AccountSettings";

const Index = () => {
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
             <h2>Alexis sanchez</h2>
             <span className={classes.metaDesc}>Some information</span>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, quidem.</p>
           </div>
         </div>
       </div>
       <AccountSettings/>
     </div>
    </div>
  );
};

export default Index;