import React, { useState } from 'react'
import { logOutUserFn } from '../../../slices/authSlice';
import { useSelector } from 'react-redux';





const AdminNav = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isLogin = useSelector(state => state.auth.isLogin)
    const isAuthenticated = isLogin || isLoggedIn;



    return (
        <>
            <div className="admin_nav" onClick={logOutUserFn}> LOGOUT </div>
            <div className="admin-nav-con"> 관리페이지 </div>
        </>
    )
}

export default AdminNav