import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom'
import { getMemberSelectorApi } from '../../../API/authAPI';
import { loginUserFn } from '../../../slices/authSlice';

const loginData = {
    userEmail: '',
    userPw: ''
}

const AuthLogin = () => {

    const Navigate = useNavigate();


    const [login, setLogin] = useState(loginData)



    const isLogin = useSelector(state => state.auth.isLogin)


    const dispatch = useDispatch()

    const onLoginchangeFn = (e) => {
        const name = e.target.name
        const value = e.target.value
        setLogin({ ...login, [name]: value })
    }
    const onLoginFn = (e) => {

        const loginAxiosFn = async () => {
            try {
                alert(`로그인을 시도합니다...`)
                const resAPI = await getMemberSelectorApi()

                const num = resAPI.findIndex(el => {
                    return el.userEmail === login.userEmail && el.userPw === login.userPw
                })
                const isVal = resAPI.filter(el => {
                    return el.userEmail === login.userEmail && el.userPw === login.userPw
                })
                console.log(isVal)
                if (isVal.length > 0) {
                    alert(`로그인에 성공하였습니다`)
                    dispatch(loginUserFn(isVal[0]))
                    Navigate(`/shop_list`)
                } else {
                    alert(`이메일 또는 비밀번호가 일치하지 않습니다.`)
                }
            } catch (err) {
                alert(err)
            }
        }
        loginAxiosFn()
    }

    useEffect(() => {
        if (isLogin) {
            alert(`이미로그인 중입니다`)
            Navigate('/')
        }
    }, [])

    return (
        <>
            <div className="auth-login">
                <div className="auth-login-con">
                    {!isLogin ?
                        <>
                            <h1>L O G I N</h1>
                            <ul>
                                <li>
                                    <input type='email' autocomplete="off" name='userEmail' id='userEmail'
                                        placeholder='EMAIL' value={login.userEmail} onChange={onLoginchangeFn} />
                                </li>
                                <li>
                                    <input type='password' autocomplete="off" name='userPw' id="userPw"
                                        placeholder='PASSWORD' value={login.userPw} onChange={onLoginchangeFn} />
                                </li>
                                <li>
                                    <button onClick={onLoginFn} className='login'>LOGIN</button>
                                    <button onClick={() => { Navigate('/auth/join') }}>JOIN</button>
                                    <button onClick={() => { Navigate('/') }}>HOME</button>
                                </li>
                            </ul>
                        </> : <></>
                    }
                </div>
            </div >
        </>
    )
}

export default AuthLogin