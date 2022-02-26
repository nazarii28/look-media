import {useContext, useState} from "react";

import RegisterForm from "../../components/AuthForm/RegisterForm";
import LoginForm from "../../components/AuthForm/LoginForm";
import {AuthContext} from "../../context/auth/authContext";
import Button from "../../components/UI/Button";
import classes from './Auth.module.sass'
import background from '../../assets/images/bruce-mars-DBGwy7s3QY0-unsplash.jpg'


const Auth = () => {
  const {auth, state} = useContext(AuthContext)
  const [isSignIn, setIsSignIn] = useState(false)

  const signIn = () => {
    setIsSignIn(true)
  }

  return (
    <div style={{backgroundImage: `url(${background})`}} className="flex items-center h-full">
      <div className={classes.visit}>
        <span className="uppercase opacity-70">Best social network</span>
        <h1 className={classes.title}><span>Welcome</span> to look media network</h1>
        <p className="opacity-70">
          Global media product network in one application
        </p>
        <Button className="mt-7" onClick={signIn}>
          Sign in
        </Button>
      </div>
      <div
        style={{
          background: 'rgba(0, 0, 0, 0.5)'
        }}
        className="flex flex-col ml-auto w-full max-w-lg px-5 py-20 h-full justify-center">
        {isSignIn
          ?
          <LoginForm
            onSubmit={(values) => auth(values)}
          />
          :
          <RegisterForm
            onSubmit={(values) => auth(values)}
          />
        }
        {state.error &&
        <p style={{
          color: "red"
        }}>
          {state.error}
        </p>
        }
        <p className={classes.formDesc}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consectetur cumque delectus, incidunt, iusto magnam nam nobis non praesentium quas, quod soluta temporibus tenetur velit.
        </p>
      </div>
    </div>
  )
}

export default Auth