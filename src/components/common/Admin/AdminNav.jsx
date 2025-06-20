import React, { useEffect, useState } from 'react'
import { logOutUserFn } from '../../../slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';





const AdminNav = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isLogin = useSelector(state => state.auth.isLogin)


    const storedUserLoggedInformation = localStorage.getItem("isLoggedIn")
    const dispatch = useDispatch();

    const handleLogout = () => {

        dispatch(logOutUserFn());
        nav('/auth')

    }


    const nav = useNavigate()

    useEffect(() => {

        if (storedUserLoggedInformation === "1") {
            setIsLoggedIn(true);
            console.log(`YOU ARE ALREADY LOGGED IN`)
        }
        if (localStorage.getItem("isLoggedIn")) {
            // Navigate("/shop");

        }


    }, [isLogin])

    return (

        <>
            {
                storedUserLoggedInformation === '1' ?
                    // !isAuthenticated ?
                    (
                        <>
                            <div className="admin_nav" onClick={handleLogout}> LOGOUT </div>
                            <div className="admin-nav-con"> 관리페이지 </div>
                        </>

                    ) : (
                        nav('/auth')
                    )
            }
        </>
    )
}

export default AdminNav