import React from 'react'
import { useNavigate } from 'react-router-dom'

const AuthJoin = () => {
    const Navigate = useNavigate()

    return (

        <div className="auth-join">
            <div className="auth-join-con">
                <h1>SIGN UP</h1>
                <ul>
                    <li>
                        <input type='email' name='userEmail' id='userEmail'
                            placeholder='EMAIL' />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AuthJoin