import { current } from '@reduxjs/toolkit';
import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { getMemberSelectorApi } from '../../../API/authAPI'
import axios from 'axios';

const joinData = {
    userEmail: '',
    userPw: '',
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

    const onInputchangeFn = (e) => {
        const name = e.target.name;
        const value = e.target.value
        setjoin({ ...join, [name]: value })
    }

    const onJoinFn = (e) => {

        const dataURL = `http://localhost:3001/members`
        if (!join.userEmail) {
            alert("이메일을 입력해 주세요.");
            return;
        }

        if (!join.userPw) {
            alert("비밀번호를 입력해 주세요.");
            return;
        }
        if (!join.userEmail || !join.userPw || !join.userName || !join.age || !join.address) {
            alert("입력한 정보가 유효하지 않습니다. 다시 확인해 주세요.");
            return;
        }
        const joinAxiosFn = async () => {
            try {
                alert(`회원가입을 신청합니다. 잠시만 기다려주세요...`)
                const resAPI = await getMemberSelectorApi()
                if (resAPI === null) {
                    alert('회원가입에 실패했습니다. 나중에 다시 시도해 주세요..')
                    return
                }
                // is Email Already Exist??
                const isEmailExist = resAPI.findIndex(el => {
                    return el.userEmail === join.userEmail
                }) // if no exist return -1 
                if (isEmailExist !== -1) {
                    alert(`이미 존재하는 이메일 입니다. 다른 이메일로 시도해주세요`)
                    return
                }
                // axios> POST > JOINPage
                // after Join Move LoginPage
                const joinOK = await axios.post(`${dataURL}`, join) //add account
                alert(`회원가입이 완료되었습니다. 로그인페이지로 이동합니다. `)
                Navigate(`/auth/login`)
            } catch (err) {
                alert(`회원가입에 실패하였습니다 :: ` + err)
            }
        }
        joinAxiosFn()
    }

    useEffect(() => {
        if (isLogin) {
            alert(`이미 로그인이 되어있습니다, 이전 페이지로 이동합니다`)
            Navigate(`/`)
        }
    }, [])

    return (
        <div className="auth-join">
            <video className='bg_v' autoPlay muted loop>
                <source src="/videos/dogiBG.mp4" type="video/mp4" />
            </video>
            <div className="auth-join-con">
                <ul>
                    <h1>SIGN UP</h1>
                    <li>
                        <input type='email' name='userEmail' id='userEmail'
                            placeholder='EMAIL' value={join.userEmail} onChange={onInputchangeFn} />
                    </li>
                    <li>
                        <input type="password" name="userPw" id="userPw"
                            placeholder='PASSWORD' value={join.userPw} onChange={onInputchangeFn} />
                    </li>
                    <li>
                        <input type="text" name="userName" id="userName"
                            placeholder='NAME' value={join.userName} onChange={onInputchangeFn} />
                    </li>
                    <li>
                        <input type="text" name="age" id="age"
                            placeholder='age' value={join.age} onChange={onInputchangeFn} />
                    </li>
                    <li>
                        <input type="text" name="address" id="address"
                            placeholder='Address' value={join.address} onChange={onInputchangeFn} />
                    </li>
                    <li>
                        <label htmlFor="role">ROLE</label>
                        <select name="role" id="role"
                            value={join.role} onChange={onInputchangeFn}>
                            <option value="ROLE_MEMBER" defaultValue >MEMBER</option>
                            <option value="ROLE_ADMIN">ADMIN</option>
                        </select>
                    </li>
                    <li className='button_li'>
                        <button onClick={onJoinFn}>SIGNUP</button>
                        <button onClick={() => { Navigate('/auth/login') }}>LOGIN</button>
                        <button onClick={() => { Navigate('/') }}>HOME</button>

                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AuthJoin