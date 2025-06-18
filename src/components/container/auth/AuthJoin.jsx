import { current } from '@reduxjs/toolkit';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

const joinData = {
    userEmail: '',
    uwserPw: '',
    userName: '',
    age: 0,
    address: '',
    role: 'ROLE_MEMBER'
}

const AuthJoin = () => {
    // const wrapTag = document.querySelector('.wrap');
    // const txtTag = document.querySelector('.txt'),
    //     txt = 'Everything about the pet you want'.split('');

    // txt.push(...txt)
    // for (let i = 0; i < txt.length; i++) {
    //     txtTag.innerText += `${txt[i]}\u00A0\u00A0`
    // }

    // let xVal = 0;
    // if (xVal > txtTag.scrollWidth / 2) {
    //     txtTag.style.transform = 'translateX(0)'
    //     xVal = 0;
    // }
    // txtTag.style.transform = `translateX(${xVal}px)`

    // const marqueenTxt = (xVal, el, dir) => {
    //     if (xVal > el.scrollWidth / 2) {
    //         el.style.transform = 'translateX(0)'
    //         xVal = 0;
    //     }
    //     el.style.transform = `translateX(${xVal * dir}px)`
    //     return xVal
    // }
    // const animate = () => {
    //     xVal += 2;
    //     xVal = marqueenTxt(xVal, txtTag, -1)

    //     requestAnimationFrame(animate)
    // }
    // animate();

    const Navigate = useNavigate()
    const [join, setjoin] = useState(joinData)

    const isLogin = useSelector(state => state.auth.isLogin)


    return (
        <div className="auth-join">
            {/* <div className="wrap">
                <p className="text"></p>
            </div> */}
            <div className="auth-join-con">
                <ul>
                    <h1>SIGN UP</h1>
                    <li>
                        <input type='email' name='userEmail' id='userEmail'
                            placeholder='EMAIL' />
                    </li>
                    <li>
                        <input type="password" name="userPw" id="userPw"
                            placeholder='PASSWORD' />
                    </li>
                    <li>
                        <input type="text" name="userName" id="userName"
                            placeholder='NAME' />
                    </li>
                    <li>
                        <input type="text" name="age" id="age"
                            placeholder='age' />
                    </li>
                    <li>
                        <input type="text" name="address" id="address"
                            placeholder='Address' />
                    </li>
                    <li>
                        <label htmlFor="role">ROLE</label>
                        <select name="role" id="role">
                            <option value="ROLE_MEMBER">MEMBER</option>
                            <option value="ROLE_ADMIN">ADMIN</option>
                        </select>
                    </li>
                    <li className='button_li'>
                        <button>SIGNUP</button>
                        <button onClick={() => { Navigate('/auth/login') }}>LOGIN</button>
                        <button onClick={() => { Navigate('/') }}>HOME</button>

                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AuthJoin