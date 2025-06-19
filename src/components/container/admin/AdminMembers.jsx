import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useFormState } from 'react-dom'
import { useNavigate } from 'react-router-dom'

const AdminMembers = () => {

    const [memberList, setMemberList] = useState([])
    const [modlaOpen, setModalOpen] = useState(false);
    const modalBackground = useRef();
    const navi = useNavigate()

    useEffect(() => {
        const onAdminMemberListFn = async () => {
            const dataURL = `http://localhost:3000/members`
            try {
                const res = await axios.get(`${dataURL}`)
                setMemberList(res.data)

            } catch (err) {
                alert(err)
            }
        }
        onAdminMemberListFn()
    }, [])
    return (
        // router Linking
        <>
            <div className="admin-memberList">
                <div className="admin-memberList-con">
                    <h1>회원목록</h1>
                    <table>
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
                                            setModalOpen(true)
                                        }}>Detail</td>
                                </tr>
                            )
                        })}
                    </table>
                    {
                        modlaOpen &&
                        <div className={'modal-container'} ref={modalBackground} onClick={e => {
                            if (e.target === modalBackground.current) {
                                setModalOpen(false);
                            }
                        }}>
                            <div className={'modal-content'}>
                                <p>리액트로 모달 구현하기</p>
                                <button className={'modal-close-btn'} onClick={() => setModalOpen(false)}>
                                    모달 닫기
                                </button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default AdminMembers