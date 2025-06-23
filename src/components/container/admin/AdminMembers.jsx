import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useFormState } from 'react-dom'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

const joinData = {
    userEmail: '',
    userPw: '',
    userName: '',
    age: '',
    address: '',
    role: 'ROLE_MEMBER'
}


const AdminMembers = () => {

    const [memberObj, setMemberObj] = useState({}) // Object init
    const [memberList, setMemberList] = useState([])    //Array Init
    const [modlaOpen, setModalOpen] = useState(false);
    const [join, setjoin] = useState(joinData)
    const modalBackground = useRef();

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isLogin = useSelector(state => state.auth.isLogin)

    const navigate = useNavigate()


    const onInputchangeFn = (e) => {
        const name = e.target.name;
        const value = e.target.value
        setjoin({ ...join, [name]: value })
    }



    // Link to > admin/memberList/(Modal)=>user.id
    const param = useParams()

    useEffect(() => {
        const onAdminMemberListFn = async () => {
            // get Member match by User
            const dataURL = `http://localhost:3001/members`
            try {
                const res = await axios.get(`${dataURL}`)
                setMemberList(res.data)
                setMemberObj(res.data[0])

            } catch (err) {
                alert(err)
            }
        }
        onAdminMemberListFn(param.id)
    }, [])

    const updateOkFn = async () => {
        const dataURL = `http://localhost:3001/members`

        const updateAxiosFn = async (updateData) => {
            try {
                // isMmember Exist? -> if exist same ID -> fix memberInfo
                const res1 = await axios.get(`${dataURL}`)
                const num = res1.data.findIndex(el => {
                    return el.id === memberObj.id
                })
                if (num === -1) {
                    alert(`Member does not exist!`)
                    return
                }
                alert(`try fix Member Info...`)
                const res = await axios.put(`${dataURL}/${updateData.id}`, updateData)
                navigate('/admin/members')

            } catch (err) { }
        }
        updateAxiosFn(memberObj)
    }

    const deleteOkFn = (e) => {
        const dataURL = `http://localhost:3001/members`
    }






    return (
        // router Linking

        <>
            <h1 className='adminTitle'>회원목록</h1>
            <table className="admin-memberList-con">
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>userEmail</th>
                        <th>userPw</th>
                        <th>userName</th>
                        <th>age</th>
                        <th>address</th>
                        <th>role</th>
                        <th>보기</th>
                    </tr>
                    {memberList && memberList.map(el => {
                        return (
                            <tr>
                                <td>{el.id}</td>
                                <td>{el.userEmail}</td>
                                <td>{el.userPw}</td>
                                <td>{el.userName}</td>
                                <td>{el.age}</td>
                                <td>{el.address}</td>
                                <td>{el.role}</td>
                                <td className={'modal-td'}
                                    onClick={() => {
                                        setMemberObj(el)
                                        setModalOpen(true)
                                    }}>Detail</td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
            {
                modlaOpen &&
                <div className={'modal-container'} ref={modalBackground} onClick={e => {
                    if (e.target === modalBackground.current) {
                        setModalOpen(false);
                    }
                }}>

                    <div className={'modal-content'}>
                        <div className={'memInfo'}> === MEMBER INFO ===</div>
                        {memberObj.role === "ADMIN" ? <>관리자님 안녕하세요!</> : <>일반회원</>}
                        <ul>
                            <li className='modal-li'>
                                <label htmlFor="id">ID</label>
                                <input type="text" name="id" id="id" value={memberObj.id} readOnly
                                    onChange={onInputchangeFn} />
                            </li>
                            <li className='modal-li'>
                                <label htmlFor="userEmail">이메일</label>   {/* DO NOT FIX EMAIL*/}
                                <input type="email" name="userEmail" id="userEmail" placeholder='EMAIL' readOnly
                                    value={memberObj.userEmail}
                                    onChange={onInputchangeFn} />
                            </li>
                            <li className='modal-li'>
                                <label htmlFor="userName">이름</label>
                                <input type="text" name='userName' id='userName' placeholder='NAME'
                                    value={memberObj.userName} onChange={onInputchangeFn} />
                            </li>
                            <li className='modal-li'>
                                <label htmlFor="userPw">비밀번호</label>
                                <input type="text" name='userPw' id='userPw' placeholder='PASSWORD'
                                    value={memberObj.userPw} onChange={onInputchangeFn} />
                            </li>
                            <li className='modal-li'>
                                <label htmlFor="address">주소</label>
                                <input type="text" name='address' id='address' placeholder='address'
                                    value={memberObj.address} onChange={onInputchangeFn} />
                            </li>
                            <li className='modal-li'>
                                <label htmlFor="age">나이</label>
                                <input type="text" name='age' id='age' placeholder='age'
                                    value={memberObj.age} onChange={onInputchangeFn} />
                            </li>
                            <li className='modal-li'>
                                <label htmlFor="role">권한</label>
                                <select name="role" id="role"
                                    value={memberObj.role} onChange={onInputchangeFn}>
                                    <option value='ROLE_MEMBER' defaultValue>MEMBER</option>
                                    <option value="ADMIN">ADMIN</option>
                                </select>
                            </li>
                        </ul>



                        <button className={'modal-btn'} onClick={updateOkFn}>수정</button>
                        <button className={'modal-btn'}>삭제</button><br />
                        <button className={'modal-close-btn'} onClick={() => setModalOpen(false)}>
                            닫기
                        </button>
                    </div>
                </div >
            }


        </>
    )
}

export default AdminMembers