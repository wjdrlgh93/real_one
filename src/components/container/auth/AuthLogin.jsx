import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const AuthLogin = () => {

    const Navigate = useNavigate();
    return (
        <div className="auth-login">
            <div className="auth-login-con">
                <h1>L O G I N</h1>
                <ul>
                    <li>
                        <input type='email' name='userEmail' id='userEmail'
                            placeholder='EMAIL' />
                    </li>
                    <li>
                        <input type='password' name='userPw' id="userPw"
                            placeholder='PASSWORD' />
                    </li>
                    <li>
                        <button>LOGIN</button>
                        <button onClick={() => { Navigate('/auth/join') }}>JOIN</button>
                        <button onClick={() => { Navigate('/') }}>HOME</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AuthLogin