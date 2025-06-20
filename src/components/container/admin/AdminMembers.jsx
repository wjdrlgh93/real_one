import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useFormState } from 'react-dom'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

const AdminMembers = () => {

    const [memberObj, setMemberObj] = useState({}) // Object init
    const [memberList, setMemberList] = useState([])    //Array Init
    const [modlaOpen, setModalOpen] = useState(false);
    const modalBackground = useRef();

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isLogin = useSelector(state => state.auth.isLogin)
    const isAuthenticated = isLogin || isLoggedIn;


    // Link to > admin/memberList/(Modal)=>user.id
    const param = useParams()

    useEffect(() => {
        const onAdminMemberListFn = async () => {
            // get Member match by User
            const dataURL = `http://localhost:3000/members`
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

                        <br />
                        <div className='memberListShow'>
                            <div className='rf'>ID : {memberObj.id} </div>
                            <div className='rs'>EMAIL : <br />{memberObj.userEmail} </div>
                            <div className='rt'>
                                NAME : {memberObj.userName}님 <br />
                                AGE : {memberObj.age} <br />
                                ADDRESS : {memberObj.address} <br />


                            </div>
                        </div>
                        <button className={'modal-close-btn'} onClick={() => setModalOpen(false)}>
                            닫기
                        </button>
                    </div>
                </div>
            }


        </>
    )
}

export default AdminMembers