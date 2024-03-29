import React from 'react';
import classes from './Account.module.sass';
import {BiEditAlt, BiTrash} from "react-icons/bi";
import AccountSettings, { IAccountSettingsFormValues } from "../../components/AccountSettings";
import {useDispatch} from "react-redux";
import Loader from "../../components/UI/Loader";
import classNames from "classnames";
import UserIcon from '../../static/avatar.webp'
import {useUpdateUserDataMutation, useUpdateAvatarMutation} from "../../services/auth";
import {setUserData} from "../../features/authSlice";
import {useAppSelector} from "../../store";


const Account = () => {

    const user = useAppSelector(state => state.auth)
    const dispatch = useDispatch()

    const [updateUserData, {isLoading}] = useUpdateUserDataMutation()
    const [updateAvatar] = useUpdateAvatarMutation()

    const handleSubmit = async (values: IAccountSettingsFormValues) => {
        const responseData = await updateUserData({id: user.userId, ...values}).unwrap()
        dispatch(setUserData(responseData.user))
    }

    const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.currentTarget.files) {
            updateAvatar({id: user.userId, image: e.currentTarget.files[0]})
        }
    }

    const removeAvatarHandler = () => {
        // dispatch(deleteAvatar(user.userId))
    }

    return (
        <div className="py-4 px-7">
            <h1 className="h1 mb-3">My account</h1>
            <div className="flex">
                <div>
                    <p className="subtitle">Personal information</p>
                    <div className={classes.accountMeta}>
                        <div className={classes.avatar}>
                            <img
                                src={Boolean(user.avatar) ? process.env.REACT_APP_BACKEND_URL + '/' + user.avatar : UserIcon}
                                alt="avatar"/>
                            <label className={classNames(classes.editBtn, classes.imageLabel)}
                                   htmlFor="avatar"><BiEditAlt/></label>
                            {
                                Boolean(user.avatar) &&
                                <button onClick={removeAvatarHandler}
                                        className={classNames(classes.deleteBtn, classes.imageLabel)}><BiTrash/>
                                </button>
                            }
                            <input onChange={uploadImage} className="hidden" type="file" id="avatar" accept="image/*"/>
                        </div>
                        <div>
                            <h2>{user.firstName} {user.lastName ? user.lastName : null}</h2>
                            <span className={classes.metaDesc}>{user.email}</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, quidem.</p>
                        </div>
                    </div>
                </div>
                {isLoading
                    ?
                    <div className="">
                        <Loader/>
                    </div>
                    :
                    <AccountSettings user={user} onSubmit={handleSubmit}/>
                }

            </div>
        </div>
    );
};

export default Account;