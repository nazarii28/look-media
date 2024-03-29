import {useEffect} from "react";

import RegisterForm, { IRegisterFormValues } from "../../components/AuthForm/RegisterForm";
import LoginForm, { ILoginFormValues } from "../../components/AuthForm/LoginForm";
import Button from "../../components/UI/Button";
import classes from './Auth.module.sass'
import background from '../../assets/images/bruce-mars-DBGwy7s3QY0-unsplash.jpg'
import {useDispatch} from "react-redux";
import {Link, Route, Routes} from "react-router-dom";
import {useLoginMutation, useRegisterMutation} from "../../services/auth";
import {setCredentials, setError} from "../../features/authSlice";
import {useAppSelector} from "../../store";


const Auth = () => {

    const dispatch = useDispatch()
    const {error} = useAppSelector(state => state.auth)

    const [login] = useLoginMutation()
    const [register] = useRegisterMutation()

    const loginHandler = async (values: ILoginFormValues) => {
        try {
            const data = await login(values).unwrap()
            dispatch(setCredentials(data))
        } catch (e) {
            dispatch(setError(e.data.message))
        }
    }

    const registerHandler = async (values: IRegisterFormValues) => {
        try {
            const data = await register({...values, firstName: values.name}).unwrap()
            dispatch(setCredentials(data))
        } catch (e) {
            dispatch(setError(e.data.message))
        }
    }

    useEffect(() => {
        // window.gapi.load('auth2', function () {
        //     window.gapi.auth2.init({
        //         client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID
        //     }).then((data) => {
        //         console.log(data)
        //     })
        // });
    }, [])


    // const signInWithGoogle = async (type) => {
        // const auth2 = window.gapi.auth2.getAuthInstance()
        //
        // const user = await auth2.signIn()
        //
        // if (type === 'register') {
        //     const profile = user.getBasicProfile()
        // }
    // }


    return (
        <div style={{backgroundImage: `url(${background})`}} className="flex items-center h-full">
            <div className={classes.visit}>
                <span className="uppercase opacity-70">Best social network</span>
                <h1 className={classes.title}><span>Welcome</span> to look media network</h1>
                <p className="opacity-70">
                    Global media product network in one application
                </p>
                <Link to={'/auth/login'}>
                    <Button className="mt-7">
                        Sign in
                    </Button>
                </Link>
            </div>
            <div
                style={{
                    background: 'rgba(0, 0, 0, 0.5)',
                }}
                className="flex flex-col ml-auto w-full max-w-lg px-5 py-20 h-full justify-center">
                <Routes>
                    <Route
                        path={'login'}
                        element={
                            <LoginForm
                                onSubmit={loginHandler}
                            />
                        }/>
                    <Route
                        path={'register'}
                        element={
                            <RegisterForm
                                onSubmit={registerHandler}
                            />
                        }/>
                </Routes>
                {error &&
                <p style={{
                    color: "red"
                }}>
                    {error}
                </p>
                }
                <p className={classes.formDesc}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consectetur cumque delectus,
                    incidunt, iusto magnam nam nobis non praesentium quas, quod soluta temporibus tenetur velit.
                </p>
            </div>
        </div>
    )
}

export default Auth